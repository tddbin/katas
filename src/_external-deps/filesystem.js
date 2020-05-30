import fs from 'fs';
import readDirs from 'recursive-readdir';

export function writeToFileAsJson(fileName, obj) {
  let jsonified = JSON.stringify(obj, null, 2);
  fs.writeFileSync(fileName, jsonified, 'utf8');
}

export const readFileAsString = (...args) =>
  fs.promises.readFile(...args)
    .then(content => content.toString())
;
export const writeFileFromString = fs.promises.writeFile;
export const mkdirp = (dir) => fs.promises.mkdir(dir, {recursive: true, mode: 0o775});
export const allFilesInDir = (dir) => readDirs(dir);
