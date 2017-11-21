import fs from 'fs';
import util from 'util';
import readDirs from 'recursive-readdir';
import pureMkdirp from 'mkdirp-promise';

export function writeToFileAsJson(fileName, obj) {
  let jsonified = JSON.stringify(obj, null, 2);
  fs.writeFileSync(fileName, jsonified, 'utf8');
}

export const readFileAsString = (...args) =>
  util.promisify(fs.readFile)(...args)
    .then(content => content.toString())
;
export const writeFileFromString = util.promisify(fs.writeFile);
export const mkdirp = (dir) => pureMkdirp(dir, 0o775);
export const allFilesInDir = (dir) => readDirs(dir);
