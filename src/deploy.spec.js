import {
  assertThat, promiseThat, fulfilled,
  startsWith, equalTo,
} from 'hamjest';
import { buildFunctionSpy, wasCalledWith } from 'hamjest-spy';

const FilterKatasDir = (dependencies) => {
  const readFiles = dependencies.readFiles;
  const isMetadataFile = (file) =>
    file.endsWith('__raw-metadata__.js') &&
    file !== '__raw-metadata__.js'
  ;
  const findMetadataFiles = (files) =>
    files.filter(isMetadataFile);
  return {
    forMetadataFiles: () => readFiles()
      .then((files) => findMetadataFiles(files))
  };
};

describe('Filter katas-dir', () => {
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
    it('find one when there is one, not on the root dir', async () => {
      const oneFile = ['some-dir/__raw-metadata__.js'];
      const readFiles = () => Promise.resolve(oneFile);
      const metadataFiles = await FilterKatasDir({readFiles}).forMetadataFiles();
      assertThat(metadataFiles, equalTo(oneFile));
    });
    it('find multiple files', async () => {
      const manyFiles = [
        'some-dir/__raw-metadata__.js',
        'some-dir/not-metadata.js',
        'some-dir/other-dir/__raw-metadata__.js',
        'some-dir/other-dir/also-not-metadata.js',
      ];
      const readFiles = () => Promise.resolve(manyFiles);
      const metadataFiles = await FilterKatasDir({readFiles}).forMetadataFiles();
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
