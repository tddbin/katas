import {
  assertThat, equalTo,
  containsString, throws, returns,
} from 'hamjest';

describe('General matchers', () => {
  describe('`equalTo()`, matches equality', () => {
    // Performs a deep comparison between the given and the tested value. See _.isEqual for details.
    // __.assertThat(25, __.equalTo(25)); // Passes
    // __.assertThat(['A', 'B'], __.equalTo(['A', 'B'])); // Passes
    // __.assertThat({some: 'value'}, __.equalTo({some: 'value'})); // Passes

    it('', () => {
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