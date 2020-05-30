// @flow
import path from 'path';
/*::
type SrcDestPairType = {
  sourceFilename: FilenameType,
  destinationFilename: FilenameType,
};
type SrcDestPairListType = Array<SrcDestPairType>;

type ToSrcDestPairsDepsType = {
  sourcePath: DirnameType,
  destinationPath: DirnameType,
};
type CreateDestinationDirsDepsType = {
  mkdirp: (DirnameType) => Promise<*>,
};
*/
export const toSrcDestPairs = (
  files/*: FilenameListType*/,
  {sourcePath, destinationPath}/*: ToSrcDestPairsDepsType*/
)/*: SrcDestPairListType*/ =>
  files.map(file => ({
    sourceFilename: file,
    destinationFilename: file.replace(sourcePath, destinationPath)
  }))
;

const arrayUnique = (arr) => [...new Set(arr)];
const extractDestinationDir = (pair) => path.dirname(pair.destinationFilename);

export const createDestinationDirs = (
  pairs/*: SrcDestPairListType*/,
  {mkdirp}/*: CreateDestinationDirsDepsType*/
)/*: Promise<*>*/ => {
  const dirsToCreate = arrayUnique(pairs.map(extractDestinationDir));
  const createDirFns = dirsToCreate.map(mkdirp);
  return Promise.all(createDirFns);
};
