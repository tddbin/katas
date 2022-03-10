// ES11 - 2: BigInt - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('A `BigInt` is a large number', () => {

  it('a number: `Number.MAX_VALUE * Number.MAX_VALUE`, is useless, it results in `Infinity`', () => {
    assert.strictEqual(Number.MAX_VALUE * Number.MAX_VALUE, Infinity);
  });
  it('a bigint: `BigInt(Number.MAX_VALUE) * BigInt(Number.MAX_VALUE)` results in an amazingly large AND usable number', () => {
    assert.equal(BigInt(Number.MAX_VALUE) * BigInt(Number.MAX_VALUE), 32317006071311000124898031224579573843090711673822037420515886478292823994993138674481962506230793058252225437079377520911390436322902341314641236089996355364796691954597073853311793036545971292569645384902133615799048012694523410766823033186436078386283980618856409414727255160864941408179785673109070764255405637712243926106187827619681103765980839692792678566601744461466064161002824604681821655448893368564971987952030936037618568570402780985198765871366912294273978744000867803517844511960663770511714396491833489777196039378614590009350301843409097727866829659250630381092655193582908396093955942605036059623424n);
  });
  it('the result of `BigInt(Number.MAX_VALUE) * BigInt(Number.MAX_VALUE)` has 617 digits', () => {
    const bigint = BigInt(Number.MAX_VALUE) * BigInt(Number.MAX_VALUE);
    assert.equal(bigint.toString().length, 617);
  });

  describe('creating one can be done in multiple ways', () => {
    it('adding an `n` at the end of a number', () => {
      assert.strictEqual(1n, 1n);
    });
    it('calling the function `BigInt(x)`, where x is a number', () => {
      assert.strictEqual(BigInt(1), 1n);
    });
    it('calling the function `BigInt(x)` with a string', () => {
      assert.strictEqual(BigInt("42"), 42n);
    });
    it('calling the function `BigInt(x)` with a binary number', () => {
      assert.strictEqual(BigInt(0b100), 4n);
    });
  });

  describe('difference to a `number`', () => {
    it('a BigInt is of type "bigint"', () => {
      assert.strictEqual(typeof 1n, 'bigint');
    });
    it('comparing via == can coerce a bigint to a number', () => {
      assert(1n == 1);
    });
    it('but type safe comparisons fail', () => {
      assert(1n !== 1);
    });
    it('a bigint can NOT be used with `Math.*` functions', () => {
      assert.throws(() => Math.round(1n), TypeError);
    });
    it('can not be calculated with a `number`', () => {
      assert.throws(() => 1n * 2, TypeError);
    });
  });

  describe('BigInt supports various operators', () => {
    it('the `+` and `-` work just like for numbers', () => {
      assert.strictEqual(-1n + 2n - 3n, -2n);
    });
    it('also `*` and `/` work', () => {
      assert.strictEqual(1n * 9n / 3n, 3n);
    });
    it('the modulo operator `%` works as known', () => {
      assert.strictEqual(10n % 3n, 1n);
    });
    it('the exponentiation operator `**` works like on numbers', () => {
      assert.strictEqual(10n ** 3n, 1000n);
    });
    it('but `++` even throws a SyntaxError', () => {
      assert.throws(() => eval('++1n'), SyntaxError);
    });
  });

  describe('the comparison operators work, even with numbers', () => {
    it('comparing `2n >= 2` works as if they were of the same type', () => {
      assert.strictEqual(2n >= 2, true);
    });
    it('the number can also be the left operand `1 < 2n`, works as if they were the same type', () => {
      assert.strictEqual(1 < 2n, true);
    });
  });

  describe('explicit type conversion', () => {
    it('via `String(0n)` renders the number without a trailing `n`', () => {
      assert.strictEqual(String(0n), '0');
    });
    it('for `Boolean(0b01n)` everything but a 0 zero is true', () => {
      assert.strictEqual(Boolean(0b01n), true);
    });
  });

  describe('the API', () => {
    it('the `BigInt` function tries to make a bigint out of its parameter', () => {
      assert(BigInt(1) === 1n);
    });
    it('`BigInt` is NOT a constructor, it throws', () => {
      assert.throws(() => new BigInt(1), TypeError);
    });
    it('`BigInt.asIntN()` returns a bigint that can fit in the given number of bits', () => {
      const bits = 16;
      assert.strictEqual(BigInt.asIntN(bits, 128n), 128n)
    });
    it('`BigInt.asUintN()` uses the given bits to interpret an unsigned value, returning a bigint', () => {
      const bits = 2;
      assert.strictEqual(BigInt.asUintN(bits, 5n), 1n)
    });
    it('`1n.toString()` just cuts off the `n` and returns the number', () => {
      assert.strictEqual(1n.toString(), '1');
    });
    it('`valueOf()` returns the value as is', () => {
      assert.strictEqual(1n.valueOf(), 1n);
    });
    it('overriding `toJSON()` on the prototype allows to "encode" a bigint for a JSON string', () => {
      BigInt.prototype.toJSON = () => 42;
      assert.equal(1n.toJSON(), 42);
    });
  });
});