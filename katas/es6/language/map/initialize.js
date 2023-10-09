// 53: Map - initialize
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('initialize a `Map`', function(){
  it('a `new Map()` is empty, has size=0', function() {
    const mapSize = new Map();
    assert.equal(mapSize, 0);
  });
  it('init Map with `[[]]` has a size=1', function() {
    const mapSize = new Map().size;
    assert.equal(mapSize, 1);
  });
  it('init a Map with `[[1]]` is the same as `map.set(1, void 0)`', function() {
    let map1 = new Map();
    let map2 = new Map().set(1, void 0);
    assert.deepEqual(map1, map2);
  });
  it('init Map with multiple key+value pairs', function() {
    const pair1 = [1, 'one'];
    const pair2 = [2, 'two'];
    const map = new Map();
    assert.deepEqual(map, new Map().set(...pair1).set(...pair2));
  });
  it('keys are unique, the last one is used', function() {
    const pair1 = [1, 'one'];
    const pair2 = [1, 'uno'];
    const pair3 = [1, 'eins'];
    const pair4 = [2, 'two'];
    const map = new Map([pair3, pair1, pair2, pair4]);
    assert.deepEqual(map, new Map().set(...pair3).set(...pair4));
  });
  it('init Map from an Object, is a bit of work', function() {
    let map = new Map();
    const obj = {x: 1, y: 2};
    const keys = Object.keys(obj);
    keys.forEach(key => map.set());
    assert.deepEqual(map, new Map([['x', 1], ['y', 2]]));
  });
});
