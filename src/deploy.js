#!/bin/node
import path from 'path';
import fs from 'fs';

import {all as rawMetadata} from '../katas/es6/language/__raw-metadata__';

import {writeToFileAsJson} from './_external-deps/filesystem';
import MetaData from './metadata.js';
import FlatMetaData from './flat-metadata';
import GroupedMetaData from './grouped-metadata';

const destinationDir = path.join(__dirname, '../dist/katas/es6/language');
const allJsonFile = path.join(destinationDir, '__all__.json');
const groupedJsonFile = path.join(destinationDir, '__grouped__.json');

new MetaData(writeToFileAsJson)
  .convertWith(rawMetadata, FlatMetaData)
  .writeToFile(allJsonFile);

new MetaData(writeToFileAsJson)
  .convertWith(rawMetadata, GroupedMetaData)
  .writeToFile(groupedJsonFile);

fs.unlinkSync(path.join(destinationDir, '__raw-metadata__.js'));