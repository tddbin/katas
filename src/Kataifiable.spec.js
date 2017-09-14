import {
  assertThat, promiseThat, fulfilled,
  startsWith, equalTo,
} from 'hamjest';
import { buildFunctionSpy, wasCalledWith } from 'hamjest-spy';

/*
- get read+write function
- get `kataify()`
- get the read file name
- get the destination file name
- provide `readOriginal()` and `writeKataified()`
 */

const Kataifiable = (dependencies) => {
  const {readFile, writeFile, kataify} = dependencies;
  return {
    convert: () => readFile()
      .then((s) => writeFile(kataify(s)))
  };
};

describe('Kataifiable can read a file and write the kataified version', () => {
  it('when `kataify()` makes no changes the kataified version is like the original', async () => {
    const kataify = (original) => original;
    const original = 'the original content';
    const readFile = () => Promise.resolve(original);
    const writeFile = buildFunctionSpy({returnValue: Promise.resolve()});

    await Kataifiable({readFile, writeFile, kataify}).convert();

    assertThat(writeFile, wasCalledWith(original));
  });
  it('when `kataify()` returns an empty string, an empty string gets written  ', async () => {
    const kataify = () => '';
    const readFile = () => Promise.resolve('some content, not empty!');
    const writeFile = buildFunctionSpy({returnValue: Promise.resolve()});

    await Kataifiable({readFile, writeFile, kataify}).convert();

    assertThat(writeFile, wasCalledWith(''));
  });
});
