// ES10 - ??: String - matchAll
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('"".matchAll() returns all results matching a regular expression', () => {
    it('finds all matches in a string without capture groups', () => {
        const str = 'test';
        const regexp = /test/g;
        const array = [...str.matchAll(regexp)];
        assert.deepEqual([...array[0]], ['test']);
    });
    it('returns an iterator (having a function `next()`)', () => {
        const str = 'test';
        const regexp = /test/g;
        const iter = str.matchAll(regexp);
        assert.equal(typeof iter.next, 'function');
    });

    describe('returns an iterator', () => {
        it('', () => {
            // iterator in depth here or not????
        });
    });
    
    describe('returns an Array with custom properties', () => {
        const matchAll = () => {
            const str = 'test';
            const regexp = /test/g;
            const iter = str.matchAll(regexp);
            const {value} = iter.next();
            return value;
        };
        it('it is an array', () => {
            assert(Array.isArray(matchAll()));
        });
        it('but it is not a pure array', () => {
            assert.notDeepEqual(matchAll(), ['test']);
        });
        it('it must be converted to be a pure array (without custom properties)', () => {
            assert.deepEqual(Array.from(matchAll()), ['test']);
        });
        it('one property is `groups`', () => {
            assert(matchAll().hasOwnProperty('groups'));
        });
        it('another property is `index`, which is the position of the first capture group', () => {
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