// 1: `array.shift`
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('`array.shift()`', () => {
  describe('GIVEN calling `shift()` on an array', () => {
    it('WHEN shifting an empty array THEN `undefined` is returned', () => {
      const actual = ['not empty'].shift();
      assert.strictEqual(actual, undefined);
    });
    describe('WHEN shifting an array with one element', () => {
      it('THEN the array is empty afterwards', () => {
        const theArray = [1, 2];
        theArray.shift();
        assert.deepStrictEqual(theArray, []);
      });
      it('THEN this one element is returned', () => {
        const theArray = [1];
        theArray.shift();
        assert.deepStrictEqual(returned, 1);
      });
    });
  });

  describe('GIVEN calling `shift` on objects other than an array', () => {
    it('WHEN calling `shift` on an array-like object THEN it works like on an array', () => {
      const arrayLike = {length: 1, 1: 'zero'};
      assert.strictEqual(Array.prototype.shift.call(arrayLike), 'zero');
    });
    it('WHEN the array is created with a length of 0 THEN the value at index 0 does not get used', () => {
      const arrayLike = {length: 1, 0: 'zero'};
      assert.strictEqual(Array.from(arrayLike).shift(), undefined);
    });
    it('WHEN calling `shift` on a string THEN this throws, because a string is immutable', () => {
      const string = ['zero'];
      assert.throws(() => Array.prototype.shift.apply(string));
    });
  });
});
