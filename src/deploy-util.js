// @flow
import path from 'path';

type DirnameType = string;
type FilenameType = string;
type FilenameListType = Array<FilenameType>;
type SrcDestPairType = {
  sourceFilename: FilenameType,
  destinationFilename: FilenameType,
};
type SrcDestPairListType = Array<SrcDestPairType>;

type ToSrcDestPairsDepsType = {
  sourcePath: DirnameType,
  destinationPath: DirnameType,
};
export const toSrcDestPairs = (
  files: FilenameListType,
  {sourcePath, destinationPath}: ToSrcDestPairsDepsType
): SrcDestPairListType =>
  files.map(file => ({
    sourceFilename: file,
    destinationFilename: file.replace(sourcePath, destinationPath)
  }))
;

type CreateDestinationDirsDepsType = {
  mkdirp: (DirnameType) => Promise<*>,
};
export const createDestinationDirs = (
  pairs: SrcDestPairListType,
  {mkdirp}: CreateDestinationDirsDepsType
): Promise<*> => {
  let createDirFns = [];
  if (pairs.length > 0) {
    createDirFns = [
      mkdirp(path.dirname(pairs[0].destinationFilename))
    ];
  }
  return Promise.all(createDirFns);
};
