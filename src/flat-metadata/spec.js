import assert from 'assert';
import FlatMetaData from './index.js';
import {all} from '../../katas/es6/language/__raw-metadata__.js';

describe('build the meta data from the all.js file structure', function() {
  
  const firstGroup = all.groups['Template strings'];
  const firstGroupItems = firstGroup.items;
  let converted;
  beforeEach(function() {
    converted = FlatMetaData.to(all);
  });
  
  it('makes `items` key an array', () => 
    assert.ok(Array.isArray(converted.items)));
  
  it('items are sorted by original object`s key (which is the ID)', function() {
    // use `path` to compare, since not all data stay the same 
    assert.equal(converted.items[0].path, firstGroupItems[1].path);
    assert.equal(converted.items[1].path, firstGroupItems[2].path);
    assert.equal(converted.items[2].path, firstGroupItems[3].path);
  });
  
  it('each item gets an `id` property, the original object`s key', function() {
    assert.strictEqual(converted.items[0].id, 1);
    assert.strictEqual(converted.items[1].id, 2);
    assert.strictEqual(converted.items[2].id, 3);
  });

  describe('the publish date', function() {
    it('the `publishDate` is set as UTC string, with GMT+0', function() {
      var expected = new Date(Date.UTC(2015, 2, 13, 7, 55));
      assert.equal(converted.items[0].publishDateRfc822, expected.toUTCString());
    });
    it('the `publishDateUTC` is not in the destination data', function() {
      assert.equal(converted.items[0].publishDateUTC, void 0);
    });
  });
  
  it('the items must be clones (no references)', function() {
    const firstKata = firstGroup.items[1];
    assert.notStrictEqual(converted.items[0], firstKata);
  });
  
  it('the group name is added in each item', function() {
    assert.equal(converted.items[0].groupName, 'Template strings');
  });
});
