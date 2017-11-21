import {
  assertThat, strictlyEqualTo, not,
  Matcher,
} from 'hamjest';

describe('The matcher `strictlyEqualTo()`, matches strict equality (like `===`)', () => {
  describe('for simple types', () => {
    it('`null`', () =>
      assertThat(null, strictlyEqualTo(null)));
    it('`undefined`', () =>
      assertThat(undefined, strictlyEqualTo(undefined)));

    it('a (integer) number', () =>
      assertThat(1, strictlyEqualTo(1)));
    it('a (decimal) number', () =>
      assertThat(1.23, strictlyEqualTo(1.23)));
    it('a number and a `Number(x)`', () =>
      assertThat(1, strictlyEqualTo(Number(1))));

    it('a string', () =>
      assertThat('a string', strictlyEqualTo('a string')));
    it('a string and a String(x)', () =>
      assertThat('a string', strictlyEqualTo(String('a string'))));

    it('NOT for `NaN`', () =>
      assertThat(NaN, not(strictlyEqualTo(NaN))));
  });
  describe('for complex types', () => {
    it('the same empty []', () => {
      const emptyArr = [];
      assertThat(emptyArr, strictlyEqualTo(emptyArr));
    });
    it('NOT for comparing any empty array', () => {
      assertThat([], not(strictlyEqualTo([])));
    });

    it('the same empty object', () => {
      const emptyObj = {};
      assertThat(emptyObj, strictlyEqualTo(emptyObj));
    });
    it('NOT for comparing any empty object', () => {
      assertThat([], not(strictlyEqualTo([])));
    });
    it('NOT any empty Object()', () =>
      assertThat(new Object(), not(strictlyEqualTo({}))));

    it('function', () => {
      const fn = () => {};
      assertThat(fn, strictlyEqualTo(fn));
    });
    it('class', () => {
      class X {}
      assertThat(X, strictlyEqualTo(X));
    });
    it('the same instance of a class', () => {
      class X {}
      const instance = new X();
      assertThat(instance, strictlyEqualTo(instance));
    });
    it('NOT for another instance of a class', () => {
      class X {}
      const instance = new X();
      assertThat(instance, not(strictlyEqualTo(new X())));
    });
  });
  describe('deep compares', () => {
    describe('two different arrays', () => {
      it('NOT successfully, WHEN both have the same values', () =>
        assertThat([1, 2, 3], not(strictlyEqualTo([1, 2, 3]))));
      it('NOT successfully, WHEN the values differ', () =>
        assertThat(['x', 'y', 'z'], not(strictlyEqualTo([1, 2, 3]))));
    });
    it('successfully, WHEN it`s the same array', () => {
      const arr = [1, 2, 3];
      assertThat(arr, strictlyEqualTo(arr))
    });

    describe('two different objects', () => {
      it('NOT successfully, WHEN both have the same values', () =>
        assertThat({attr: 'value'}, not(strictlyEqualTo({attr: 'value'}))));
      it('NOT successfully, WHEN the values differ', () =>
        assertThat({one: 'two'}, not(strictlyEqualTo({attr: 'value'}))));
    });
    it('successfully, WHEN it`s the same object', () => {
      const obj = {attr: 'value'};
      assertThat(obj, strictlyEqualTo(obj))
    });
  });

  it('and returns a hamjest matcher', () => {
    const value = strictlyEqualTo();
    assertThat('Expected to get a hamjest Matcher.', Matcher.isMatcher(value), strictlyEqualTo(true));
  });
});
