import {describe, it} from 'mocha';
import {
  assertThat, equalTo,
} from 'hamjest';

const toSrcDestPairs = (files, {sourcePath, destinationPath}) =>
  files.map(file => ({
    sourceFileName: file,
    destinationFilename: file.replace(sourcePath, destinationPath)
  }))
;

describe('Build src-dest pairs from file names', () => {
  const sourcePath = '/src/path';
  const destinationPath = '/dest/path';
  const deps = {sourcePath, destinationPath};
  const buildPairs = (files) =>
    toSrcDestPairs(files, deps)
  ;

  it('WHEN no file names given return empty pairs', () => {
    const noFiles = [];
    assertThat(buildPairs(noFiles), equalTo([]));
  });
  it('WHEN one file given, replace src path with dest path', () => {
    const oneSrcFile = [`${sourcePath}/file.js`];
    const onePair = [{
      sourceFileName: `${sourcePath}/file.js`,
      destinationFilename: `${destinationPath}/file.js`
    }];
    assertThat(buildPairs(oneSrcFile), equalTo(onePair));
  });
});
