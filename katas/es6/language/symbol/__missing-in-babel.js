// should fail but doesnt yet in babel
  it('extends Symbol works, but call super() causes exception', function(){
    class MySymbol extends Symbol {
      constructor() {
        super();
      }
    }
    assert.throws(function(){ new MySymbol(); });
  });
