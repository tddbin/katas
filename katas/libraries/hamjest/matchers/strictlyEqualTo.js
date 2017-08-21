import {
  assertThat, equalTo, not,
} from 'hamjest';

describe('Most common matchers', () => {
  describe('`equalTo()`, matches equality', () => {
    describe('for simple types', () => {
      it('`null`', () =>
        assertThat(null, equalTo(null)));
      it('`undefined`', () =>
        assertThat(undefined, equalTo(undefined)));

      it('a (integer) number', () =>
        assertThat(1, equalTo(1)));
      it('a (decimal) number', () =>
        assertThat(1.23, equalTo(1.23)));
      it('a number and a `Number(x)`', () =>
        assertThat(1, equalTo(Number(1))));

      it('a string', () =>
        assertThat('a string', equalTo('a string')));
      it('a string and a String(x)', () =>
        assertThat('a string', equalTo(String('a string'))));

      it('`NaN`', () =>
        assertThat(NaN, equalTo(NaN)));
    });
    describe('for complex types', () => {
      it('empty []', () =>
        assertThat([], equalTo([])));
      it('empty Array()', () =>
        assertThat(new Array(3), equalTo([undefined, undefined, undefined])));
      it('empty {}', () =>
        assertThat({}, equalTo({})));
      it('empty Object()', () =>
        assertThat(new Object(), equalTo({})));
      it('function', () => {
        const fn = () => {};
        assertThat(fn, equalTo(fn));
      });
      it('class', () => {
        class X {}
        assertThat(X, equalTo(X));
      });
      it('the same instance of a class', () => {
        class X {}
        const instance = new X();
        assertThat(instance, equalTo(instance));
      });
      it('another instance of a class (will fail with `strictlyEqualTo()`)', () => {
        class X {}
        const instance = new X();
        assertThat(instance, equalTo(new X()));
      });
    });
    describe('and does a deep compare', () => {
      it('of an array', () =>
        assertThat([1, 2, 3], equalTo([1, 2, 3])));
      it('fails for differing arrays', () =>
        assertThat([1, 'two', 3], not(equalTo([1, 2, 3]))));
      it('of an object', () =>
        assertThat({attr: 'value'}, equalTo({attr: 'value'})));
      it('fails for differing objects', () =>
        assertThat({no: ''}, not(equalTo({attr: 'value'}))));
    });
  });
  // strictlyEqualTo(value)
  // Performs strict comparison (===) between the given and the tested value:


  describe('`truthy()`, matches truthy values', () => {

  });
  describe('`falsy()` (also `falsey()`), matches falsy values', () => {

  });
  describe('`anything()`, matches any value', () => {
    it('', () => {
      
    });
  });

  // not(valueOrMatcher)
  // Matches if the given matcher fails and vice versa. As usual, if the given value is not a matcher, it is wrapped with equalTo.

  // is(valueOrMatcher)
  // Syntactic sugar for readable code and error descriptions. It wraps a valueOrMatcher and appends "is " to the description.

  // defined()
  // Matches everything except undefined:

  // undefined() / undef()
  // The opposite of defined().

});