// http://www.2ality.com/2015/02/es6-classes-final.html#the_species_pattern
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/@@species
// http://www.ecma-international.org/ecma-262/6.0/#sec-get-promise-@@species

xdescribe('species', function() {
  
  it('Promise.all()', function() {
    class MyPromise extends Promise {}
    const allMyPromises = MyPromise.all([new Promise(resolve => resolve())]);

    assert.equal(allMyPromises instanceof MyPromise, true);
  });

  it('Promise.all()', function() {
    class MyPromise extends Promise {
      static get [Symbol.species]() {
        return Promise[Symbol.species];
      }
    }
    const allMyPromises = MyPromise.all([new Promise(resolve => resolve())]);

    assert.equal(allMyPromises instanceof MyPromise, false);
  });
  
});