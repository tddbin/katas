import assert from 'assert';
import FlatMetaData from './flat-metadata';
import {all as es1Metadata} from '../katas/es1/language/__raw-metadata__';
import {all as es1RewriteMetadata} from '../katas/es1/learn-by-rewriting/__raw-metadata__.js';
import {all as es6Metadata} from '../katas/es6/language/__raw-metadata__';
import {all as es7Metadata} from '../katas/es7/language/__raw-metadata__';
import {all as es8Metadata} from '../katas/es8/language/__raw-metadata__';
import {all as es10Metadata} from '../katas/es10/language/__raw-metadata__';
import {all as hamjestMetadata} from '../katas/libraries/hamjest/__raw-metadata__.js';

describe('Ensure metadata that must NEVER change (because they are used for builing URLs, etc.)', () => {
  it('ES1 katas slug must stay the same', () => {
    assert.strictEqual(FlatMetaData.to(es1Metadata).nameSlug, 'es1-katas');
  });
  it('ES1-rewrite katas slug must stay the same', () => {
    assert.strictEqual(FlatMetaData.to(es1RewriteMetadata).nameSlug, 'es1-learn-by-rewriting');
  });
  it('ES6 katas slug must stay the same', () => {
    assert.strictEqual(FlatMetaData.to(es6Metadata).nameSlug, 'es6-katas');
  });
  it('ES7 katas slug must stay the same', () => {
    assert.strictEqual(FlatMetaData.to(es7Metadata).nameSlug, 'es7-katas');
  });
  it('ES8 katas slug must stay the same', () => {
    assert.strictEqual(FlatMetaData.to(es8Metadata).nameSlug, 'es8-katas');
  });
  it('ES10 katas slug must stay the same', () => {
    assert.strictEqual(FlatMetaData.to(es10Metadata).nameSlug, 'es10-katas');
  });
  it('Hamjest katas slug must stay the same', () => {
    assert.strictEqual(FlatMetaData.to(hamjestMetadata).nameSlug, 'hamjest-assertion-library');
  });
});