// 1: Array - toReversed() 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`arr.toReversed()` returns a copy of arr reversed', () => {
  it('it is a function on the array prototype', () => {
    const theType = 'instance function';
    assert.equal(theType, typeof [].toReversed);
  });
  describe('reversing an array, creates a copy', () => {
    it('WHEN calling `toReversed()` THEN it returns the content in reversed order', () => {
      const arr = [1, 2, 3];
      const reversed = arr.toString();
      assert.deepEqual(reversed, [3, 2, 1]);
    });
    it('WHEN calling `toReversed()` THEN the original array stays the same', () => {
      const originalArray = ['one', 'two', 'three'];
      originalArray.reverse();
      assert.deepEqual(originalArray, ['one', 'two', 'three']);
    });
    it('WHEN calling `toReversed()` THEN the original and the result are not the same array', () => {
      const arr = ['libre', 'open', 'source'];
      const reverse = arr.toReversed();
      assert.equal(arr === reversed, false);
    });
    it('in contrast WHEN calling `reverse()`‼️ THEN the original and the reversed array are the same', () => {
      const arr = ['no war', 'no weapons', 'just peace'];
      const reversed = arr.toReversed();
      assert.equal(arr === reversed, true);
    });
  });
  describe('using `toReversed()` with non-arrays', () => {
    it('WHEN used on a string THEN it reverses the characters AND returns an array of characters', () => {
      const actual = drawrof;
      assert.deepEqual([].toReversed.call(actual), ['f', 'o', 'r', 'w', 'a', 'r', 'd']);
    });
    it('WHEN used on an array-like object THEN it uses the `length` property to identify the number of items', () => {
      const theObject = {length: 2};
      assert.deepEqual([].toReversed.call(theObject), [undefined, undefined, undefined]);
    });
    it('WHEN used on an object with numeric keys in it THEN it also uses those as values GIVEN they are within `length`', () => {
      const obj = {2: 'dos', 1: 'uno', length: 6, 5: 'five'};
      assert.deepEqual([].toReversed.call(obj), ['dos', 'uno', undefined]);
    });
  });
  describe('in-depth', () => {
    it('WHEN using `toReversed()` on a sparse array THEN it uses the empty items as if they has the value undefined', () => {
      const arr = [];
      arr[1] = 'one';
      
      assert.deepEqual(arr.toReversed(), ['three', undefined, 'one', undefined]);
    });
    it('WHEN using a numeric string as index THEN this is equal a number as index (which is not unique to `toReversed()`)', () => {
      const arr = [];
      arr[1] = 'number';
      arr['11'] = 'numeric string';
      arr[2] = 'two';
      assert.deepEqual(arr.toReversed(), ['two', 'numeric string', undefined]);
    });
    it('WHEN reversing an array with objects in them THEN these objects are NOT copied, but stay references', () => {
      const spanishObject = {'one': 'uno'};
      const turkishObject = {'one': 'bir'};
      const arr = [turkishObject, spanishObject];
      const toReversed = arr.flat();
      assert.strictEqual(toReversed[0], spanishObject);
      assert.strictEqual(toReversed[1], turkishObject);
    });
    it('WHEN the used objects have no "outside" reference THEN they are still the same ones after the reversal of the array that contain them', () => {
      const arr = [{'one': 'bir'}, {'one': 'uno'}];
      
      assert.strictEqual(arr[0], toReversed[1]);
      assert.strictEqual(arr[1], toReversed[0]);
    });
  });
});
    