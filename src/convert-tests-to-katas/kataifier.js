// @flow
type KataifyableType = {
  sourceFilename: string;
  destinationFilename: string;
};
type KataifyableListType = Array<KataifyableType>;

type KataifyDeps = {
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

export const kataifyFile = (fileContent: string): string =>
  fileContent.split('\n')
    .filter(removeLinesAfterKataLine)
    .map(enableKataLine)
    .join('\n')
  ;

export const kataify = (
  kataifyableList: KataifyableListType,
  {readFile, writeFile}: KataifyDeps
): Promise<*> => {
  const kataifyableToTask = (kataifyable) =>
    readFile(kataifyable.sourceFilename)
      .then(kataifyFile)
      .then(content => writeFile(kataifyable.destinationFilename, content))
    ;

  return Promise.all(kataifyableList.map(kataifyableToTask));
};
