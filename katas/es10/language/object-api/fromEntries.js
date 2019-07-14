// ES10 - 1: Object - fromEntries
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Object.fromEntries()` converts key-value pairs into an object', () => {
  it('it is a static function defined on `Object`', () => {
    //// const fn = Object.entries;
    const fn = Object.fromEntries;
    assert(Object.is(Object.fromEntries, fn));
  });
  describe('the key-value pairs might be given as', () => {
    it('a simple array, with (at least) two values', () => {
      const keyValuePair = ['one', 'two'];
      assert.deepEqual(Object.fromEntries([keyValuePair]), {one: 'two'});
    });
    it('a simple array, with multiple key-value pairs', () => {
      const keyValuePair1 = ['one', 'two'];
      const keyValuePair2 = ['three', 'four'];
      assert.deepEqual(Object.fromEntries([keyValuePair1, keyValuePair2]), {one: 'two', three: 'four'});
    });
    it('a simple array, with duplicate keys override their predecessor', () => {
      const keyValuePair1 = ['one', 'two'];
      //// const keyValuePair2 = ['ONE', 'four'];
      const keyValuePair2 = ['one', 'four'];
      assert.deepEqual(Object.fromEntries([keyValuePair1, keyValuePair2]), {one: 'four'});
    });
    it('an object, with properties `0` and `1`', () => {
      const keyValuePair = {0: 'key', 1: 'value'};
      assert.deepEqual(Object.fromEntries([keyValuePair]), {key: 'value'});
    });
    it('an object, without a property `0` results in an object using `undefined` as key', () => {
      const keyValuePair = {key: 'key', 1: 'value'};
      assert.deepEqual(Object.fromEntries([keyValuePair]), {[undefined]: 'value'});
    });
    it('many objects, with the same property `0` override each other`s values', () => {
      const pair1 = {0: 'key', 1: 'value 1'};
      //// const pair2 = {0: 'key1', 1: 'value 2'};
      const pair2 = {0: 'key', 1: 'value 2'};
      assert.deepEqual(Object.fromEntries([pair1, pair2]), {key: 'value 2'});
    });
    it('a `Map`, which maps naturally to object key+value', () => {
      const map = new Map([['key', 'value']]);
      map.set('key1', 'value1');
      //// const object = Object.entries(map);
      const object = Object.fromEntries(map);
      assert.deepEqual(object, {key: 'value', key1: 'value1'});
    });
    it('an empty `Map`, results in an empty object', () => {
      //// const object = Object.fromEntries(new Map([[]]));
      const object = Object.fromEntries(new Map());
      assert.deepEqual(object, {});
    });
    it('a `Set`, used with `set.entires()`, returns an object with key=value', () => {
      const set = new Set();
      ////
      set.add('value0');
      set.add('value1');
      assert.deepEqual(Object.fromEntries(set.entries()), {value0: 'value0', value1: 'value1'});
    });
  });
  describe('the 1st parameter', () => {
    describe('must be iterable', () => {
      it('like an array', () => {
        assert.doesNotThrow(() => Object.fromEntries([]));
      });
      it('a self-made iterable', () => {
        let cnt = -1;
        const iterable = {
          [Symbol.iterator]() {
            return {
              next: () => {
                cnt++;
                if (cnt === 0) return {value: ['a', 42], done: false};
                if (cnt === 1) return {done: true};
              }
            }
          }
        };
        assert.deepEqual(Object.fromEntries(iterable), {a: 42});
      });
    });
    describe('each entry must have a property `0` and `1` for key+value', () => {
      it('like an object with these explicit properties', () => {
        assert.deepEqual(Object.fromEntries([{0: 'key', 1: 'value'}]), {key: 'value'});
      });
      it('if any (or both) are missing, `undefined` is used', () => {
        //// const obj = {0: 'key'};
        const obj = {};
        assert.deepEqual(Object.fromEntries([obj]), {[undefined]: undefined});
      });
      it('if an empty array is given, both are undefined too', () => {
        //// const emptyArray = [1, 2];
        const emptyArray = [];
        assert.deepEqual(Object.fromEntries([emptyArray]), {[undefined]: undefined});
      });
    });
    describe('throws a TypeError', () => {
      it('if missing', () => {
        //// const fn = () => Object.fromEntries('');
        const fn = () => Object.fromEntries();
        assert.throws(fn, TypeError);
      });
      it('if `undefined` (which is not an iterable)', () => {
        assert.throws(() => { Object.fromEntries(undefined); }, TypeError);
      });
      it('if `null` (which is not an iterable)', () => {
        assert.throws(() => { Object.fromEntries(undefined); }, TypeError);
      });
      it('if boolean (which is not an iterable)', () => {
        assert.throws(() => { Object.fromEntries(true); }, TypeError);
      });
      it('if a Symbol (which is not an iterable)', () => {
        assert.throws(() => { Object.fromEntries(Symbol.for('some')); }, TypeError);
      });
    });
  });
  describe('more exotic use cases, are', () => {
    it('an empty string, returns an empty object', () => {
      assert.deepEqual(Object.fromEntries(''), {});
    });
    it('a single-space string, throws', () => {
      assert.throws(() => Object.fromEntries(' '), TypeError);
    });
  });


  describe('requires an argument that can be converted to an object', () => {
    it('an empty string does NOT throw', () => {
      assert.doesNotThrow(() => { Object.fromEntries(''); });
    });
    it('an non-empty string does throw', () => {
      assert.throws(() => { Object.fromEntries(' '); });
    });
  });

  describe('works', () => {
    it('empty string', () => {
      assert.doesNotThrow(() => { Object.fromEntries(''); });
      assert.deepEqual(Object.fromEntries([]), {});
    });
    it('empty array', () => {
      assert.doesNotThrow(() => { Object.fromEntries([]); });
      assert.deepEqual(Object.fromEntries([]), {});
    });
    it('array of arrays', () => {
      assert.doesNotThrow(() => { Object.fromEntries([[]]); });
      assert.deepEqual(Object.fromEntries([[], []]), {undefined: undefined});
    });
    it('array of arrays #2', () => {
      assert.doesNotThrow(() => { Object.fromEntries([[], []]); });
      assert.deepEqual(Object.fromEntries([[], []]), {undefined: undefined});
    });
    it('array of arrays #3', () => {
      assert.doesNotThrow(() => { Object.fromEntries([[], []]); });
      assert.deepEqual(Object.fromEntries([[1,2], [3,4]]), {1:2, 3:4});
    });
    it('toString-ables can be keys', () => {
      const s = new class { toString() { return 'key'; }  };
      assert.deepEqual(Object.fromEntries([[s, 42]]), {key: 42});
    });
    it('keys 0 and 1 must be given', () => {
      assert.deepEqual(Object.fromEntries([{1: null}]), {[undefined]: null});
      assert.deepEqual(Object.fromEntries([{0: 0, 1: 1}]), {0: 1});
      assert.deepEqual(Object.fromEntries([{10: 0, 20: 1}]), {[undefined]: undefined});
      assert.deepEqual(Object.fromEntries([[0, 1]]), {0: 1});
      assert.deepEqual(Object.fromEntries([Object('')]), {[undefined]: undefined});
      assert.deepEqual(Object.fromEntries([Object('12')]), {1: '2'});
      assert.throws(() => Object.fromEntries(['12']));

      // key+value are accessible via prop 0+1, they are not iterated over!!!!
      const map = new Map([['key', 'value']]);
      assert.deepEqual(Object.fromEntries([map]), {[undefined]: undefined});
      map[0] = 23;
      assert.deepEqual(Object.fromEntries([map]), {23: undefined});
      assert.deepEqual(Object.fromEntries([['key', 'value']]), {key: 'value'});

      // custom iterator
      let cnt = 0;
      const iterable = {
        [Symbol.iterator]() {
          return {next: () => ([{value: ['a', 42], done: false}, {done: true}][cnt++])};
        }
      };
      assert.deepEqual(Object.fromEntries(iterable), {a: 42});
      assert.deepEqual(Object.fromEntries([['a', 42]]), {a: 42});
    });
  });

  describe('use cases', () => {
    it('from JSON to object', () => {
      // the
    });
    it('mapping data', () => {
      const people = [{name: 'Alex', age: 21}, {name: 'Anna', age: 21}];
      const peoplesAge = Object.fromEntries(people.map(({name, age}) => [name, age]));
      assert.deepEqual({Alex: 21, Anna:21}, peoplesAge);
    });
  });
  describe('not symetric to `Object.entries()`', () => {
    it('is almost the reverse of Object.entries()', () => {

    });
    it('allows Symbols as keys, while `Object.entries()` does not report them', () => {
      const sym = Symbol();
      const fromEntries = Object.fromEntries([[sym, 42]]);
      assert.deepEqual(fromEntries, {[sym]: 42});
      // while
      assert.deepEqual(Object.entries(fromEntries), []);
    });
  });
});
