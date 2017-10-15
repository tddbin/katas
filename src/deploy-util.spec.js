// @flow
import {describe, it} from 'mocha';
import {
  assertThat, equalTo,
} from 'hamjest';
import {toSrcDestPairs} from './deploy-util';

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
      sourceFilename: `${sourcePath}/file.js`,
      destinationFilename: `${destinationPath}/file.js`
    }];
    assertThat(buildPairs(oneSrcFile), equalTo(onePair));
  });
  it('WHEN many files given, replace src path with dest path', () => {
    const manyFile = [
      `${sourcePath}/file.js`,
      `${sourcePath}/any/depth/file.js`,
    ];
    const manyPairs = [
      {sourceFilename: `${sourcePath}/file.js`, destinationFilename: `${destinationPath}/file.js`},
      {sourceFilename: `${sourcePath}/any/depth/file.js`, destinationFilename: `${destinationPath}/any/depth/file.js`},
    ];
    assertThat(buildPairs(manyFile), equalTo(manyPairs));
  });
});

describe('Create (missing) destination directories', () => {
  it('WHEN no pairs given create none', () => {
    assertThat('TODO', true);
  });
  it('WHEN one pair given create the one destination dir', () => {

  });
  it('WHEN a destination dir is given multiple times create it only once', () => {

  });
});