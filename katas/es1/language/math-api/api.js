// ES1 - 7: Math API
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Math` API overview', () => {
  describe('properties', () => {
    it('E, the base of the natural logarithms, ~2.718', () => {
      assert.equal(Math.E, 2.7182818284590452354);
    });
    it('LN10', () => {
      assert.equal(Math.LN10, 2.302585092994046);
    });
    it('LN2', () => {
      assert.equal(Math.LN2, 0.6931471805599453);
    });
    it('LOG2E', () => {
      assert.equal(Math.LOG2E, 1.4426950408889634);
    });
    it('LN2', () => {
      assert.equal(Math.LOG10E, 0.4342944819032518);
    });
    it('PI', () => {
      assert.equal(Math.PI, 3.141592653589793);
    });
    it('SQRT', () => {
      assert.equal(Math.SQRT1_2, 0.7071067811865476);
    });
    it('SQRT2', () => {
      assert.equal(Math.SQRT2, 1.4142135623730951);
    });
  });
  describe('functions', () => {

  });
});
