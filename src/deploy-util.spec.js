// @flow
import {describe, it} from 'mocha';
import {
  assertThat, equalTo,
} from 'hamjest';
import {toSrcDestPairs, createDestinationDirs} from './deploy-util';
import {
  buildFunctionSpy, wasNotCalled, wasCalledWith, callCountWas,
} from 'hamjest-spy';

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
  it('WHEN no pairs, given create none', async () => {
    const mkdirp = buildFunctionSpy({returnValue: Promise.resolve()});
    const pairs = [];
    await createDestinationDirs(pairs, {mkdirp});
    assertThat(mkdirp, wasNotCalled());
  });
  it('WHEN one pair given, create the one destination dir', async () => {
    const mkdirp = buildFunctionSpy({returnValue: Promise.resolve()});
    const destDir = '/dest/dir';
    const pairs = [{sourceFilename: 'irrelevant', destinationFilename: `${destDir}/file.js`}];
    await createDestinationDirs(pairs, {mkdirp});
    assertThat(mkdirp, wasCalledWith(destDir));
  });
  it('WHEN a destination dir is given, multiple times create it only once', async () => {
    const mkdirp = buildFunctionSpy({returnValue: Promise.resolve()});
    const destDir1 = '/dest/dir';
    const destDir2 = `${destDir1}/subdir`;
    const pairs = [
      {sourceFilename: 'irrelevant', destinationFilename: `${destDir1}/file.js`},
      {sourceFilename: 'irrelevant', destinationFilename: `${destDir1}/file1.js`},
      {sourceFilename: 'irrelevant', destinationFilename: `${destDir2}/some.js`},
    ];
    await createDestinationDirs(pairs, {mkdirp});

    assertThat(mkdirp, wasCalledWith(destDir1));
    assertThat(mkdirp, wasCalledWith(destDir2));
    // assertThat(mkdirp, callCountWas(2));
  });
});