// 49: Proxy - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('proxies bring intercession to JavaScript', function() {
  	
  	it('is made of handler, traps and target', function() {
  		let target = {};
		let handler = {
			// get is a trap
		    get(target, propKey, receiver) {
		        return 123;
		    }
		};
		let proxy = new Proxy(target, handler);

		assert.equal(proxy.foo, 123);
  	});

	it('can intercept operation on objects such as get and set', function() {
		let target = {};
		let handler = {
		    get(target, propKey, receiver) {
		    	if (propKey === 'foo') {
		    		return 123;
		    	}
		        return target[propKey];
		    },
		    set(target, propKey, value) {
		    	if (propKey === 'age') {
		    		if (!Number.isInteger(value)) {
				        throw new TypeError('The age is not an integer');
				    }
		    	}

		    	target[propKey] = value;
		    	return true;
		    }
		};

		let proxy = new Proxy(target, handler);

		proxy.age = 26;
		assert.equal(proxy.age, 26);
		assert.equal(proxy.foo, 123);
	});
});