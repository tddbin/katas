import fs from 'fs';

export function writeToFileAsJson(fileName, obj) {
  let jsonified = JSON.stringify(obj, null, 2);
  fs.writeFileSync(fileName, jsonified, 'utf8');
}