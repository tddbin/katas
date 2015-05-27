#!/bin/node

import {all} from '../katas/es6/language/__all__.js';
import fs from 'fs';
import path from 'path';

const destinationDir = path.join(__dirname, '../dist/katas/es6/language');
const destJsonFile = path.join(destinationDir, '__all__.json');
fs.writeFileSync(destJsonFile, JSON.stringify(all, null, 2), 'utf8');

fs.unlinkSync(path.join(destinationDir, '__all__.js'));