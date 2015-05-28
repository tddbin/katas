import assert from 'assert';
import {buildMetaData} from '../build-meta-data.js';

describe('build the meta data from the all.js file structure', function() {
  let all;
  let converted;
  beforeEach(function() {
    all = {
      name: 'katas',
      items: {
        1: {path: 'one'},
        3: {path: 'three'},
        2: {path: 'two'}
      }
    };
    converted = buildMetaData(all);
  });
  it('makes `items` key an array', () => 
    assert.ok(Array.isArray(converted.items)));
  it('items are sorted by object key', function() {
    assert.equal(converted.items[0].path, all.items[1].path);
    assert.equal(converted.items[1].path, all.items[2].path);
    assert.equal(converted.items[2].path, all.items[3].path);
  });
  it('each item has `id` which is it`s key', function() {
    assert.equal(converted.items[0].id, 1);
    assert.equal(converted.items[1].id, 2);
    assert.equal(converted.items[2].id, 3);
  });
  it('the items must be clones', function() {
    all.items[1].MODIFIED = true;
    assert.notEqual(converted.items[0].MODIFIED, true);
  });
});
