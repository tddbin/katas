// 8: block scope - const
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('`const` is like `let` plus read-only', () => {
  //// const notChangeable = 25;
  const notChangeable = 23;
  it('const scope leaks too', () => {
    assert.equal(notChangeable, 23);
  });
  describe('scalar values are read-only', () => {
    it('e.g. a number', () => {
      const constNum = 0;
      //// constNum = 1;

      assert.equal(constNum, 0);
    });
    it('or a string', () => {
      const constString = 'I am a const';
      //// constString = 'Cant change you?';

      assert.equal(constString, 'I am a const');
    });
  });
  describe('complex types are NOT fully read-only', () => {
    it('array`s items can be changed', () => {
      const arr = [];
      //// arr[0] = 0;
      arr[0] = 42;
      assert.equal(arr[0], 42);
    });
    it('object`s can be modified', () => {
      const obj = {x: 1};
      //// obj.x = 2;
      obj.x = 3;
      assert.equal(obj.x, 3);
    });
  });
});
