// ES11 - 3: String - matchAll in depth
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('The function `string.matchAll() - in depth`', () => {

  it('matchAll() is lazy', () => {
    // ????
  });

  describe('is intentionally generic, it does not require that its this value be a String object', () => {
    it('pass it an array, it gets casted to a string', () => {
      const results = Array.from(String.prototype.matchAll.bind(['1', '2', '3', '10'])(/1/g));
      assert.deepStrictEqual(results.flat(), ['1', '1']);
    });
    it('an object', () => {
      const results = Array.from(String.prototype.matchAll.bind({})(/OBJECT/gi))
      assert.deepStrictEqual(results.flat(), ['object', 'Object']);
    });
  });

  describe('returns an Array with custom properties', () => {
    it('it is an array', () => {
      const matchAll = () => {
        const str = 'test';
        const regexp = /test/g;
        const iter = str.matchAll(regexp);
        const {value} = iter.next();
        return value;
      };
      assert(Array.isArray(matchAll()));
    });
    it('but it is not a pure array', () => {
      const matchAll = () => {
        const str = 'test';
        const regexp = /test/g;
        const iter = str.matchAll(regexp);
        const {value} = iter.next();
        return value;
      };
      // assert.notDeepEqual(matchAll(), ['test']);
    });
    it('it must be converted to be a pure array (without custom properties)', () => {
      const matchAll = () => {
        const str = 'test';
        const regexp = /test/g;
        const iter = str.matchAll(regexp);
        const {value} = iter.next();
        return value;
      };
      assert.deepEqual(Array.from(matchAll()), ['test']);
    });
    it('one property is `groups`', () => {
      const matchAll = () => {
        const str = 'test';
        const regexp = /test/g;
        const iter = str.matchAll(regexp);
        const {value} = iter.next();
        return value;
      };
      assert(matchAll().hasOwnProperty('groups'));
    });
    it('another property is `index`, which is the position of the first capture group', () => {
      const matchAll = () => {
        const str = 'test';
        const regexp = /test/g;
        const iter = str.matchAll(regexp);
        const {value} = iter.next();
        return value;
      };
      assert.equal(matchAll().index, 0);
    });
    it('another property is `input`, which is the actual string to search in', () => {
      // const {value} = 'test'.matchAll(/test/).next();
      // assert.equal(value.input, 'test');
    });
  });

  it('check all array`s object properties', () => {
    const str = 'test';
    const regexp = /test/g;
    const array = [...str.matchAll(regexp)];
    const expectedArr = ['test'];
    expectedArr.groups = undefined;
    expectedArr.index = 0;
    expectedArr.input = 'test';
    assert.deepEqual(array[0], expectedArr);
  });
  xit('', () => {
    let regexp = /t(e)(st(\d?))/g;
    let str = 'test1test2';

    let array = [...str.matchAll(regexp)];

    assert.deepEqual(array[0], ["test1", "e", "st1", "1"]);
    assert.deepEqual(array[1], ["test2", "e", "st2", "2"]);
  })
});