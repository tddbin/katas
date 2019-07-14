import assert from 'assert';
import FlatMetaData from './flat-metadata';
import {forGroupName as slugForGroupName} from './slug';
import {all} from '../katas/es6/language/__raw-metadata__';

describe('build the meta data from the all.js file structure', function() {
  
  const groupName = 'Template strings';
  const firstGroup = all.groups[groupName];
  const firstGroupItems = firstGroup.items;
  const converted = (metadata = all) => FlatMetaData.to(metadata);

  it('makes `items` key an array', () => 
    assert.ok(Array.isArray(converted().items)));
  
  it('items are sorted by original object`s key (which is the ID)', function() {
    const items = converted().items;
    // use `path` to compare, since not all data stay the same
    assert.equal(items[0].path, firstGroupItems[1].path);
    assert.equal(items[1].path, firstGroupItems[2].path);
    assert.equal(items[2].path, firstGroupItems[3].path);
  });
  
  it('each item gets an `id` property, the original object`s key', function() {
    const items = converted().items;
    assert.strictEqual(items[0].id, 1);
    assert.strictEqual(items[1].id, 2);
    assert.strictEqual(items[2].id, 3);
  });

  describe('the publish date', function() {
    it('can also be missing, which means it is not yet published, doh :)', () => {
      const metadataWithoutPublishDate = {...all};
      const arrayOfKata = metadataWithoutPublishDate.groups['Array API'].items[30];
      delete arrayOfKata.publishDateUTC;
      assert.doesNotThrow(() => converted(metadataWithoutPublishDate));
    });
    it('the `publishDate`, if set, is as UTC string, with GMT+0', function() {
      var expected = new Date(Date.UTC(2015, 2, 13, 7, 55));
      assert.equal(converted().items[0].publishDateRfc822, expected.toUTCString());
    });
    it('the `publishDateUTC` is not in the destination data', function() {
      assert.equal(converted().items[0].publishDateUTC, void 0);
    });
  });
  
  it('the items must be clones (no references)', function() {
    const firstKata = firstGroup.items[1];
    assert.notStrictEqual(converted().items[0], firstKata);
  });
  
  it('the group name is added in each item', function() {
    assert.equal(converted().items[0].groupName, groupName);
  });
  
  it('a group slug is provided (a string usable in a URL)', function() {
    assert.equal(converted().items[0].groupNameSlug, slugForGroupName(groupName));
  });
});
