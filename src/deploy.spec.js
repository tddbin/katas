import {
  assertThat, promiseThat, fulfilled,
  startsWith, equalTo,
} from 'hamjest';
import { buildFunctionSpy, wasCalledWith } from 'hamjest-spy';

const FilterKatasDir = (dependencies) => {
  const readFiles = dependencies.readFiles;
  const isMetadataFile = (file) =>
    file.endsWith('__raw-metadata__.js') &&
    file !== './__raw-metadata__.js' &&
    file !== '__raw-metadata__.js'
  ;
  const findMetadataFiles = (files) =>
    files.filter(isMetadataFile);
  return {
    forMetadataFiles: () => readFiles()
      .then((files) => findMetadataFiles(files)),
    forKataFiles: () => Promise.resolve([])
  };
};

describe('Filter katas-dir', () => {
  describe('for metadata files', () => {
    const findFiles = (allFiles) => {
      const readFiles = () => Promise.resolve(allFiles);
      return FilterKatasDir({ readFiles }).forMetadataFiles();
    };
    it('find none when there are no files at all', async () => {
      const noFiles = [];
      const metadataFiles = await findFiles(noFiles);
      assertThat(metadataFiles, equalTo(noFiles));
    });
    it('find none when its on the root dir', async () => {
      const oneFile = ['__raw-metadata__.js'];
      const metadataFiles = await findFiles(oneFile);
      assertThat(metadataFiles, equalTo([]));
    });
    it('works async', () => {
      const noFiles = [];
      return promiseThat(findFiles(noFiles), fulfilled());
    });
    it('find one when there is one, not on the root dir', async () => {
      const oneFile = ['some-dir/__raw-metadata__.js'];
      const metadataFiles = await findFiles(oneFile);
      assertThat(metadataFiles, equalTo(oneFile));
    });
    it('find multiple metadata files (not on root)', async () => {
      const manyFiles = [
        './__raw-metadata__.js',
        'some-dir/__raw-metadata__.js',
        'some-dir/not-metadata.js',
        'some-dir/other-dir/__raw-metadata__.js',
        'some-dir/other-dir/also-not-metadata.js',
      ];
      const metadataFiles = await findFiles(manyFiles);
      const expected = [
        'some-dir/__raw-metadata__.js',
        'some-dir/other-dir/__raw-metadata__.js',
      ];
      assertThat(metadataFiles, equalTo(expected));
    });
  });

  // - find all kata files
  //    - exclude metadata files AND
  //      all JS files on the root of `katas` dir
  describe('for kata files', () => {
    const findFiles = (allFiles) => {
      const readFiles = () => Promise.resolve(allFiles);
      return FilterKatasDir({ readFiles }).forKataFiles();
    };
    it('works async (returns a promise)', async () => {
      const noFiles = [];
      return promiseThat(findFiles(noFiles), fulfilled());
    });
    it('find none when there are no files at all', async () => {
      const noFiles = [];
      const found = await findFiles();
      assertThat(found, equalTo(noFiles));
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
