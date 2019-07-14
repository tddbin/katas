#!/bin/node
import path from 'path';

import {DIST_DIR, KATAS_DIR} from './config';
import {all as rawMetadataEs1} from '../katas/es1/language/__raw-metadata__';
import {all as rawMetadataEs6} from '../katas/es6/language/__raw-metadata__';
import {all as rawMetadataEs7} from '../katas/es7/language/__raw-metadata__';
import {all as rawMetadataEs8} from '../katas/es8/language/__raw-metadata__';
import {all as rawMetadataEs10} from '../katas/es10/language/__raw-metadata__';
import {all as rawMetadataHamjest} from '../katas/libraries/hamjest/__raw-metadata__';

import {writeToFileAsJson} from './_external-deps/filesystem';
import MetaData from './metadata.js';
import FlatMetaData from './flat-metadata';
import GroupedMetaData from './grouped-metadata';

const destinationDirEs1 = path.join(DIST_DIR, 'katas/es1/language');
const destinationDirEs6 = path.join(DIST_DIR, 'katas/es6/language');
const destinationDirEs7 = path.join(DIST_DIR, 'katas/es7/language');
const destinationDirEs8 = path.join(DIST_DIR, 'katas/es8/language');
const destinationDirEs10 = path.join(DIST_DIR, 'katas/es10/language');
const destinationDirHamjest = path.join(DIST_DIR, 'katas/libraries/hamjest');

const buildMetadata = () => {
  new MetaData(writeToFileAsJson)
    .convertWith(rawMetadataEs1, FlatMetaData)
    .writeToFile(path.join(destinationDirEs1, '__all__.json'));

  new MetaData(writeToFileAsJson)
    .convertWith(rawMetadataEs1, GroupedMetaData)
    .writeToFile(path.join(destinationDirEs1, '__grouped__.json'));

  new MetaData(writeToFileAsJson)
    .convertWith(rawMetadataEs6, FlatMetaData)
    .writeToFile(path.join(destinationDirEs6, '__all__.json'));

  new MetaData(writeToFileAsJson)
    .convertWith(rawMetadataEs6, GroupedMetaData)
    .writeToFile(path.join(destinationDirEs6, '__grouped__.json'));

  new MetaData(writeToFileAsJson)
    .convertWith(rawMetadataEs7, FlatMetaData)
    .writeToFile(path.join(destinationDirEs7, '__all__.json'));

  new MetaData(writeToFileAsJson)
    .convertWith(rawMetadataEs7, GroupedMetaData)
    .writeToFile(path.join(destinationDirEs7, '__grouped__.json'));

  new MetaData(writeToFileAsJson)
    .convertWith(rawMetadataEs8, FlatMetaData)
    .writeToFile(path.join(destinationDirEs8, '__all__.json'));

  new MetaData(writeToFileAsJson)
    .convertWith(rawMetadataEs8, GroupedMetaData)
    .writeToFile(path.join(destinationDirEs8, '__grouped__.json'));

  new MetaData(writeToFileAsJson)
    .convertWith(rawMetadataEs10, FlatMetaData)
    .writeToFile(path.join(destinationDirEs10, '__all__.json'));

  new MetaData(writeToFileAsJson)
    .convertWith(rawMetadataEs10, GroupedMetaData)
    .writeToFile(path.join(destinationDirEs10, '__grouped__.json'));

  new MetaData(writeToFileAsJson)
    .convertWith(rawMetadataHamjest, FlatMetaData)
    .writeToFile(path.join(destinationDirHamjest, '__all__.json'));

  new MetaData(writeToFileAsJson)
    .convertWith(rawMetadataHamjest, GroupedMetaData)
    .writeToFile(path.join(destinationDirHamjest, '__grouped__.json'));
};

import {convertTestsToKatas} from './convert-tests-to-katas';
convertTestsToKatas({sourceDir: KATAS_DIR, destinationDir: path.join(DIST_DIR, 'katas')})
  .then(buildMetadata)
;
