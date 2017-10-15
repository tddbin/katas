import {describe, it} from 'mocha';
import {
  assertThat, equalTo,
} from 'hamjest';
import {
  buildFunctionSpy, wasNotCalled, callCountWas, wasCalledWith,
} from 'hamjest-spy';


describe('Build src-dest pairs from file names', () => {
  const srcPath = '/src/path';
  const destPath = '/dest/path';
  const toSrcDestPairs = (files) =>
    files.map(file => ({
      sourceFileName: file,
      destinationFilename: file.replace(srcPath, destPath)
    }))
  ;

  it('WHEN no file names given return empty pairs', () => {
    const noFiles = [];
    assertThat(toSrcDestPairs(noFiles), equalTo([]));
  });
  it('WHEN one file given, replace src path with dest path', () => {
    const oneSrcFile = [`${srcPath}/file.js`];
    const onePair = [{
      sourceFileName: `${srcPath}/file.js`,
      destinationFilename: `${destPath}/file.js`
    }];
    assertThat(toSrcDestPairs(oneSrcFile), equalTo(onePair));
  });
});
