export const toSrcDestPairs = (files, {sourcePath, destinationPath}) =>
  files.map(file => ({
    sourceFileName: file,
    destinationFilename: file.replace(sourcePath, destinationPath)
  }))
;
