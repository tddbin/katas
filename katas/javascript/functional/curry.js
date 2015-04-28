let curry = (fn) => undefined;

describe('curry', () => {
  it('transforms a multi-arg function into a sequence of unary functions', () => {
    function add(a, b) {
      return a + b;
    }

    let curriedAdd = curry(add);
    assert.equal(curriedAdd(2)(3), 5);
    assert.equal(curriedAdd(3)(4), 7);
  });

  it('decorates the curried function', () => {
    function add(a, b) {
      return a + b;
    }
    function substract(a, b) {
      return a - b;
    }

    assert.equal(curry(add)(3)(2), 5);
    assert.equal(curry(substract)(3)(2), 1);
  });

  it('resolves when last arg given', () => {
    let k = (arg) => arg;

    let obj = {};
    assert.equal(k(obj), obj);
    assert.equal(curry(k)(obj), obj);
  });


  it('pop one argument form the argument list until args are exhausted', () => {
    function add2(a, b) {
      return a + b;
    }
    function add3(a, b, c) {
      return a + b + c;
    }

    assert.equal(curry(add2)(2)(3), 5);
    assert.equal(curry(add3)(2)(3)(4), 9);
  });
});
