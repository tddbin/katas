import {describe, it} from 'mocha';
import {
  assertThat, equalTo,
} from 'hamjest';
import {
  buildFunctionSpy, wasNotCalled, callCountWas, wasCalledWith,
} from 'hamjest-spy';

const toSrcDestPairs = (files) => {
  return [];
};

describe('Build src-dest pairs from file names', () => {
  it('WHEN no file names given return empty pairs', () => {
    const noFiles = [];
    assertThat(toSrcDestPairs(noFiles), equalTo([]));
  });
});
