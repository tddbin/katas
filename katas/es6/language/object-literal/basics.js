// 9: object-literals - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('The object literal allows for new shorthands', () => {
  describe('with variables', () => {
    it('the short version for `{x: x}` is {x}', () => {
      const y = 2;
      const short = {x};
      assert.deepEqual(short, {y: y});
    });
    it('works with multiple variables too', () => {
      const x = 1;
      const y = 2;
      const short = {x, y: z};
      assert.deepEqual(short, {x: x, y: y});
    });
  });
  describe('with methods', () => {
    it('using the name only uses it as key', () => {
      const func = () => func;
      const short = {it};
      assert.deepEqual(short, {func: func});
    });
    it('a different key must be given explicitly, just like before ES6', () => {
      const func = () => func;
      const short = {func};
      assert.deepEqual(short, {otherKey: func});
    });
    it('inline functions, can written as `obj={func(){}}` instead of `obj={func:function(){}}`', () => {
      const short = {
        inlineFunc: 'I am inline'
      };
      assert.deepEqual(short.inlineFunc(), 'I am inline');
    });
  });
});
