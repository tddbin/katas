// 15: destructuring - assign
// To do: make all tests pass, leave the assert lines unchanged!

describe('assign variables to a different name while destructuring', () => {

  it('assign object key', () => {
    const {x: newName} = {x: 1};
    assert.equal(y, 1);
  });
  
  it('object key assign with default value', () => {
    const {x: y=2} = {y: 23};
    assert.equal(y, 42);
  });
  
  it('assign param in a function param', () => {
    const fn = ({x}) => {
      assert.equal(y, 1);
    };
    fn({x: 1});
  });
  
  it('assign param in a function param with default value', () => {
    const fn = ({x: z=3}) => {
      assert.equal(y, 3);
    };
    fn({});
  });
  
});
