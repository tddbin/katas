import {
  assertThat, equalTo, not, strictlyEqualTo,
  undefined as undefined_, // import it as `undefined_` so it does NOT clash with JS's `undefined` value
  undef,
  Matcher,
} from 'hamjest';

describe('The matcher `undefined()`, matches just `undefined`', () => {
  it('can also be written as `undef()`', () => {
    assertThat(undefined_, strictlyEqualTo(undef));
  });
  describe('which is', () => {
    it('`undefined` itself', () => {
      assertThat(undefined, undefined_());
    });
    it('`void 0`', () => {
      assertThat(void 0, undefined_());
    });
    it('the default return value of a function without a return', () => {
      const fn = () => {};
      assertThat(fn(), undefined_());
    });
  });
  describe('but not, anything that is defined, for example', () => {
    it('the number 0', () => {
      assertThat(0, not(undefined_()));
    });
    it('an object', () => {
      assertThat({}, not(undefined_()));
    });
    it('just about anything', () => {
      assertThat(Math.PI, not(undefined_()));
      assertThat(Number.MAX_SAFE_INTEGER, not(undefined_()));
      assertThat(new Array(3), not(undefined_()));
    });
  });

  it('and returns a hamjest matcher', () => {
    const value = undefined_();
    assertThat('Expected to get a hamjest Matcher.', Matcher.isMatcher(value), equalTo(true));
  });
});

