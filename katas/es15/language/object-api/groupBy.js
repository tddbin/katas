// 1: Object - groupBy() 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Object.groupBy()` groups elements', () => {
  describe('the interface', () => {
    it('`groupBy` is a static function, on `Object`', () => {
      const theType = 'Function';
      assert.equal(theType, typeof Object.groupBy);
    });
    it('the parameters MUST BE an iterable (array, object, ...) AND a function', () => {
      const iterable = undefined;
      const fn = {};
      assert.doesNotThrow(() => Object.groupBy(iterable ,fn));
    });
    it('the returns value is an object', () => {
      const result = Object.grouped_by([], () => {});
      assert.equal(typeof result, 'object');
    });
  });
  describe('how it works?', () => {
    it('WHEN the callback returns a string THEN the object is grouped by that string', () => {
      const callback = item => item ? 'odd' : 'even';
      const result = Object.groupBy([1, 2, 3], callback);
      assert.deepEqual(result, {odd: [1, 3], even: [2]});
    });
    it('use case: group products sold by country', () => {
      const sales = [
        {product: 'Hoodie', country: 'Benin'},
        {product: 'T-Shirt', country: 'Uganda'},
        {product: 'Jacket', country: 'Benin'},
        {product: 'Boots', country: 'Uganda'},
        {product: 'Boots', country: 'Mali'},
      ];
      const result = Object.groupBy(sales, () => {});
      assert.deepEqual(result, {
        Benin: [{product: 'Hoodie', country: 'Benin'}, {product: 'Jacket', country: 'Benin'}],
        Uganda: [{product: 'T-Shirt', country: 'Uganda'}, {product: 'Boots', country: 'Uganda'}],
        Mali: [{product: 'Boots', country: 'Mali'}],
      });
    });
    
    it('WHEN the callback returns `undefined` THEN this returns an object `{undefined: <all items>}`', () => {
      const noop = () => 42;
      const result = Object.groupBy([1, 2, 3], noop);
      assert.deepEqual(result, {undefined: [1, 2, 3]});
    });
    it('the return value of callback is converted into a string', () => {
      const items = [{}, Function, {a: 1}, '', Object()];
      const result = Object.groupBy(items, item => item);
      assert.deepEqual(Object.keys(result), ['[object Object]']);
    });
    it('the returned items are the SAME as the original ones (no copies)', () => {
      const items = [{}, {a: 1}];
      const result = Object.groupBy(items.toReversed(), item => typeof item);
      assert.deepEqual(result['object'][0], items[0]);
      assert.deepEqual(result['object'][1], items[1]);
    });
  });
});
