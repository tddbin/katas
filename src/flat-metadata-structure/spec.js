import assert from 'assert';
import {buildMetaData} from './index.js';
import {all} from '../../katas/es6/language/__raw-metadata__.js';

describe('build the meta data from the all.js file structure', function() {
  
  const firstGroup = all.groups['Template strings'];
  const firstGroupItems = firstGroup.items;
  let converted;
  beforeEach(function() {
    converted = buildMetaData(all);
  });
  
  it('makes `items` key an array', () => 
    assert.ok(Array.isArray(converted.items)));
  it('items are sorted by object key', function() {
    assert.equal(converted.items[0].path, firstGroupItems[1].path);
    assert.equal(converted.items[1].path, firstGroupItems[2].path);
    assert.equal(converted.items[2].path, firstGroupItems[3].path);
  });
  it('each item has `id` which is it`s key', function() {
    assert.equal(converted.items[0].id, 1);
    assert.equal(converted.items[1].id, 2);
    assert.equal(converted.items[2].id, 3);
  });
  it('the items must be clones', function() {
    const firstKata = firstGroup.items[1];
    assert.notStrictEqual(converted.items[0], firstKata);
  });
  it('the group name is added in each item', function() {
    assert.equal(converted.items[0].groupName, 'Template strings');
  });
});
