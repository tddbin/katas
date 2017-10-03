// @flow
import {
  assertThat
} from 'hamjest';
import {
  buildFunctionSpy, wasNotCalled, callCountWas,
} from 'hamjest-spy';

type Filename = string;
type KataifyableFile = {
  sourceFilename: Filename;
  destinationFilename: Filename;
};
type KataifyableFileList = Array<KataifyableFile>;

const kataify = (kataifyableList, deps) => {
  if (kataifyableList.length) {
    return deps.readFile()
      .then(deps.writeFile)
    ;
  }
};

describe('Kataify files', () => {
  const buildDeps = () => {
    return {
      readFile: buildFunctionSpy({ returnValue: Promise.resolve() }),
      writeFile: buildFunctionSpy({ returnValue: Promise.resolve() }),
    };
  };

  it('WHEN no files given, dont read any file', async () => {
    const deps = buildDeps();
    await kataify([], deps);
    assertThat(deps.readFile, wasNotCalled());
  });
  it('WHEN one kataifyable file given, read once and write once', async () => {
    const deps = buildDeps();
    const oneFile = {
      sourceFileName: '/src/file.js',
      destinationFilename: '/dest/file.js',
    };
    await kataify([oneFile], deps);
    assertThat(deps.readFile, callCountWas(1));
    assertThat(deps.writeFile, callCountWas(1));
  });
});

// needs to filter files
// build the KataifyableList from the src+dest dir
