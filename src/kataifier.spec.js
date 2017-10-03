// @flow
import {
  assertThat
} from 'hamjest';
import {
  buildFunctionSpy, wasNotCalled
} from 'hamjest-spy';

type Filename = string;
type KataifyableFile = {
  sourceFilename: Filename;
  destinationFilename: Filename;
};
type KataifyableFileList = Array<KataifyableFile>;

const kataify = (param, deps) => {

};

describe('Kataify files', () => {
  it('WHEN no files given, dont read any file', async () => {
    const deps = {
      readFile: buildFunctionSpy(),
      writeFile: buildFunctionSpy(),
    };
    await kataify([], deps);
    assertThat(deps.readFile, wasNotCalled());
  });
  it('WHEN one kataifyable files given, read once and write once', async () => {
    const deps = {
      readFile: buildFunctionSpy(),
      writeFile: buildFunctionSpy(),
    };
    await kataify([], deps);
    assertThat(deps.readFile, wasCalledWith());
  });
});