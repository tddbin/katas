#!/bin/node

import {all} from '../katas/es6/language/__raw-metadata__';
import path from 'path';

import {writeToFileAsJson} from './_external-deps/filesystem';
import MetaData from './metadata.js';

const destinationDir = path.join(__dirname, '../dist/katas/es6/language');
const allJsonFile = path.join(destinationDir, '__all__.json');

import FlatMetaData from './flat-metadata';
new MetaData(writeToFileAsJson)
  .convertWith(all, FlatMetaData)
  .writeToFile(allJsonFile);

const groupedJsonFile = path.join(destinationDir, '__grouped__.json');
import GroupedMetaData from './grouped-metadata';
new MetaData(writeToFileAsJson)
  .convertWith(all, GroupedMetaData)
  .writeToFile(groupedJsonFile);

import fs from 'fs';
fs.unlinkSync(path.join(destinationDir, '__raw-metadata__.js'));