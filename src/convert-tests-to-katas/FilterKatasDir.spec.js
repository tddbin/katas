// @flow
import {describe, it} from 'mocha';
import {
  assertThat, promiseThat, fulfilled,
  startsWith, equalTo,
} from 'hamjest';
import { buildFunctionSpy, wasCalledWith } from 'hamjest-spy';
import { FilterKatasDir } from './FilterKatasDir';

describe('Filter katas-dir', () => {
  describe('for metadata files', () => {
    const findFiles = (allFiles) => {
      const findFilenames = () => Promise.resolve(allFiles);
      return FilterKatasDir({ findFilenames, rootDir: '' }).forMetadataFiles();
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

  describe('for kata files', () => {
    const rootDir = '/';
    const findFiles = (allFiles, rootDir='/') => {
      const findFilenames = () => Promise.resolve(allFiles);
      return FilterKatasDir({ findFilenames, rootDir }).forKataFiles();
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
      const jsFilesOnRoot = ['/with-path-prefix.js', '/without-prefix.js'];
      const found = await findFiles(jsFilesOnRoot, rootDir);
      assertThat(found, equalTo([]));
    });
    it('dont find JS files, on root', async () => {
      const oneFile = [
        '/file.js',
        '/some-dir/file1.js',
        '/some-dir/wow.txt',
        '/some-dir/other/file2.js',
      ];
      const found = await findFiles(oneFile);
      const expected = [
        '/some-dir/file1.js',
        '/some-dir/other/file2.js',
      ];
      assertThat(found, equalTo(expected));
    });
    it('dont find JS files on root, even when root is a longer path', async () => {
      const oneFile = [
        '/root/dir/file.js',
        '/root/dir/not/root.js'
      ];
      const found = await findFiles(oneFile, '/root/dir');
      assertThat(found, equalTo(['/root/dir/not/root.js']));
    });
    it('ignore metadata files', async () => {
      const jsFilesOnRoot = [
        '/not-kata-file.js',
        '/dir/kata-file.js',
        '/dir/__raw-metadata__.js',
      ];
      const found = await findFiles(jsFilesOnRoot);
      assertThat(found, equalTo(['/dir/kata-file.js']));
    });
  });
});
