import fs from 'fs';
import path from 'path';
import { parseChangelog, LINE_START_FOR_TODO } from './parse-changelog.js';

const CHANGELOG_FILENAME = path.join(__dirname, '../CHANGELOG.md');

const changelog = fs.readFileSync(CHANGELOG_FILENAME, 'utf-8');
const {version, items: notYetDone} = parseChangelog(changelog);

if (notYetDone.length === 0) {
  process.exit(0);
}
console.log(`+----------------------   Version ${version}   ----------------------`);
console.log(`+-------  You have stuff to do. NOT ready to release yet!  -----`);
console.log(`|`);
console.log(`|  ${notYetDone.length} items marked as TODO (in version ${version})`);
console.log(`|    ${LINE_START_FOR_TODO} ${notYetDone.join(`\n|    ${LINE_START_FOR_TODO} `)}`);
console.log(`|`);
console.log('+---------------------- Get it done, first! ---------------------\n');

process.exit(-1);
