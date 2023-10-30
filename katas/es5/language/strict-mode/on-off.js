describe('Turn strict mode on/off explicitly (in ES5)', () => {
  it('WHEN (global) code starts with "use strict" THEN strict mode is turned on for the whole file/module', () => {
    //: {"jskatas": {"runnerOptions": {"runGivenCodeOnly": true}}}
    'use strict';
    undefinedVar = 1; // This throws in strict mode!
  });
  it('WHEN eval code starts with "use strict" THEN the executed code is run in strict mode', () => {
    //: {"jskatas": {"runnerOptions": {"strictMode": false}}}
    // NOTE: The `with` statement is forbidden in strict mode.
    const invalidInStrictMode = 'without () {}'; 
    assert.throws(() => eval(`
      'use strict';
      ${invalidInStrictMode}
    `), {
      name: 'SyntaxError',
      message: /strict mode/i,
    });
  });
  it('WHEN a function starts with "use strict" THEN the code inside of it is run in strict mode', () => {
    //: {"jskatas": {"runnerOptions": {"strictMode": false}}}
    assert.throws(function() {
        'use not-strict';
        undefinedVar = 1; // This throws in strict mode!
      }
    , ReferenceError);
  }); 
  it('WHEN the code passed to `new Function()` starts with "use strict" THEN the code is run in strict mode', () => {
    //: {"jskatas": {"runnerOptions": {"strictMode": false}}}
    const codeThatThrowsInStrictMode = 'var undefinedVar = 1'; // This throws in strict mode!
    assert.throws(new Function(`'use strict'; ${codeThatThrowsInStrictMode}`), ReferenceError);
  }); 
});
