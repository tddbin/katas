// ES1 - 8: Unary + Operator
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Unary "+" operator', () => {
  it('converts its operand to the Number type', () => {
    assert.strictEqual(+'42', Number(42));
  });

  describe('GIVEN simple operands', () => {
    describe('WHEN the operand is a string', () => {
      it('AND its not numeric THEN it converts to `NaN`', () => {
        assert.strictEqual(+'not a number', NaN);
      });
      it('AND even when it starts with a number THEN it converts to `NaN`', () => {
        assert.strictEqual(+'123 ~!@#$%', NaN);
      });

      it('AND it is the word "Infinity" THEN it returns `Infinity`', () => {
        assert.strictEqual(+'Infinity', Infinity);
      });
      it('AND it is a "-" and the word "Infinity" THEN it returns `-Infinity`', () => {
        assert.strictEqual(+'-Infinity', -Infinity);
      });
      it('AND it is "+0" THEN it does NOT return `-0`', () => {
        assert.notStrictEqual(+'+0', -0);
      });
      it('AND it starts with a decimal point THEN it converts the string to the according number', () => {
        assert.strictEqual(+'.42', 0.42);
      });
      it('AND it contains an exponential value THEN it converts it to the according number', () => {
        assert.strictEqual(+'.1e42', 0.1e42);
      });
      it('AND it starts with a hexadecimal number THEN it returns the according decimal number', () => {
        assert.strictEqual(+'0xF', 15);
      });
      it('AND it is an exponential number THEN it returns it as type Number', () => {
        assert.strictEqual(+'1e123', 1e123);
      });

      // any kinda spaces around if
      it('AND it has any kind of spaces surrounding it THEN those are ignored and the number is returned', () => {
        assert.strictEqual(+' \n 1e123 \t', +1e123);
      });
    });

    it('converting `undefined` returns `NaN`', () => {
      assert.strictEqual(+undefined, NaN);
    });
    it('converting `null` returns `+0`', () => {
      assert.strictEqual(+null, +0);
    });
    it('converting `true` returns 1', () => {
      assert.strictEqual(+true, 1);
    });
    it('converting `false` returns `+0`', () => {
      assert.strictEqual(+false, +0);
    });
    it('converting `false` does NOT return `-0`', () => {
      assert.notStrictEqual(+false, -0);
    });
    it('a number does NOT get converted', () => {
      assert.strictEqual(+42, 42);
    });
  });

  describe('GIVEN complex operands', () => {
    describe('WHEN the operand is an object', () => {
      it('AND its an empty object literal THEN it converts to `NaN`', () => {
        assert.strictEqual(+{}, NaN);
      });
      it('AND it has one prop `{x: 0}` THEN it converts to `NaN`', () => {
        assert.strictEqual(+{x: 0}, NaN);
      });

      it('AND its and empty class THEN it converts to `NaN`', () => {
        assert.strictEqual(+new class{}, NaN);
      });
      it('AND its a class with a `valueOf` method THEN its result is used', () => {
        assert.strictEqual(+new class{valueOf = () => 42}, 42);
      });
      it('AND its a class with a `toString` method THEN its result is used', () => {
        assert.strictEqual(+new class{toString = () => '23'}, 23);
      });
      it('AND its a class with `valueOf()` and `toString()` THEN `valueOf`s value is used', () => {
        assert.strictEqual(+new class{toString = () => '23'; valueOf = () => 42}, 42);
      });
    });

    it('WHEN the operand is an array THEN its string`s value is returned as number', () => {
      assert.strictEqual(+[1], 1)
    });
    it('WHEN the operand is a Date THEN the unix timestamp is returned', () => {
      assert.strictEqual(+new Date(2000, 0, 1), 946684800000)
    });
  });
});
