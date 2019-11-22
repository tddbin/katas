import assert from 'assert';
import {forGroupName} from './slug';

describe('slug name is a string useable in a URL (only letters, numbers, _ and -)', function() {
  describe('for a group name', function() {
    it('replace space by dash', function() {
      assert.strictEqual(forGroupName('a b'), 'a-b');
    });
    it('replace many spaces by many dashes', function() {
      assert.strictEqual(forGroupName('a b c d'), 'a-b-c-d');
    });
    it('make all chars lower case', function() {
      assert.strictEqual(forGroupName('ABC'), 'abc');
    });
  });
});