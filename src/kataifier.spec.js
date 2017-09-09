import { assertThat } from 'hamjest';
import { buildFunctionSpy, wasCalledWith } from 'hamjest-spy';

const kataify = (dependencies) => {
  dependencies.writeFile('');
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
});