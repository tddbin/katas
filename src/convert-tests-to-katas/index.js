import {
  allFilesInDir, mkdirp,
  readFileAsString, writeFileFromString,
} from '../_external-deps/filesystem';
import {FilterKatasDir} from './FilterKatasDir';
import {katafy} from './katafier';
import {toSrcDestPairs, createDestinationDirs} from './deploy-util';

export const convertTestsToKatas = ({sourceDir, destinationDir}) => {
  const deps = {
    findFilenames: () => allFilesInDir(sourceDir),
    rootDir: sourceDir,
  };
  const kataifyDeps = {
    readFile: readFileAsString,
    writeFile: writeFileFromString,
  };
  const toSrcDestPairsDeps = {
    sourcePath: sourceDir,
    destinationPath: destinationDir,
  };
  return FilterKatasDir(deps)
    .forKataFiles()
    .then(files => toSrcDestPairs(files, toSrcDestPairsDeps))
    .then(pairs => createDestinationDirs(pairs, {mkdirp}).then(() => pairs))
    .then(pairs => katafy(pairs, kataifyDeps))
  ;
};
