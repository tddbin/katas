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
      //// const keyValuePair = ['zero', 'one', 'two'];
      const keyValuePair = ['one', 'two'];
      assert.deepEqual(Object.fromEntries([keyValuePair]), {one: 'two'});
    });
    it('a simple array, with multiple key-value pairs', () => {
      const keyValuePair1 = ['one', 'two'];
      //// const keyValuePair2 = ['3', 'Four'];
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
      //// const keyValuePair = {key: 'key', 1: 'value'};
      const keyValuePair = {0: 'key', 1: 'value'};
      assert.deepEqual(Object.fromEntries([keyValuePair]), {key: 'value'});
    });
    it('an object, without a property `0` results in an object using `undefined` as key', () => {
      //// const keyValuePair = {0: 'key', 1: 'value'};
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
        //// const anArray = ' ';
        const anArray = [];
        assert.doesNotThrow(() => Object.fromEntries(anArray));
      });
      it('a self-made iterable', () => {
        let cnt = -1;
        const iterable = {
          [Symbol.iterator]() {
            return {
              next: () => {
                cnt++;
                //// if (cnt === 1) return {value: ['key', 42], done: false};
                if (cnt === 0) return {value: ['key', 42], done: false};
                //// if (cnt === 0) return {done: true};
                if (cnt === 1) return {done: true};
              }
            }
          }
        };
        assert.deepEqual(Object.fromEntries(iterable), {key: 42});
      });
    });
    describe('each entry must have a property `0` and `1` for key+value', () => {
      it('like an object with these explicit properties', () => {
        //// const obj = {'00': 'key', 11: 'value'};
        const obj = {0: 'key', 1: 'value'};
        assert.deepEqual(Object.fromEntries([obj]), {key: 'value'});
      });
      it('if any (or both) are missing, `undefined` is used', () => {
        //// const obj = {0: 'key', 10: 'no key', 20: 'no value'};
        const obj = {};
        assert.deepEqual(Object.fromEntries([obj]), {[undefined]: undefined});
      });
      it('if an empty array is given, both are undefined too', () => {
        //// const emptyArray = [1, 2];
        const emptyArray = [];
        assert.deepEqual(Object.fromEntries([emptyArray]), {[undefined]: undefined});
      });
      it('toString-ables can be keys', () => {
        //// const s = new class { toString() { return 'value'; }  };
        const s = new class { toString() { return 'key'; }  };
        assert.deepEqual(Object.fromEntries([[s, 42]]), {key: 42});
      });
      it('iterables (like a `Map`) are NOT expected, and not used', () => {
        const map = new Map([['key', 'value']]);
        assert.deepEqual(Object.fromEntries([map]), {[undefined]: undefined});
        //// map.key = 23;
        map[0] = 23;
        assert.deepEqual(Object.fromEntries([map]), {23: undefined});
      });
    });
    describe('throws a TypeError', () => {
      it('if missing', () => {
        //// const fn = () => Object.fromEntries('');
        const fn = () => Object.fromEntries();
        assert.throws(fn, TypeError);
      });
      it('if `undefined` (which is not an iterable)', () => {
        //// const fn = () => { Object.fromEntries(''); };
        const fn = () => { Object.fromEntries(undefined); };
        assert.throws(fn, TypeError);
      });
      it('if `null` (which is not an iterable)', () => {
        //// const nullValue = '';
        const nullValue = null;
        assert.throws(() => { Object.fromEntries(nullValue); }, TypeError);
      });
      it('if boolean (which is not an iterable)', () => {
        //// const aBool = [];
        const aBool = true;
        assert.throws(() => { Object.fromEntries(aBool); }, TypeError);
      });
      it('if a Symbol (which is not an iterable)', () => {
        //// const fn = () => { Object.fromEntries(SyMbOl('some')); };
        const fn = () => { Object.fromEntries(Symbol('some')); };
        assert.throws(fn, TypeError);
      });
    });
  });
  describe('more use cases/learnings, are', () => {
    it('can be used to map data', () => {
      const people = [{name: 'Alex', age: 21}, {name: 'Anna', age: 21}];
      //// const peoplesAge = Object.entries(people.map(({name, age}) => [name, age]));
      const peoplesAge = Object.fromEntries(people.map(({name, age}) => [name, age]));
      assert.deepEqual({Alex: 21, Anna:21}, peoplesAge);
    });
    it('an empty string, returns an empty object', () => {
      //// const emptyString = ' ';
      const emptyString = '';
      assert.deepEqual(Object.fromEntries(emptyString), {});
    });
    it('a single-space string, throws', () => {
      //// const singleSpace = '';
      const singleSpace = ' ';
      assert.throws(() => Object.fromEntries(singleSpace), TypeError);
    });
    describe('not symetric to `Object.entries()`', () => {
      it('allows Symbols as keys, while `Object.entries()` does not report them', () => {
        const sym = Symbol();
        const fromEntries = Object.fromEntries([[sym, 42]]);
        //// const entries = [sym, 42];
        const entries = [];

        assert.deepEqual(fromEntries, {[sym]: 42});
        assert.deepEqual(Object.entries(fromEntries), entries);
      });
    });
  });
});
