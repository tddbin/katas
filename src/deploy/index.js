#!/bin/node

import {all} from '../../katas/es6/language/__raw-metadata__.js';
import FlatMetaData from '../flat-metadata-structure';
import fs from 'fs';
import path from 'path';

import {writeToFileAsJson} from '../_external-deps/filesystem.js';
import MetaData from './metadata.js';

const destinationDir = path.join(__dirname, '../../dist/katas/es6/language');
const destJsonFile = path.join(destinationDir, '__all__.json');

new MetaData(writeToFileAsJson)
  .convertWith(all, FlatMetaData)
  .writeToFile(destJsonFile);

fs.unlinkSync(path.join(destinationDir, '__raw-metadata__.js'));