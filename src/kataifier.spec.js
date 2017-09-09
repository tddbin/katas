import {
  assertThat, promiseThat, fulfilled,
} from 'hamjest';
import { buildFunctionSpy, wasCalledWith } from 'hamjest-spy';

const kataify = (dependencies) => {
  return dependencies.readFile()
    .then(dependencies.writeFile);
};

describe('Kataify a file', () => {
  it('an empty file is written as is', async () => {
    const emptyFile = '';
    const writeFile = buildFunctionSpy();
    const dependencies = {
      readFile: () => Promise.resolve(emptyFile),
      writeFile,
    };
    await kataify(dependencies);

    assertThat(writeFile, wasCalledWith(emptyFile));
  });
  it('finishes after writing the file (ensure its async)', () => {
    const emptyFile = '';
    const writeFile = buildFunctionSpy({returnValue: Promise.resolve()});
    const dependencies = {
      readFile: () => Promise.resolve(emptyFile),
      writeFile,
    };
    return promiseThat(kataify(dependencies), fulfilled());
  });

  describe('without content to convert', () => {
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
});