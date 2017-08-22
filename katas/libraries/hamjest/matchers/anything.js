import {
  assertThat, equalTo,
  anything,
  Matcher,
} from 'hamjest';

describe('The matcher `anything()`, matches any value and never fails', () => {
  describe('for example', () => {
    it('`undefined`', () => {
      assertThat(undefined, anything());
    });
    it('any number', () => {
      assertThat(42, anything());
    });
    it('an object', () => {
      assertThat({any: 'object'}, anything());
    });
    it('an `Array`', () => {
      assertThat(Array, anything());
    });
    it('just anything', () => {
      assertThat(Math.PI, anything());
      assertThat(Number.MAX_SAFE_INTEGER, anything());
      assertThat(0, anything());
      assertThat('', anything());
    });
  });

  it('and returns a hamjest matcher', () => {
    const value = anything();
    assertThat('Expected to get a hamjest Matcher.', Matcher.isMatcher(value), equalTo(true));
  });
});

