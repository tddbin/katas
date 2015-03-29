// 12: destructuring - object
// To do: make all tests pass, leave the assert lines unchanged!

describe('destructuring objects', () => {

  it('is simple', () => {
    const {x} = {x: 1};
    assert.equal(x, 1);
  });

  describe('nested', () => {
    it('multiple objects', () => {
      const {z: {x}} = {z: {y: 23, x: 2}};
      assert.equal(x, 2);
    });
    it('object and array', () => {
      const {z:[,x]} = {z: [23, 42]};
      assert.equal(x, 42);
    });
    it('array and object', () => {
      const [,{lang}] = [null, {env: 'browser', lang: 'ES6'}];
      assert.equal(lang, 'ES6');
    });
  });
  
  it('missing => undefined', () => {
    const {z} = {x: 1};
    assert.equal(z, void 0);
  });

  // it('', () => {
  //   let z, x;
  //   let {z: {x: z}} = {z: {x}} = {z: {y: 23, x: 2}};
  //   assert.equal(x, 2);
  // });

});
