// 19: rest - with-destructuring
// To do: make all tests pass, leave the assert lines unchanged!

describe('rest with destructuring', () => {
    
  it('rest parameter must be last', () => {
    const [...all, last] = [1, 2, 3, 4];
    assert.deepEqual(all, [1, 2, 3, 4]);
  });
  
  it('assign rest of an array to a variable', () => {
    const [...all] = [1, 2, 3, 4];
    assert.deepEqual(all, [2, 3, 4]);
  });
  
  // the following are actually using `spread` ... oops, to be fixed
  it('concat differently', () => {
    const theEnd = [3, 4];
    const allInOne = [1, 2, ...[theEnd]];
    assert.deepEqual(allInOne, [1, 2, 3, 4]);
  });
  
  it('`apply` made simple, even for constructors', () => {
    const theDate = [2015, 1, 1];
    const date = new Date(theDate);
    assert.deepEqual(new Date(2015, 1, 1), date);
  });
  
});
