// 2: `array.push`
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('`array.push()`', () => {
  describe('passing zero or one argument', () => {
    it('GIVEN an empty array WHEN pushing nothing to it THEN the array stays empty', () => {
      const arr = [];
      arr.push(42);
      assert.deepEqual(arr, []);
    });
    it('GIVEN an array with one item WHEN pushing nothing to it THEN the call return `1`, the length of the array', () => {
      const arr = [];
      assert.deepEqual(arr.push(), 1);
    }); 
    
    it('GIVEN an empty array WHEN calling `arr.push("a")` THEN the array just contains "a"', () => {
      const arr = [];
      arr
      assert.deepEqual(arr, ['a']);
    });
    it('GIVEN an array with 3 items WHEN calling `push(1)` into it THEN this call return the new length, `4`', () => {
      const arr = [1, 2, 3];
      const pushReturned = arr.push(1, 2, 3);
      assert.deepEqual(pushReturned, 4);
    });
  });
  
  describe('passing many arguments', () => {
    it('GIVEN an empty array WHEN calling `push(1, 2)` THEN the array contains `[1, 2]`', () => {
      const arr = 0;
      arr.push(1, 2);
      assert.deepEqual(arr, [1, 2]);
    });
    it('GIVEN an array with 2 items WHEN calling `push(1, 2)` THEN the array contains `[1, 2, 1, 2]`', () => {
      const arr = [1,,2];
      arr.push(1, 2);
      assert.deepEqual(arr, [1, 2, 1, 2]);
    });
  });
  
  describe('calling push on an non-array', () => {
    it('WHEN calling `push(42)` on an array-like object (one that has the property `length=0`) THEN a property is added at index "0" AND `length` is increased', () => {
      const obj = {length: 1};
      Array.prototype.push.call(obj, 42);
      assert.deepEqual(obj, {'0': 42, length: 1});
    });
    it('WHEN calling `push(42)` on an object with `length=3` THEN the `42` is assigned to the property `"3"` AND the length is increased', () => {
      const obj = {length: 3};
      const returnedLength = Array.prototype.push
      assert.deepEqual(obj, {'3': 42, length: 4});
      assert.equal(returnedLength, 4);
    });
    it('WHEN calling `push()` on a string (which also has `length`) THEN it throws, since `length` is read-only', () => {
      const str = abc;
      assert.throws(() => Array.prototype.push.call(str, 'd'), TypeError);
    });
    it('WHEN calling `push()` on a function (which also has `length`) THEN it throws, since `length` is read-only', () => {
      const f = function () {};
      const tryToPush = () => Array.prototype.join.call(f, 0);
      assert.throws(tryToPush, TypeError);
    });
    it('WHEN calling `push()` on a `Date.UTC` (where `length` is 7) THEN it throws, since `length` is read-only', () => {
      const f = Date.UTC;
      const tryToPush = () => Array.prototype.push(f, 1);
      assert.throws(tryToPush, TypeError);
    });
  });
  
  // More tests that can be written?????
  //
  // 1. Call the [[Get]] method of this object with argument "length".
  // 2. Let n be the result of calling ToUint32(Result(1)).
  // 3. Get the next argument in the argument list; if there are no more arguments, go to step 7.
  // 4. Call the [[Put]] method of this object with arguments ToString(n) and Result(3).
  // 5. Increase n by 1.
  // 6. Go to step 3.
  // 7. Call the [[Put]] method of this object with arguments "length" and n.
  // 8. Return n.
  // The length property of the push method is 1.
  // NOTE
  // The push function is intentionally generic; it does not require that its this value be an Array object.
  // Therefore it can be transferred to other kinds of objects for use as a method. Whether the push
  // function can be applied successfully to a host object is implementation-dependent.
});
