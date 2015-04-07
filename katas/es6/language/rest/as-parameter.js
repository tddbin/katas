// 18: rest - as-parameter
// To do: make all tests pass, leave the assert lines unchanged!

describe('rest in function params', () => {
    
  it('must be the last parameter', () => {
    const fn = (...rest, veryLast) => {
      assert.deepEqual([1, 2], rest);
    };
    fn(1, 2);
  });
  
  it('can be used to get all other parameters', () => {
    const fn = (firstParam, secondParam, rest) => {
      assert.deepEqual([3,4], rest);
    };
    fn(null, 2, 3, 4);
  });
  
  it('makes `arguments` obsolete', () => {
    const fn = () => {
      assert.deepEqual([42, 'twenty three', 'win'], args);
    };
    fn(42, 'twenty three', 'win');
  });
    
  it('eliminate `arguments`!!!', () => {
    const fn = () => arguments;
    const [firstArg, ...rest] = fn(1, 2, 3);
    assert.deepEqual([2, 3], rest);
  });
    
});
