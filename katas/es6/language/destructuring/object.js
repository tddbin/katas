// 12: destructuring - object
// To do: make all tests pass, leave the assert lines unchanged!

describe('destructuring objects', () => {

  it('is simple', () => {
    const x = {x: 1};
    assert.equal(x, 1);
  });

  describe('nested', () => {
    it('multiple objects', () => {
      const magic = {first: 23, second: 42};
      const {magic: [second]} = {magic};
      assert.equal(second, 42);
    });
    it('object and array', () => {
      const {z:[x]} = {z: [23, 42]};
      assert.equal(x, 42);
    });
    it('array and object', () => {
      const [,{lang}] = [null, [{env: 'browser', lang: 'ES6'}]];
      assert.equal(lang, 'ES6');
    });
  });
  
  describe('interesting', () => {
    it('missing refs become undefined', () => {
      const {z} = {x: 1, z: 2};
      assert.equal(z, void 0);
    });
  
    it('destructure from builtins (string)', () => {
      const {substr} = 1;
      assert.equal(substr, String.prototype.substr);
    });
  });

});
