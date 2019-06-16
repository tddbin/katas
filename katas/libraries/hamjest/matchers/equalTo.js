// 2: equalTo
// To do: make all tests pass, leave the assert lines unchanged!

import {
  assertThat, equalTo, not,
  Matcher,
} from 'hamjest';

describe('The matcher `equalTo()`, matches equality', () => {
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
    it('empty array', () =>
      assertThat([], equalTo([])));
    it('empty Array()', () =>
      assertThat(new Array(3), equalTo([undefined, undefined, undefined])));

    it('empty object', () =>
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
    it('another instance of a class (not so `strictlyEqualTo()`)', () => {
      class X {}
      const instance = new X();
      assertThat(instance, equalTo(new X()));
    });
  });
  describe('deep compares', () => {
    describe('two different arrays', () => {
      it('successfully, WHEN both have the same values', () =>
        assertThat([1, 2, 3], equalTo([1, 2, 3])));
      it('NOT successfully, WHEN the values differ', () =>
        assertThat(['x', 'y', 'z'], not(equalTo([1, 2, 3]))));
    });
    it('successfully, WHEN it`s the same array', () => {
      const arr = [1, 2, 3];
      assertThat(arr, equalTo(arr))
    });

    describe('two different objects', () => {
      it('successfully, WHEN both have the same values', () =>
        assertThat({attr: 'value'}, equalTo({attr: 'value'})));
      it('NOT successfully, WHEN the values differ', () =>
        assertThat({one: 'two'}, not(equalTo({attr: 'value'}))));
    });
    it('successfully, WHEN it`s the same object', () => {
      const obj = {attr: 'value'};
      assertThat(obj, equalTo(obj))
    });
  });

  it('and returns a hamjest matcher', () => {
    const value = equalTo();
    assertThat('Expected to get a hamjest Matcher.', Matcher.isMatcher(value), equalTo(true));
  });
});
