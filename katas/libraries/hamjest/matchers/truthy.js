import {
  assertThat, equalTo, not,
  truthy,
  Matcher,
} from 'hamjest';

describe('The matcher `truthy()`, matches every truthy value', () => {
  describe('for example', () => {
    it('any number', () => {
      assertThat(42, truthy());
    });
    it('any non-empty string', () => {
      assertThat('42', truthy());
    });
    it('an object', () => {
      assertThat({any: 'object'}, truthy());
    });
    it('a `Symbol`', () => {
      assertThat(Symbol, truthy());
    });
    it('even an empty object', () => {
      assertThat({}, truthy());
    });
    it('even an empty array', () => {
      assertThat([], truthy());
    });
    it('just about anything', () => {
      assertThat(Math.PI, truthy());
      assertThat(Number.MAX_SAFE_INTEGER, truthy());
      assertThat(new Array(3), truthy());
    });
  });
  describe('but not', () => {
    it('`undefined`', () => {
      assertThat(undefined, not(truthy()));
    });
    it('`null`', () => {
      assertThat(null, not(truthy()));
    });
    it('the number 0', () => {
      assertThat(0, not(truthy()));
    });
    it('an empty string', () => {
      assertThat('', not(truthy()));
    });
  });

  it('and returns a hamjest matcher', () => {
    const value = truthy();
    assertThat('Expected to get a hamjest Matcher.', Matcher.isMatcher(value), equalTo(true));
  });
});

