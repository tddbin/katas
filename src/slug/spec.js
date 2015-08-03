import assert from 'assert';
import {forGroupName} from './index';

describe('slug name is a string useable in a URL (only letters, numbers, _ and -)', function() {
  describe('for a group name', function() {
    it('replace space by _', function() {
      assert.equal(forGroupName('a b'), 'a_b');
    });
  });
});