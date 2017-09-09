import {
  assertThat, promiseThat, fulfilled,
  startsWith,
} from 'hamjest';
import { buildFunctionSpy, wasCalledWith } from 'hamjest-spy';

const kataifyFileContent = (fileContent) => {
  return fileContent.replace('////', '');
};

const kataify = (dependencies) => {
  return dependencies.readFile()
    .then(kataifyFileContent)
    .then(dependencies.writeFile);
};

const emptyFile = '';
const kataifyEmptyFile = (writeFile) => {
  const dependencies = {
    readFile: () => Promise.resolve(emptyFile),
    writeFile,
  };
  return kataify(dependencies);
};

describe('Kataify a file', () => {
  it('an empty file is written as is', async () => {
    const writeFileSpy = buildFunctionSpy();
    await kataifyEmptyFile(writeFileSpy);

    assertThat(writeFileSpy, wasCalledWith(emptyFile));
  });
  it('finishes after writing the file (ensure its async)', () => {
    const writeFileSpy = buildFunctionSpy({returnValue: Promise.resolve()});
    return promiseThat(kataifyEmptyFile(writeFileSpy), fulfilled());
  });

  describe('WITHOUT content to convert', () => {
    it('writes the same content that was read', async () => {
      const fileContent = 'source\ncode\nwithout need to convert';
      const writeFile = buildFunctionSpy({returnValue: Promise.resolve()});
      const dependencies = {
        readFile: () => Promise.resolve(fileContent),
        writeFile,
      };
      await kataify(dependencies);

      assertThat(writeFile, wasCalledWith(fileContent));
    });
  });

  describe('WITH content to convert', () => {
    it('remove `////` from a line starting with it', async () => {
      const rawContent = ['////katacode', 'non-kata code'].join('\n');
      const writeFile = buildFunctionSpy({returnValue: Promise.resolve()});
      const dependencies = {
        readFile: () => Promise.resolve(rawContent),
        writeFile,
      };
      await kataify(dependencies);

      assertThat(writeFile.firstCallArgs[0], (startsWith('katacode')));
    });
  });
});