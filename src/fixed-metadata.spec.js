import assert from 'assert';
import FlatMetaData from './flat-metadata';
import {all as es1Metadata} from '../katas/es1/language/__raw-metadata__';
import {all as es6Metadata} from '../katas/es6/language/__raw-metadata__';

describe('Ensure metadata that must NEVER change (because they are used for builing URLs, etc.)', () => {
  it('ES1 katas slug must stay the same', () => {
    assert.strictEqual(FlatMetaData.to(es1Metadata).nameSlug, 'es1-katas');
  });
  it('ES6 katas slug must stay the same', () => {
    assert.strictEqual(FlatMetaData.to(es6Metadata).nameSlug, 'es6-katas');
  });
});