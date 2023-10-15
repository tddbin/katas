describe('hasInstance', () => {
  it('WHEN defining the static method `[Symbol.hasInstance]` THEN the result is used with `instanceof`', () => {
    class Square {
      static [Symbol.hasInstance](instance) {
        return true;
      }
    }
    assert.equal(Square instanceof Square, true);
  });
});