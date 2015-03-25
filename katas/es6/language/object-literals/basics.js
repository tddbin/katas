// 9: object-literals - basics
// To do: make all tests pass, leave the asserts unchanged!

describe('new shorthands for objects', () => {

  const x = 1;
  const y = 2;

  describe('with variables', () => {
    it('use the variables name as key', () => {
      assert.deepEqual({x}, {y: y});
    });
    it('works with many too', () => {
      const short = {x, y: z};
      assert.deepEqual(short, {x: x, y: y});
    });
  });
  
  describe('with methods', () => {
    
    const func = () => func;

    it('uses its name', () => {
      const short = {it};
      assert.deepEqual(short, {func: func});
    });
    
    it('different key must be given explicitly, just like before ES6', () => {
      const short = {func};
      assert.deepEqual(short, {otherKey: func});
    });
    
    it('also uses name of inline method', () => {
      const short = {
        inlineFunc() {return 'I am inline'}
      };
      assert.deepEqual(short.inlineFunc(), 'I am inline');
    });
  });
  
});
