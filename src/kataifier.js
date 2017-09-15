const isKataLine = (line) => line.trim().startsWith('////');

const enableKataLine = (line) => line.replace(/\s*\/\/\/\//, '');

const removeLinesAfterKataLine = (_, lineIndex, lines) => {
  if (lineIndex === 0) return true;
  const previousLine = lines[lineIndex-1];
  return !isKataLine(previousLine);
};

const kataifyFileContent = (fileContent) => {
  const lines = fileContent.split('\n');
  return lines
    .filter(removeLinesAfterKataLine)
    .map(enableKataLine)
    .join('\n')
  ;
};

export const kataify = (dependencies) => {
  return dependencies.readFile()
    .then(kataifyFileContent)
    .then(dependencies.writeFile);
};
