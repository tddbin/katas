import assert from 'assert';
import {all} from '../katas/es6/language/__raw-metadata__';
import GroupedMetaData from './grouped-metadata';
import {forGroupName as slugForGroupName} from './slug';

describe('build grouped (by category) meta data', function() {

  const knownGroupName = 'Template strings';
  let converted;
  beforeEach(function() {
    converted = GroupedMetaData.to(all);
  });

  it('`groups` contains all groups as keys', function() {
    const actual = Object.keys(converted.groups);
    const expected = Object.keys(all.groups);
    assert.deepEqual(actual, expected);
  });

  describe('a group', function() {
    let aGroup;
    beforeEach(function() {
      aGroup = converted.groups[knownGroupName];
    });
    it('has `items` which is an array', function() {
      assert.ok(Array.isArray(aGroup.items));
    });
    
    it('has as many katas inside `items` as the original', function() {
      const expectedNumberOfItems = Object.keys(all.groups[knownGroupName].items).length;
      
      assert.equal(aGroup.items.length, expectedNumberOfItems);
    });
    
    it('has the name as attribute', function() {
      assert.equal(aGroup.name, knownGroupName);
    });
    
    it('has a slug (a string usable in a URL)', function() {
      assert.equal(aGroup.slug, slugForGroupName(knownGroupName));
    });
  });

  describe('a item', function() {
    it('contains all props of the original item', function() {
      
    });
    it('has correct `id` property', function() {
      const items = converted.groups[knownGroupName].items;
      const expectedId = Object.keys(all.groups[knownGroupName].items)[0];
  
      const isIdPropertyInItems = items.some(({id}) => expectedId === id);
      assert.equal(isIdPropertyInItems, true);
    });
    it('has correct `groupName` property', function() {
      const aGroup = converted.groups[knownGroupName];
  
      assert.equal(aGroup.items[0].groupName, knownGroupName);
    });
  });

});
