#!/bin/node
import path from 'path';

import {DIST_DIR, KATAS_DIR} from './config';
import {all as rawMetadata} from '../katas/es6/language/__raw-metadata__';

import {writeToFileAsJson} from './_external-deps/filesystem';
import MetaData from './metadata.js';
import FlatMetaData from './flat-metadata';
import GroupedMetaData from './grouped-metadata';

const destinationDir = path.join(DIST_DIR, 'katas/es6/language');

const buildMetadata = () => {
  const allJsonFile = path.join(destinationDir, '__all__.json');
  const groupedJsonFile = path.join(destinationDir, '__grouped__.json');

  new MetaData(writeToFileAsJson)
    .convertWith(rawMetadata, FlatMetaData)
    .writeToFile(allJsonFile);

  new MetaData(writeToFileAsJson)
    .convertWith(rawMetadata, GroupedMetaData)
    .writeToFile(groupedJsonFile);
};

import {convertTestsToKatas} from './convert-tests-to-katas';
convertTestsToKatas({sourceDir: KATAS_DIR, destinationDir: path.join(DIST_DIR, 'katas')})
  .then(buildMetadata)
;
