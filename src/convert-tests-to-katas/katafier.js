// @flow
type KatafyableType = {
  sourceFilename: string;
  destinationFilename: string;
};
type KatafyableListType = Array<KatafyableType>;

type KatafyDeps = {
  readFile: (FilenameType) => Promise<*>;
  writeFile: (FilenameType, string) => Promise<*>;
};

const isKataLine = (line) => line.trim().startsWith('////');
const enableKataLine = (line) => line.replace(/\/\/\/\/\s*/, '');
const removeLinesAfterKataLine = (_, lineIndex, lines) => {
  if (lineIndex === 0) return true;
  const previousLine = lines[lineIndex-1];
  return !isKataLine(previousLine);
};

export const katafyFile = (fileContent: string): string =>
  fileContent.split('\n')
    .filter(removeLinesAfterKataLine)
    .map(enableKataLine)
    .join('\n')
  ;

export const katafy = (
  katafyableList: KatafyableListType,
  {readFile, writeFile}: KatafyDeps
): Promise<*> => {
  const katafyableToTask = (katafyable) =>
    readFile(katafyable.sourceFilename)
      .then(katafyFile)
      .then(content => writeFile(katafyable.destinationFilename, content))
    ;

  return Promise.all(katafyableList.map(katafyableToTask));
};
