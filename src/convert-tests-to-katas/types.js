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
type CreateDestinationDirsDepsType = {
  mkdirp: (DirnameType) => Promise<*>,
};
