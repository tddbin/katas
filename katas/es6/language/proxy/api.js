// 49: Proxy - apis
// To do: make all tests pass, leave the assert lines unchanged!

describe('handler can have different traps', function() {
  	
  	it('"apply" is a trap for a function call', function() {
  		var value = "";

  		let doSomething = function(arg) {
			value = "Yeah! I'm safe!";
		};

  		let doSomethingProxy = new Proxy(doSomething, {
		  	apply(target, thisArg, argumentsList) {
		  		value = "Oh gosh, it's a trap!";
		  	}
		});

		doSomethingProxy();
		assert.equal(value, "Oh gosh, it's a trap!");
  	});

  	it('"construct" is a trap for the "new" operator', function() {
  		var value = "";

  		let DoSomething = function(arg) {
			value = "Yeah! I'm safe!";
		};

  		let DoSomethingProxy = new Proxy(DoSomething, {
		  	construct(target, argumentsList) {
		  		value = "Oh gosh, they got me!";
		  		return target;
		  	}
		});

		var instance = new DoSomethingProxy();
		assert.equal(value, "Oh gosh, they got me!");
  	});

  	it('"defineProperty" is a trap for Object.defineProperty()', function() {});
  	it('"deleteProperty" is a trap for the "delete" operator', function() {});
  	it('"enumerate" is a trap for for...in statements', function() {});
  	it('"get" is a trap for getting a property value', function() {});
  	it('"getOwnPropertyDescriptor"  is a trap for Object.getOwnPropertyDescriptor()', function() {});
  	it('"getPrototypeOf" is a trap for the [[GetPrototypeOf]] internal method', function() {});
  	it('"has" is a trap for the in operator', function() {});
  	it('"isExtensible" is a trap for Object.isExtensible()', function() {});
  	it('"ownKeys" is a trap for Object.getOwnPropertyNames()', function() {});
  	it('"preventExtensions" is a trap for Object.preventExtensions()', function() {});
  	it('"set" is a trap for setting a property value', function() {});
  	it('"setPrototypeOf" is a trap for Object.setPrototypeOf()', function() {});
});