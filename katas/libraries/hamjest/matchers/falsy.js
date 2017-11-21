import {
  assertThat, equalTo, not, strictlyEqualTo,
  falsy, falsey,
  Matcher,
} from 'hamjest';

describe('The matcher `falsy()`, matches every falsy value', () => {
  it('can also be written as `falsey()`', () => {
    assertThat(falsy, strictlyEqualTo(falsey));
  });
  describe('for example', () => {
    it('`undefined`', () => {
      assertThat(undefined, falsy());
    });
    it('`null`', () => {
      assertThat(null, falsy());
    });
    it('the number 0', () => {
      assertThat(0, falsy());
    });
    it('an empty string', () => {
      assertThat('', falsy());
    });
  });
  describe('but not', () => {
    it('an empty object', () => {
      assertThat({}, not(falsy()));
    });
    it('an empty array', () => {
      assertThat([], not(falsy()));
    });
    it('any number', () => {
      assertThat(42, not(falsy()));
    });
    it('an object', () => {
      assertThat({any: 'object'}, not(falsy()));
    });
    it('an `Array`', () => {
      assertThat(Array, not(falsy()));
    });
    it('just about anything', () => {
      assertThat(Math.PI, not(falsy()));
      assertThat(Number.MAX_SAFE_INTEGER, not(falsy()));
      assertThat(new Array(3), not(falsy()));
    });
  });

  it('and returns a hamjest matcher', () => {
    const value = falsy();
    assertThat('Expected to get a hamjest Matcher.', Matcher.isMatcher(value), equalTo(true));
  });
});

