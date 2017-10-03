// @flow
import {describe, it} from 'mocha';
import {
  assertThat, equalTo,
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

const removeKataComments = (line) => line.replace(/\/\/\/\/\s*/, '');
const kataifyFile = (content) => {
  const lines = content.split('\n');
  if (lines.length === 0) {
    return '';
  }
  if (lines[0].trim().startsWith('////')) {
    const newLines = [
      removeKataComments(lines[0]),
      ...lines.slice(2),
    ];
    return kataifyFile(newLines.join('\n'));
  }
  return content;
};

const kataify = (kataifyableList, deps) => {
  if (kataifyableList.length) {
    return deps.readFile()
      .then(kataifyFile)
      .then(content => deps.writeFile(kataifyableList[0].destinationFilename, content))
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
      assertThat(deps.writeFile, wasCalledWith(oneFile.destinationFilename, originalContent));
    });
    it('AND it is a kata, write the kataified file content', async () => {
      const originalContent = [
        '////Only this line will be left',
        'let oldCode;'
      ].join('\n');
      const deps = {
        readFile: buildFunctionSpy({ returnValue: Promise.resolve(originalContent) }),
        writeFile: buildFunctionSpy({ returnValue: Promise.resolve() }),
      };
      const oneFile = {
        sourceFileName: '/src/file.js',
        destinationFilename: '/dest/file.js',
      };
      await kataify([oneFile], deps);
      assertThat(deps.writeFile, wasCalledWith(oneFile.destinationFilename, 'Only this line will be left'));
    });
  });
});

describe('Kataify file content', () => {
  it('WHEN empty return empty', () => {
    assertThat(kataifyFile(''), equalTo(''));
  });
  it('WHEN one code line, leave it', () => {
    const nonKataCode = 'const some = {};';
    assertThat(kataifyFile(nonKataCode), equalTo(nonKataCode));
  });
  it('WHEN one kata line, remove the following with the kata line', () => {
    const kataCode = '////const some = {};\ncont toBeRemoved = [];';
    assertThat(kataifyFile(kataCode), equalTo('const some = {};'));
  });
  it('WHEN one kata line, leave leading spaces', () => {
    const kataCode = '  ////const some = {};\ncont toBeRemoved = [];';
    assertThat(kataifyFile(kataCode), equalTo('  const some = {};'));
  });
  it('WHEN one kata line, remove leading spaces in kata code', () => {
    const kataCode = '////  const some = {};\ncont toBeRemoved = [];';
    assertThat(kataifyFile(kataCode), equalTo('const some = {};'));
  });
});

// needs to filter files
// build the KataifyableList from the src+dest dir
