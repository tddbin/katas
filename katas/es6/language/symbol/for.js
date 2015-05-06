// 35: Symbol.for - retreives or creates a runtime-wide symbol
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Symbol.for` for registering Symbols globally', function() {
  
  it('creates a new symbol', function() {
    const sym = Symbol.for('symbol name');
    assert.equal(typeof sym, 'symbol');
  });
  
  it('stores the symbol in a runtime-wide registry and retreives it from it', function() {
    const sym = Symbol.for('new symbol');
    const sym1 = Symbol.for('new symbol');
    assert.equal(sym, sym1);
  });
  
  it('is different to `Symbol()` which creates a symbol every time and does not store it', function() {
    const symFor = Symbol.for('new symbol');
    const sym = Symbol('new symbol');
    assert.notEqual(symFor, sym);
  });
  
  describe('`.toString()` on a Symbol', function() {
    
    const newSymbol = Symbol('new symbol');
    const symbolFromRegistry = Symbol.for('new symbol');
    
    it('also contains the key given to `Symbol.for()`', function() {
      const description = newSymbol.toString();
      assert.equal(description, 'Symbol(new symbol)');
    });
  
    describe('NOTE: the description of two different symbols', function() {
      it('might be the same', function() {
        const newDescription = newSymbol.toString();
        const fromRegistryDescription = symbolFromRegistry.toString();
        
        assert.equal(newDescription, fromRegistryDescription);
      });
      
      it('but the symbols are not the same!', function() {
        assert.notEqual(newSymbol, symbolFromRegistry);
      });
    });    
  });
  
});
