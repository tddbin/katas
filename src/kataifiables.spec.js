import {describe, it} from 'mocha';
import {
  assertThat, equalTo,
} from 'hamjest';
import {
  buildFunctionSpy, wasNotCalled, callCountWas, wasCalledWith,
} from 'hamjest-spy';

// needs to filter files
// build the KataifyableList from the src+dest dir
