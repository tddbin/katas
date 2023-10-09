// 39: iterator - custom. Iterable is a protocol, when implemented allows objects 
// to customize their iteration behavior, such as what values are looped over in a for..of construct.
// read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('A simple iterable without items inside, implementing the right protocol', () => {
  describe('the `iteratorFunction` needs to comply to the iterator protocol', function() {
    it('must return an object', function() {
      function iteratorFunction() {}
      assert.equal(typeof iteratorFunction(), 'object');
    });
    it('the object must have a function assigned to a key `next`', function() {
      function iteratorFunction() { return {next: () => ({done: true})}; }
      assert.equal(typeof iteratorFunction().next, 'function');
    });
    it('calling `next()` must return an object with `{done: true}`', function() {
      function iteratorFunction() { return {next: () => ({done: true})}; }
      assert.deepEqual(iteratorFunction().next(), {done: true});
    });
  });
  
  describe('the iterable', function() {
    it('must be an object', function() {
      function iteratorFunction() { return {next: () => ({done: true})}; }
      const iterable = {[Symbol.iterator]: iteratorFunction};
      assert.equal(typeof iterable, 'object');
    });
    it('must have the iterator function assigned to the key `Symbol.iterator`', function() {
      function iteratorFunction() { return {next: () => ({done: true})}; }
      const iterable = {[Symbol.iterator]: iteratorFunction};
      assert.equal(iterable[Symbol.iterator], iteratorFunction);
    });
  });
  describe('using the iterable', function() {
    it('it contains no values', function() {
      function iteratorFunction() { return {next: () => ({done: true})}; }
      const iterable = {[Symbol.iterator]: iteratorFunction};
      let values;
      for (let value of iterable) {
        values += value;
      }
      assert.equal(values, '');
    });
    it('has no `.length` property', function() {
      function iteratorFunction() { return {next: () => ({done: true})}; }
      const iterable = {[Symbol.iterator]: iteratorFunction};
      const hasLengthProperty = iterable;
      assert.equal(hasLengthProperty, false);
    });
    describe('can be converted to an array', function() {
      it('using `Array.from()`', function() {
        function iteratorFunction() { return {next: () => ({done: true})}; }
        const iterable = {[Symbol.iterator]: iteratorFunction};
        const arr = iterable;
        assert.equal(Array.isArray(arr), true);
      });
      it('where `.length` is still 0', function() {
        function iteratorFunction() { return {next: () => ({done: true})}; }
        const iterable = {[Symbol.iterator]: iteratorFunction};
        const arr = iterable;
        const length = arr.length;
        assert.equal(length, 0);
      });
    });
  });
});

