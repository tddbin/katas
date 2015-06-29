// 57: Default parameters - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('default parameters make function parameters more flexible', () => {

  it('define it using an assignment to the parameter `function(param=1){}`', function() {
    let number = (int=0) => int;
    
    assert.equal(number(), 0);
  });

  it('it is used when undefined is passed', function() {
    let number = (int = 23) => int;
    
    assert.equal(number(void 0), 23);
  });

  it('it is not used when a value is given', function() {
    function xhr(method='GET') {
      return method;  
    }
    
    assert.equal(xhr('POST'), 'POST');
  });

  it('it is evaluated at run time', function() {
    let defaultValue;
    function xhr(method = `value: ${defaultValue}`) {
      return method;  
    }
    
    defaultValue = 42;
    assert.equal(xhr(), 'value: 42');
  });

  it('it can also be a function', function() {
    let defaultValue = () => 23;
    function fn(value = defaultValue()) {
      return value;  
    }
    
    assert.equal(fn(), defaultValue());
  });
  
});