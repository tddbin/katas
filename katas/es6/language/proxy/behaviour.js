// 49: Proxy - behaviour
// To do: make all tests pass, leave the assert lines unchanged!

describe('handler has traps', function() {

	describe('traps are the operations defined on the handler object', function() {
	  	it('is called when the handler implements it', function() {
	  		let target = {
	  			foo: 987
	  		};

			let handler = {
			    get(target, propKey, receiver) {
			        return 123;
			    }
			};

			let proxy = new Proxy(target, handler);

	  		assert.equal(proxy.foo, 123);
	  	});

	  	it('is not called when the handler does not implement it but target works as a fallback', function() {
	  		let target = {
	  			foo: 987
	  		};

			let handler = {
			    has(target, propKey, receiver) {
			        return true;
			    }
			};

			let proxy = new Proxy(target, handler);

			assert.equal(proxy.foo, 987);
	  	});
  	});
});

describe('target object is the aimed object to be intercepted', function() {

	it ('target property is not called when a trap intercepts its opertion', function() {
		var counter = (function() {
			var that = {};
			that.value = 0;

			that.increments = function() {
			that.value = that.value + 1;  					
			}

			return that;
		})();

		let handler = {
		    apply(target, propKey, receiver) {
		        return 999;
		    }
		};

		let proxyIncrement = new Proxy(counter.increments, handler);

		assert.equal(proxyIncrement(), 999);
  		assert.equal(counter.value, 0);
	});

	it ('must be done manually', function() {
		var counter = (function() {
			var that = {};
			that.value = 0;

			that.increments = function() {
				that.value = that.value + 1;  					
			}

			return that;
		})();

		let handler = {
		    apply(target, propKey, receiver) {
		    	target();
		        return 999;
		    }
		};

		let proxyIncrement = new Proxy(counter.increments, handler);

		assert.equal(proxyIncrement(), 999);
  		assert.equal(counter.value, 1);
	});
});