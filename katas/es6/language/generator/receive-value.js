// ??: Generator - 
// To do: make all tests pass, leave the assert lines unchanged!

describe('a generator can return a value', function() {

  describe('returning just one value', function() {

    describe('using return', function() {
      
      function* generatorFunction() { return 1; }
      
      it('looks like an iterator', function() {
        assert.equal(generatorFunction().next().value, 1);
      });
      
      it('also ends the iteration, there are no more values returned, ever', function() {
        const gen = generatorFunction();
        gen.next();
        assert.deepEqual(gen.next(), {value: void 0, done: true});
      });
      
    });
    
    describe('via `yield`', function() {
      function* generatorFunction() { yield 2; }
      
      it('just like an iterator does it', function() {
        assert.equal(generatorFunction().next().value, 2);
      });
      
      it('also ends the iteration, there are no more values returned, ever', function() {
        const gen = generatorFunction();
        gen.next();
        assert.deepEqual(gen.next(), {value: void 0, done: true});
      });
      
    });
    
  });

  describe('', function() {
    it('', function() {
      
    });
  });
  
});

