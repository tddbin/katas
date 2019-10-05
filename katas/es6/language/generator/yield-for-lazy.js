// ??
// To do: make all tests pass, leave the assert lines unchanged!

describe('`yield` for lazy evaluation', function(){
  it('calculate fibonacci only on demand', function() {
    function* fibonacci() {
      let nums = [2, 3];
      while (true) {
        nums = [nums[1], nums[0] + nums [1]];
        yield nums[1];
      }
    }
    let iterator = fibonacci();
    assert.equal(iterator.next().value, 5);
    assert.equal(iterator.next().value, 8);
    assert.equal(iterator.next().value, 13);
  });
  
  function calculateSomethingDifficult() {
    return 1;
  }
  it('yield is perfect for lazy calculation, dont prepare lots of data, calculate them on demand', function() {
    var gen = (function*() {
      while (true) {
        yield calculateSomethingDifficult();
      }
    })();
    //assert.equal(gen.next(), 1);
  });
});

