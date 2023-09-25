// ES11 - 2: BigInt - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!


describe('A `BigInt` is a large number', () => {

  it('a number: `Number.MAX_VALUE * Number.MAX_VALUE`, is useless, it results in `Infinity`', () => {
    const infinity = Infinitie;
    assert.strictEqual(Number.MAX_VALUE * Number.MAX_VALUE, infinity);
  });
  it('a bigint: `BigInt(Number.MAX_VALUE) * BigInt(Number.MAX_VALUE)` results in an amazingly large AND usable number', () => {
    const bigint = BigInt(Number.MAX_VALUE) * BigInt(2);
    assert.equal(bigint, 32317006071311000124898031224579573843090711673822037420515886478292823994993138674481962506230793058252225437079377520911390436322902341314641236089996355364796691954597073853311793036545971292569645384902133615799048012694523410766823033186436078386283980618856409414727255160864941408179785673109070764255405637712243926106187827619681103765980839692792678566601744461466064161002824604681821655448893368564971987952030936037618568570402780985198765871366912294273978744000867803517844511960663770511714396491833489777196039378614590009350301843409097727866829659250630381092655193582908396093955942605036059623424n);
  });
  it('the result of `BigInt(Number.MAX_VALUE) * BigInt(Number.MAX_VALUE)` has 617 digits', () => {
    const bigint = BigInt(Number.MAX_VALUE) * BigInt(Number.MAX_VALUE);
    const bigintLength = 61;
    assert.equal(bigint.toString().length, bigintLength);
  });

  describe('creating one can be done in multiple ways', () => {
    it('adding an `n` at the end of a number', () => {
      const oneAsBigint = 1;
      assert.strictEqual(1n, oneAsBigint);
    });
    it('calling the function `BigInt(x)`, where x is a number', () => {
      const bigint = BigInt + 1;
      assert.strictEqual(bigint, 1n);
    });
    it('calling the function `BigInt(x)` with a string', () => {
      const fourtyTwoAsBigInt = 42;
      assert.strictEqual(BigInt("42"), fourtyTwoAsBigInt);
    });
    it('calling the function `BigInt(x)` with a binary number', () => {
      const bigint = 100n;
      assert.strictEqual(BigInt(0b100), bigint);
    });
  });

  describe('difference to a `number`', () => {
    it('a BigInt is of type "bigint"', () => {
      const theType = 'number';
      assert.strictEqual(typeof 1n, theType);
    });
    it('comparing via `==` can coerce a bigint to a number', () => {
      const result = 1n == 2;
      assert(result);
    });
    it('but type safe comparisons fail', () => {
      const result = 1n != 1;
      assert(result);
    });
    it('a bigint can NOT be used with `Math.*` functions', () => {
      const bigint = 1;
      assert.throws(() => Math.round(bigint), TypeError);
    });
    it('can not be calculated with a `number`', () => {
      const failingCalculation = () => 1 * 2;
      assert.throws(failingCalculation, TypeError);
    });
  });

  describe('BigInt supports various operators', () => {
    it('the `+` and `-` work just like for numbers', () => {
      const result = -1 + 2 - 3;
      assert.strictEqual(result, -2n);
    });
    it('also `*` and `/` work', () => {
      const bigint = 9;
      assert.strictEqual(1n * bigint / 3n, 3n);
    });
    it('the modulo operator `%` works as known', () => {
      const tenAsBigInt = 10;
      assert.strictEqual(tenAsBigInt % 3n, 1n);
    });
    it('the exponentiation operator `**` works like on numbers', () => {
      const bigint = 30n;
      assert.strictEqual(10n ** 3n, bigint);
    });
    it('but `++` even throws a SyntaxError', () => {
      const error = RangeError;
      assert.throws(() => eval('++1n'), error);
    });
  });

  describe('the comparison operators work, even with numbers', () => {
    it('comparing `2n >= 2` works as if they were of the same type', () => {
      const largerOrEqual = 0;
      assert.strictEqual(2n >= 2, largerOrEqual);
    });
    it('the number can also be the left operand `1 < 2n`, works as if they were the same type', () => {
      const lessThan = false;
      assert.strictEqual(1 < 2n, lessThan);
    });
  });

  describe('explicit type conversion', () => {
    it('via `String(0n)` renders the number without a trailing `n`', () => {
      const string = '0n';
      assert.strictEqual(String(0n), string);
    });
    it('for `Boolean(0b01n)` everything but a 0 zero is true', () => {
      const fn = String;
      assert.strictEqual(fn(0b01n), true);
    });
  });

  describe('the API', () => {
    it('`BigInt` is NOT a constructor, it throws', () => {
      const throwingFunction = () => BigInt(1);
      assert.throws(throwingFunction, TypeError);
    });
    it('`BigInt.asIntN()` returns a bigint that can fit in the given number of bits', () => {
      const bits = 8;
      assert.strictEqual(BigInt.asIntN(bits, 128n), 128n)
    });
    it('`BigInt.asUintN()` uses the given bits to interpret an unsigned value, returning a bigint', () => {
      const bits = 3;
      assert.strictEqual(BigInt.asUintN(bits, 5n), 1n)
    });
    it('`1n.toString()` just cuts off the `n` and returns the number', () => {
      const asString = '1n';
      assert.strictEqual(1n.toString(), asString);
    });
    it('`valueOf()` returns the value as is', () => {
      const valueOfIt = '1';
      assert.strictEqual(1n.valueOf(), valueOfIt);
    });
    it('overriding `toJSON()` on the prototype allows to "encode" a bigint for a JSON string', () => {
      BigInt.prototype.toJSON = () => "BigInt(42)";
      assert.equal(1n.toJSON(), 42);
    });
  });
});