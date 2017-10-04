import {describe, it} from 'mocha';
import {
  assertThat, equalTo,
} from 'hamjest';
import {
  buildFunctionSpy, wasNotCalled, callCountWas, wasCalledWith,
} from 'hamjest-spy';

// needs to filter files
// build the KataifyableList from the src+dest dir

describe('Build list of kataifiable files', () => {
  xit('exclude all JS files on root of srcDir', () => {
    // TODO
    const props = {
      sourceDir: '/source/dir',
      destinationDir: '/destination/dir',
    };
    const deps = {};
    assertThat(buildKataifiables(props, deps), equalTo([]));
  });
});