import {
  assertThat, equalTo, not, strictlyEqualTo,
  Matcher,
} from 'hamjest';

describe('The function `not()`, works like an inverted `equalTo()`', () => {
  describe('when given a value', () => {
    describe('for example', () => {
      it('the (integer) numbers 0 and 1', () => {
        assertThat(0, not(1));
        assertThat(0, not(equalTo(1)));
      });
      it('two (decimal) numbers', () => {
        assertThat(1.23, not(3.21));
        assertThat(1.23, not(equalTo(3.21)));
      });
      it('the letters `a` and `A`', () => {
        assertThat('a', not('A'));
        assertThat('a', not(equalTo('A')));
      });
      it('two arrays with different content', () => {
        assertThat([1], not([2]));
        assertThat([1], not(equalTo([2])));
      });
      it('but NOT for two arrays with same content', () => {
        assertThat([1], not(not([1]))); // NOTE the `not(not())`
        assertThat([1], not(not(equalTo([1]))));
      });
      it('two objects with different content', () => {
        assertThat({x: 1}, not({a: 2}));
        assertThat({x: 1}, not(equalTo({a: 2})));
      });
    });
  });
  describe('when given a matcher', () => {
    it('', () => {

    });
  });
  
  it('and returns a hamjest matcher', () => {
    const value = not();
    assertThat('Expected to get a hamjest Matcher.', Matcher.isMatcher(value), equalTo(true));
  });
});

