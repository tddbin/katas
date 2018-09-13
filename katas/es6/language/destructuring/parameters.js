// 14: destructuring - parameters
// To do: make all tests pass, leave the assert lines unchanged!

describe('Destructuring function parameters', () => {
  describe('destruct parameters', () => {
    it('multiple params from object', () => {
      //// const fn = ({id}, {name}) => {
      const fn = ({id, name}) => {
        assert.equal(id, 42);
        assert.equal(name, 'Wolfram');
      };
      const user = {name: 'Wolfram', id: 42};
      fn(user);
    });
    it('multiple params from array/object', () => {
      //// const fn = ([{name}]) => {
      const fn = ([,{name}]) => {
        assert.equal(name, 'Alice');
      };
      const users = [{name: 'nobody'}, {name: 'Alice', id: 42}];
      fn(users);
    });
  });
  describe('default values', () => {
    it('for simple values', () => {
      //// const fn = (id, name='Bobby') => {
      const fn = (id, name='Bob') => {
        assert.strictEqual(id, 23);
        assert.strictEqual(name, 'Bob');
      };
      fn(23);
    });
    it('for a missing array value', () => {
      const defaultUser = {id: 23, name: 'Joe'};
      //// const fn = ([user]) => {
      const fn = ([user = defaultUser]) => {
        assert.deepEqual(user, defaultUser);
      };
      fn([]);
    });
    it('mix of parameter types', () => {
      //// const fn = (id, [arr], {obj}) => {
      const fn = (id=1, [arr=2], {obj=3}) => {
        assert.equal(id, 1);
        assert.equal(arr, 2);
        assert.equal(obj, 3);
      };
      fn(void 0, [], {});
    });
  });
});
