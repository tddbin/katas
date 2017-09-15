import {
  assertThat, equalTo, not,
  defined,
  Matcher,
} from 'hamjest';

describe('The matcher `defined()`, matches everything but `undefined`', () => {
  describe('for example', () => {
    it('any number', () => {
      assertThat(42, defined());
    });
    it('an object', () => {
      assertThat({any: 'object'}, defined());
    });
    it('an `Array`', () => {
      assertThat(Array, defined());
    });
    it('just about anything', () => {
      assertThat(Math.PI, defined());
      assertThat(Number.MAX_SAFE_INTEGER, defined());
      assertThat(0, defined());
      assertThat('', defined());
    });
  });
  describe('but not', () => {
    it('`undefined`', () => {
      assertThat(undefined, not(defined()));
    });
  });

  it('and returns a hamjest matcher', () => {
    const value = defined();
    assertThat('Expected to get a hamjest Matcher.', Matcher.isMatcher(value), equalTo(true));
  });
});

