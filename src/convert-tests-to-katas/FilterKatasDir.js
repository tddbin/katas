import path from 'path';

export const FilterKatasDir = (dependencies) => {
  const readFiles = dependencies.findFilenames;
  const isMetadataFile = (file) =>
    file.endsWith('__raw-metadata__.js') &&
    file !== './__raw-metadata__.js' &&
    file !== '__raw-metadata__.js'
  ;
  const rootDir = dependencies.rootDir;
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
    forMetadataFiles: () => readFiles()
      .then((files) => findMetadataFiles(files)),
    forKataFiles: () => readFiles()
      .then((files) => findKataFiles(files)),
  };
};
