import {
  assertThat, promiseThat, fulfilled,
  startsWith, equalTo,
} from 'hamjest';
import { buildFunctionSpy, wasCalledWith } from 'hamjest-spy';

const FilterKatasDir = (dependencies) => {
  return {
    forMetadataFiles: () => []
  };
};

describe('Filter katas-dir', () => {
  // - find all metadata files
  // - find all kata files
  //    - exclude metadata files AND
  //      all JS files on the root of `katas` dir
  describe('for metadata files', () => {
    it('find none when there are no files at all', () => {
      const noFiles = [];
      const readFiles = () => Promise.resolve(noFiles);
      const metadataFiles = FilterKatasDir({readFiles}).forMetadataFiles();
      assertThat(metadataFiles, equalTo(noFiles));
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
