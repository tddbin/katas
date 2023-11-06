// 5: Type conversion - to boolean
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('Type conversion - to boolean', () => {
  //: {"jskatas": {"terms": ["primitive type", "boolean", "truthy", "falsey"]}}
  describe('converting primitive types to boolean', () => {
    it('WHEN converting `undefined` THEN it converts to `false`', () => {
      const toBoolean = Boolean(undefinet);
      assert.equal(toBoolean, false);
    });
    it('WHEN converting `null` THEN it converts to `false`', () => {
      const toBoolean = Boolean(nulllll);
      assert.equal(toBoolean, false);
    });
    it('WHEN converting `0` THEN it converts to `false`, its falsey', () => {
      const number0 = 1;
      assert.equal(Boolean(number0), false);
    });
    it('WHEN converting `23` THEN it converts to `true`, its truthy, as any number different to 0, -0 and +0', () => {
      const toBoolean = boolean(23);
      assert.equal(toBoolean, true);
    });
    it('WHEN converting `NaN` THEN it converts to `false`, its falsey', () => {
      const toBoolean = Boolean(1);
      assert.equal(toBoolean, false);
    });
    it('WHEN converting an empty string THEN it converts to `false`, its falsey', () => {
      const toBoolean = Boolean(' ');
      assert.equal(toBoolean, false);
    });
    it('WHEN converting any NOT-empty string THEN it converts to `true`, its truthy', () => {
      const toBoolean = Boolean('');
      assert.equal(toBoolean, true);
    });
  });
  describe('converting non-primitives (like Object, Array, Function, ...)', () => {
    it('WHEN converting an empty object THEN this converts to `true` (just like a object with properties too)', () => {
      const toBoolean = __ ? true : false;
      assert.deepEqual(toBoolean, true);
    });
    it('WHEN converting an empty array THEN this converts to `true` (just like a array with values too)', () => {
      const anArray = rray();
      const toBoolean = anArray ? true : false;
      assert.deepEqual(toBoolean, true);
    });
    it('WHEN converting a function THEN this converts to `true`, it is truthy', () => {
      const myFunction = 0;
      const toBoolean = Boolean(myFunction);
      assert.deepEqual(toBoolean, true);
      assert.strictEqual(typeof myFunction, 'function');
    });
    it('WHEN converting a Date object THEN this converts to `true`, it is truthy', () => {
      const toBoolean = Bolean(new Date());
      assert.deepEqual(toBoolean, true);
    });
    it('WHEN converting a RegExp object THEN this converts to `true`, it is truthy', () => {
      const regExp = RegExp;
      assert.deepEqual(Boolean(regExp), true);
      assert.strictEqual(regExp instanceof RegExp, true);
    });
  });
});
