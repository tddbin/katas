// @flow
import {describe, it} from 'mocha';
import {
  assertThat, equalTo,
} from 'hamjest';
import {
  buildFunctionSpy, wasNotCalled, wasCalledWith,
} from 'hamjest-spy';
import { katafyFile, katafy } from './katafier';

describe('Katafy files', () => {
  const defaultDeps = () => {
    return {
      readFile: buildFunctionSpy({ returnValue: Promise.resolve('') }),
      writeFile: buildFunctionSpy({ returnValue: Promise.resolve() }),
    };
  };

  it('WHEN no files given, dont read any file', async () => {
    const deps = defaultDeps();
    await katafy([], deps);
    assertThat(deps.readFile, wasNotCalled());
  });
  describe('WHEN one katafyable file given', () => {
    const oneFile = {
      sourceFilename: '/src/file.js',
      destinationFilename: '/dest/file.js',
    };
    const oneFileDeps = (fileContent) => {
      return {
        readFile: buildFunctionSpy({ returnValue: Promise.resolve(fileContent) }),
        writeFile: buildFunctionSpy({ returnValue: Promise.resolve() }),
      };
    };
    it('AND its empty, write the same file content', async () => {
      const originalContent = '';
      const deps = oneFileDeps(originalContent);
      await katafy([oneFile], deps);
      assertThat(deps.writeFile, wasCalledWith(oneFile.destinationFilename, originalContent));
    });
    it('AND it is a kata, write the katafied file content', async () => {
      const originalContent = [
        '////Only this line will be left',
        'let oldCode;'
      ].join('\n');
      const deps = oneFileDeps(originalContent);
      await katafy([oneFile], deps);
      assertThat(deps.writeFile, wasCalledWith(oneFile.destinationFilename, 'Only this line will be left'));
    });
  });
  describe('WHEN multiple katafyable files given', () => {
    const twoFiles = [
      { sourceFilename: '/src/file1.js', destinationFilename: '/dest/file1.js' },
      { sourceFilename: '/src/file2.js', destinationFilename: '/dest/file2.js' },
    ];
    const fileDeps = (fileContent) => {
      return {
        readFile: buildFunctionSpy({ returnValue: Promise.resolve(fileContent) }),
        writeFile: buildFunctionSpy({ returnValue: Promise.resolve() }),
      };
    };
    describe('AND they are empty', () => {
      it('write the same file content', async () => {
        const originalContent = '';
        const deps = fileDeps(originalContent);
        await katafy(twoFiles, deps);

        const [firstFile, secondFile] = twoFiles;
        assertThat(deps.writeFile, wasCalledWith(firstFile.destinationFilename, originalContent));
        assertThat(deps.writeFile, wasCalledWith(secondFile.destinationFilename, originalContent));
      });
      it('read both files', async () => {
        const originalContent = '';
        const deps = fileDeps(originalContent);
        await katafy(twoFiles, deps);

        const [firstFile, secondFile] = twoFiles;
        assertThat(deps.readFile, wasCalledWith(firstFile.sourceFilename));
        assertThat(deps.readFile, wasCalledWith(secondFile.sourceFilename));
      });
    });
  });
});

describe('Katafy file content', () => {
  it('WHEN empty return empty', () => {
    assertThat(katafyFile(''), equalTo(''));
  });
  it('WHEN one code line, leave it', () => {
    const nonKataCode = 'const some = {};';
    assertThat(katafyFile(nonKataCode), equalTo(nonKataCode));
  });
  describe('WHEN one kata line', () => {
    it('remove the following and leave the kata line', () => {
      const kataCode = '////const some = {};\ncont toBeRemoved = [];';
      assertThat(katafyFile(kataCode), equalTo('const some = {};'));
    });
    it('leave leading spaces', () => {
      const kataCode = '  ////const some = {};\ncont toBeRemoved = [];';
      assertThat(katafyFile(kataCode), equalTo('  const some = {};'));
    });
    it('remove leading spaces after kata-identifier', () => {
      const kataCode = '////  const some = {};\ncont toBeRemoved = [];';
      assertThat(katafyFile(kataCode), equalTo('const some = {};'));
    });
  });
  describe('WHEN multiple kata lines, replace all following lines with kata code', () => {
    it('two sequential kata blocks', () => {
      const kataCode = [
        '////kata code',
        'to be removed',
        '////kata code 2',
        'to be removed 2'
      ].join('\n');
      assertThat(katafyFile(kataCode), equalTo('kata code\nkata code 2'));
    });
    it('with other lines inbetween', () => {
      const kataCode = [
        '',
        '////kata code',
        'to be removed',
        '// just a comment',
        '////kata code 2',
        'to be removed 2',
        ''
      ].join('\n');
      const expected = [
        '',
        'kata code',
        '// just a comment',
        'kata code 2',
        ''
      ].join('\n');
      assertThat(katafyFile(kataCode), equalTo(expected));
    });
  });
});
