// ??: array - `Array.prototype.copyWithin` method
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.prototype.copyWithin` copies from itself into itself', () => {
  
  it('', () => {
    const arr = [1, 2, 3];
    const mix = arr.copyWithin(2, 0);

    assert.deepEqual(mix, []);
  });

});


hard to understand :(