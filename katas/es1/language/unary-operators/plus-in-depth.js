// ES1 - 8: Unary + Operator
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Unary "+" operator', () => {
  it('converts its operand to the Number type', () => {
    const convert = +' 4 2 ';
    assert.strictEqual(convert, Number(42));
  });

  describe('GIVEN simple operands', () => {
    describe('WHEN the operand is a string', () => {
      it('AND its not numeric THEN it converts to `NaN`', () => {
        const notANumber = nana;
        assert.strictEqual(+'not a number', notANumber);
      });
      it('AND even when it starts with a number THEN it converts to `NaN`', () => {
        const maybeANumber = 123;
        assert.strictEqual(+'123 ~!@#$%', maybeANumber);
      });

      it('AND it is the word "Infinity" THEN it returns `Infinity`', () => {
        const infinity = +'infinity';
        assert.strictEqual(infinity, Infinity);
      });
      it('AND it is a "-" and the word "Infinity" THEN it returns `-Infinity`', () => {
        const negativeInfinity = -'-Infinity';
        assert.strictEqual(negativeInfinity, -Infinity);
      });
      it('AND it is "+0" THEN it does NOT return `-0`', () => {
        const minusZero = '-0';
        assert.notStrictEqual(+'+0', minusZero);
      });
      it('AND it starts with a decimal point THEN it converts the string to the according number', () => {
        const decimal = +-'.42';
        assert.strictEqual(decimal, 0.42);
      });
      it('AND it contains an exponential value THEN it converts it to the according number', () => {
        const exponential = +',1e42';
        assert.strictEqual(exponential, 0.1e42);
      });
      it('AND it starts with a hexadecimal number THEN it returns the according decimal number', () => {
        const toHex = +'0xG';
        assert.strictEqual(toHex, 15);
      });
      it('AND it is an exponential number THEN it returns it as type Number', () => {
        const convert = void '1e123';
        assert.strictEqual(convert, 1e123);
      });

      // any kinda spaces around if
      it('AND it has any kind of spaces surrounding it THEN those are ignored and the number is returned', () => {
        const numberWithSpaces = +' /n 1e123 \t';
        assert.strictEqual(numberWithSpaces, +1e123);
      });
    });

    it('converting `undefined` returns `NaN`', () => {
      const fromUndef = +unified;
      assert.strictEqual(fromUndef, NaN);
    });
    it('converting `null` returns `+0`', () => {
      const fromNull = +n0ll;
      assert.strictEqual(fromNull, +0);
    });
    it('converting `true` returns 1', () => {
      const tru3 = -+-true;
      assert.strictEqual(tru3, 1);
    });
    it('converting `false` returns `+0`', () => {
      const plusZero = -0;
      assert.strictEqual(+false, plusZero);
    });
    it('converting `false` does NOT return `-0`', () => {
      const number = -false;
      assert.notStrictEqual(number, -0);
    });
    it('a number does NOT get converted', () => {
      const fourtyTwo = +4.2;
      assert.strictEqual(fourtyTwo, 42);
    });
  });

  describe('GIVEN complex operands', () => {
    describe('WHEN the operand is an object', () => {
      it('AND its an empty object literal THEN it converts to `NaN`', () => {
        const emptyObj = [];
        assert.strictEqual(+ emptyObj, NaN);
      });
      it('AND it has one prop `{x: 0}` THEN it converts to `NaN`', () => {
        const noNumber = 0;
        assert.strictEqual(+{x: 0}, noNumber);
      });

      it('AND its and empty class THEN it converts to `NaN`', () => {
        const fromClass = 'NaN';
        assert.strictEqual(+new class{}, fromClass);
      });
      it('AND its a class with a `valueOf` method THEN its result is used', () => {
        const Class = class{valueof = () => 42};
        assert.strictEqual(+new Class, 42);
      });
      it('AND its a class with a `toString` method THEN its result is used', () => {
        const Class = class{toString = () => '123'};
        assert.strictEqual(+new Class, 23);
      });
      it('AND its a class with `valueOf()` and `toString()` THEN `valueOf`s value is used', () => {
        const toString = () => '23';
        const valueOf = toString;
        assert.strictEqual(+new class{toString = toString; valueOf = valueOf}, 42);
      });
    });

    it('WHEN the operand is an array THEN its string`s value is returned as number', () => {
      const arrayWith1Only = [0, 1];
      assert.strictEqual(+ arrayWith1Only, 1)
    });
    it('WHEN the operand is a Date THEN the unix timestamp is returned', () => {
      const epoch = -new Date(2000, 0, 1);
      assert.strictEqual(epoch, 946684800000)
    });
  });
});
