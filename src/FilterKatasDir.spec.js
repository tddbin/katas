import {
  assertThat, promiseThat, fulfilled,
  startsWith, equalTo,
} from 'hamjest';
import { buildFunctionSpy, wasCalledWith } from 'hamjest-spy';
import path from 'path';

const FilterKatasDir = (dependencies) => {
  const readFiles = dependencies.readFiles;
  const isMetadataFile = (file) =>
    file.endsWith('__raw-metadata__.js') &&
    file !== './__raw-metadata__.js' &&
    file !== '__raw-metadata__.js'
  ;
  const isKataFile = (file) => {
    const parsed = path.parse(file);
    const isRootDir = parsed.dir === '' || parsed.dir === '.';
    return file.endsWith('.js') && !isRootDir && !isMetadataFile(file);
  };
  const findMetadataFiles = (files) =>
    files.filter(isMetadataFile);
  const findKataFiles = (files) =>
    files.filter(isKataFile);
  return {
    forMetadataFiles: () => readFiles()
      .then((files) => findMetadataFiles(files)),
    forKataFiles: () => readFiles()
      .then((files) => findKataFiles(files)),
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
      const found = await findFiles(noFiles);
      assertThat(found, equalTo(noFiles));
    });
    it('ignore JS files on root', async () => {
      const jsFilesOnRoot = ['./with-path-prefix.js', 'without-prefix.js'];
      const found = await findFiles(jsFilesOnRoot);
      assertThat(found, equalTo([]));
    });
    it('find JS files, not on root', async () => {
      const oneFile = [
        './file.js',
        './some-dir/file1.js',
        './some-dir/wow.txt',
        './some-dir/other/file2.js',
      ];
      const found = await findFiles(oneFile);
      const expected = [
        './some-dir/file1.js',
        './some-dir/other/file2.js',
      ];
      assertThat(found, equalTo(expected));
    });
    it('ignore metadata files', async () => {
      const jsFilesOnRoot = [
        './not-kata-file.js',
        './dir/kata-file.js',
        './dir/__raw-metadata__.js',
      ];
      const found = await findFiles(jsFilesOnRoot);
      assertThat(found, equalTo(['./dir/kata-file.js']));
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
