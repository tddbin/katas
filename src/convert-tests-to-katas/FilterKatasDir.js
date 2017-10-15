// @flow
import path from 'path';

type FilterKatasDirType = {
  findFilenames: () => Promise<FilenameListType>;
  rootDir: DirnameType;
};
type FilterKatasDirReturnType = {
  forMetadataFiles: () => Promise<FilenameListType>;
  forKataFiles: () => Promise<FilenameListType>;
};

export const FilterKatasDir = (
  {findFilenames, rootDir}: FilterKatasDirType
): FilterKatasDirReturnType => {
  const isMetadataFile = (file) =>
    file.endsWith('__raw-metadata__.js') &&
    file !== './__raw-metadata__.js' &&
    file !== '__raw-metadata__.js'
  ;
  const isKataFile = (file) => {
    const parsed = path.parse(file);
    const isRootDir = parsed.dir === rootDir;
    return file.endsWith('.js') && !isRootDir && !isMetadataFile(file);
  };
  const findMetadataFiles = (files) =>
    files.filter(isMetadataFile);
  const findKataFiles = (files) =>
    files.filter(isKataFile);
  return {
    forMetadataFiles: () => findFilenames()
      .then((files) => findMetadataFiles(files)),
    forKataFiles: () => findFilenames()
      .then((files) => findKataFiles(files)),
  };
};
