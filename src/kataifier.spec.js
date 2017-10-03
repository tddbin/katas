// @flow
import {
  assertThat
} from 'hamjest';
import {
  buildFunctionSpy, wasNotCalled, callCountWas, wasCalledWith,
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
  describe('WHEN one kataifyable file given', () => {
    it('AND its empty, write the same file content', async () => {
      const originalContent = '';
      const deps = {
        readFile: buildFunctionSpy({ returnValue: Promise.resolve(originalContent) }),
        writeFile: buildFunctionSpy({ returnValue: Promise.resolve() }),
      };
      const oneFile = {
        sourceFileName: '/src/file.js',
        destinationFilename: '/dest/file.js',
      };
      await kataify([oneFile], deps);
      assertThat(deps.writeFile, wasCalledWith(originalContent));
    });
  });
});

// needs to filter files
// build the KataifyableList from the src+dest dir
