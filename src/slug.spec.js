import assert from 'assert';
import {stringToSlug} from './slug';

describe('slug name is a string useable in a URL (only letters, numbers, _ and -)', function() {
  describe('for a group name', function() {
    it('replace space by dash', function() {
      assert.strictEqual(stringToSlug('a b'), 'a-b');
    });
    it('replace many spaces by many dashes', function() {
      assert.strictEqual(stringToSlug('a b c d'), 'a-b-c-d');
    });
    it('make all chars lower case', function() {
      assert.strictEqual(stringToSlug('ABC'), 'abc');
    });
    it('remove (some) special chars', function() {
      assert.strictEqual(stringToSlug('e@mail'), 'e-mail');
      assert.strictEqual(stringToSlug('e@ma@il'), 'e-ma-il');
      assert.strictEqual(stringToSlug('what#the$häck'), 'what-the-h-ck');
      assert.strictEqual(stringToSlug('äüöøí'), '-');
    });
  });
});