import {
  assertThat, promiseThat, fulfilled,
  startsWith, equalTo,
} from 'hamjest';
import { buildFunctionSpy, wasCalledWith } from 'hamjest-spy';
import {kataify} from './kataifier';

const kataifyContent = (fileContent, writeFileSpy) => {
  const dependencies = {
    readFile: () => Promise.resolve(fileContent),
    writeFile: writeFileSpy,
  };
  return kataify(dependencies);
};

const emptyFile = '';
const kataifyEmptyFile = (writeFileSpy) =>
  kataifyContent(emptyFile, writeFileSpy);

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
      const writeFileSpy = buildFunctionSpy({returnValue: Promise.resolve()});
      await kataifyContent(fileContent, writeFileSpy);

      assertThat(writeFileSpy, wasCalledWith(fileContent));
    });
  });

  describe('WITH content to convert', () => {
    it('remove `////` from a line starting with it', async () => {
      const rawContent = ['////katacode', 'non-kata code'].join('\n');
      const writeFileSpy = buildFunctionSpy({returnValue: Promise.resolve()});
      await kataifyContent(rawContent, writeFileSpy);

      assertThat(writeFileSpy.firstCallArgs[0], (startsWith('katacode')));
    });
    it('remove the line after the line starting with `////`', async () => {
      const rawContent = ['////katacode', 'non-kata code'].join('\n');
      const writeFileSpy = buildFunctionSpy({returnValue: Promise.resolve()});
      await kataifyContent(rawContent, writeFileSpy);

      assertThat(writeFileSpy.firstCallArgs[0], equalTo('katacode'));
    });
    it('replace multiple kata lines', async () => {
      const rawContent = [
        '////katacode', 'non-kata code',
        '////katacode2', 'non-kata code 2'
      ].join('\n');
      const writeFileSpy = buildFunctionSpy({returnValue: Promise.resolve()});
      await kataifyContent(rawContent, writeFileSpy);

      assertThat(writeFileSpy.firstCallArgs[0], equalTo('katacode\nkatacode2'));
    });
    it('replace kata line, with leading spaces', async () => {
      const rawContent = ['  ////katacode', 'non-kata code'].join('\n');
      const writeFileSpy = buildFunctionSpy({returnValue: Promise.resolve()});
      await kataifyContent(rawContent, writeFileSpy);

      assertThat(writeFileSpy.firstCallArgs[0], (startsWith('katacode')));
    });
  });
});
