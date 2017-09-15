import fs from 'fs';
import readDirs from 'recursive-readdir';

export function writeToFileAsJson(fileName, obj) {
  let jsonified = JSON.stringify(obj, null, 2);
  fs.writeFileSync(fileName, jsonified, 'utf8');
}

export const allKataFilesInDir = (dir) => {
  const onlyKataFiles = (fileName) =>
    fileName.endsWith('.js') && !fileName.endsWith('__raw-metadata__.js');

  return readDirs(dir)
    .then((files) => files.filter(onlyKataFiles))
  ;
};
