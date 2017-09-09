import {
  assertThat, promiseThat, fulfilled,
} from 'hamjest';
import { buildFunctionSpy, wasCalledWith } from 'hamjest-spy';

const kataify = (dependencies) => {
  return dependencies.writeFile('');
};

describe('Kataify a file', () => {
  it('an empty file is written as is', () => {
    const emptyFile = '';
    const writeFile = buildFunctionSpy();
    const dependencies = {
      readFile: () => Promise.resolve(emptyFile),
      writeFile,
    };
    kataify(dependencies);

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
});