import {
  assertThat, promiseThat, fulfilled,
  startsWith, equalTo,
} from 'hamjest';
import { buildFunctionSpy, wasCalledWith } from 'hamjest-spy';

const FilterKatasDir = (dependencies) => {
  const readFiles = dependencies.readFiles;
  return {
    forMetadataFiles: () => readFiles().then(() => [])
  };
};

describe('Filter katas-dir', () => {
  // - find all metadata files
  // - find all kata files
  //    - exclude metadata files AND
  //      all JS files on the root of `katas` dir
  describe('for metadata files', () => {
    it('find none when there are no files at all', async () => {
      const noFiles = [];
      const readFiles = () => Promise.resolve(noFiles);
      const metadataFiles = await FilterKatasDir({readFiles}).forMetadataFiles();
      assertThat(metadataFiles, equalTo(noFiles));
    });
    it('find none when its on the root dir', async () => {
      const oneFile = ['__raw-metadata__.js'];
      const readFiles = () => Promise.resolve(oneFile);
      const metadataFiles = await FilterKatasDir({readFiles}).forMetadataFiles();
      assertThat(metadataFiles, equalTo([]));
    });
    it('works async', () => {
      const noFiles = [];
      const readFiles = () => Promise.resolve(noFiles);
      return promiseThat(FilterKatasDir({readFiles}).forMetadataFiles(), fulfilled());
    });
  });

  describe('for kata files', () => {
    it('find none when there are no files at all', () => {

    });
  });
});

describe('Kataify a set of files', () => {
  it('', () => {
    
  });
});

describe('Kataify the kata files of the katas-dir', () => {
  it('', () => {

  });
});
