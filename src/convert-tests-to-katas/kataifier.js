// @flow
const isKataLine = (line) => line.trim().startsWith('////');
const enableKataLine = (line) => line.replace(/\/\/\/\/\s*/, '');
const removeLinesAfterKataLine = (_, lineIndex, lines) => {
  if (lineIndex === 0) return true;
  const previousLine = lines[lineIndex-1];
  return !isKataLine(previousLine);
};

export const kataifyFile = (fileContent: string) => {
  const lines = fileContent.split('\n');
  return lines
    .filter(removeLinesAfterKataLine)
    .map(enableKataLine)
    .join('\n')
  ;
};

export const kataify = (
  kataifyableList: KataifyableListType,
  deps: KataifyDeps
): Promise<*> => {
  const kataifyableToTask = (kataifyable) =>
    deps.readFile(kataifyable.sourceFilename)
      .then(kataifyFile)
      .then(content => deps.writeFile(kataifyable.destinationFilename, content))
    ;

  return Promise.all(kataifyableList.map(kataifyableToTask));
};
