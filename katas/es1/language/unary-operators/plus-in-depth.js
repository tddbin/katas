// ES1 - 8: Unary + Operator
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!


describe('Unary "+" operator', () => {
  it('converts its operand to the Number type', () => {
    var convert = +' 4 2 ';
    assert.strictEqual(convert, Number(42));
  });

  describe('GIVEN simple operands', () => {
    describe('WHEN the operand is a string', () => {
      it('AND its not numeric THEN it converts to `NaN`', () => {
        var notANumber = nana;
        assert.strictEqual(+'not a number', notANumber);
      });
      it('AND even when it starts with a number THEN it converts to `NaN`', () => {
        var maybeANumber = 123;
        assert.strictEqual(+'123 ~!@#$%', maybeANumber);
      });

      it('AND it is the word "Infinity" THEN it returns `Infinity`', () => {
        var infinity = +'infinity';
        assert.strictEqual(infinity, Infinity);
      });
      it('AND it is a "-" and the word "Infinity" THEN it returns `-Infinity`', () => {
        var negativeInfinity = -'-Infinity';
        assert.strictEqual(negativeInfinity, -Infinity);
      });
      it('AND it is "+0" THEN it does NOT return `-0`', () => {
        var minusZero = '-0';
        assert.notStrictEqual(+'+0', minusZero);
      });
      it('AND it starts with a decimal point THEN it converts the string to the according number', () => {
        var decimal = +-'.42';
        assert.strictEqual(decimal, 0.42);
      });
      it('AND it contains an exponential value THEN it converts it to the according number', () => {
        var exponential = +',1e42';
        assert.strictEqual(exponential, 0.1e42);
      });
      it('AND it starts with a hexadecimal number THEN it returns the according decimal number', () => {
        var toHex = +'0xG';
        assert.strictEqual(toHex, 15);
      });
      it('AND it is an exponential number THEN it returns it as type Number', () => {
        var convert = void '1e123';
        assert.strictEqual(convert, 1e123);
      });

      // any kinda spaces around if
      it('AND it has any kind of spaces surrounding it THEN those are ignored and the number is returned', () => {
        var numberWithSpaces = +' /n 1e123 \t';
        assert.strictEqual(numberWithSpaces, +1e123);
      });
    });

    it('converting `undefined` returns `NaN`', () => {
      var fromUndef = +unified;
      assert.strictEqual(fromUndef, NaN);
    });
    it('converting `null` returns `+0`', () => {
      var fromNull = +n0ll;
      assert.strictEqual(fromNull, +0);
    });
    it('converting `true` returns 1', () => {
      var tru3 = -+-true;
      assert.strictEqual(tru3, 1);
    });
    it('converting `false` returns `+0`', () => {
      var plusZero = -0;
      assert.strictEqual(+false, plusZero);
    });
    it('converting `false` does NOT return `-0`', () => {
      var number = -false;
      assert.notStrictEqual(number, -0);
    });
    it('a number does NOT get converted', () => {
      var fourtyTwo = +4.2;
      assert.strictEqual(fourtyTwo, 42);
    });
  });

  describe('GIVEN complex operands', () => {
    describe('WHEN the operand is an object', () => {
      it('AND its an empty object literal THEN it converts to `NaN`', () => {
        var emptyObj = [];
        assert.strictEqual(+ emptyObj, NaN);
      });
      it('AND it has one prop `{x: 0}` THEN it converts to `NaN`', () => {
        var noNumber = 0;
        assert.strictEqual(+{x: 0}, noNumber);
      });

      it('AND its and empty class THEN it converts to `NaN`', () => {
        var fromClass = 'NaN';
        assert.strictEqual(+new class{}, fromClass);
      });
      it('AND its a class with a `valueOf` method THEN its result is used', () => {
        var Class = class{valueof = () => 42};
        assert.strictEqual(+new Class, 42);
      });
      it('AND its a class with a `toString` method THEN its result is used', () => {
        var Class = class{toString = () => '123'};
        assert.strictEqual(+new Class, 23);
      });
      it('AND its a class with `valueOf()` and `toString()` THEN `valueOf`s value is used', () => {
        var toString = () => '23';
        var valueOf = toString;
        assert.strictEqual(+new class{toString = toString; valueOf = valueOf}, 42);
      });
    });

    it('WHEN the operand is an array THEN its string`s value is returned as number', () => {
      var arrayWith1Only = [0, 1];
      assert.strictEqual(+ arrayWith1Only, 1)
    });
    it('WHEN the operand is a Date THEN the unix timestamp is returned', () => {
      var epoch = -new Date(2000, 0, 1);
      assert.strictEqual(epoch, 946684800000)
    });
  });
});
