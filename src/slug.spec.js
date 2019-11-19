import assert from 'assert';
import {forGroupName} from './slug';

describe('slug name is a string useable in a URL (only letters, numbers, _ and -)', function() {
  describe('for a group name', function() {
    it('replace space by -', function() {
      assert.strictEqual(forGroupName('a b'), 'a-b');
    });
  });
});