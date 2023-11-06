//** tddbin.options.transpileToEs5=true
// 61: modules - import
// To do: make all tests pass, leave the assert lines unchanged!

describe('use `import` to import functions that have been exported (somewhere else)', function() {
  describe('the import statement', function() {
    it('is only allowed on the root level', function() {
      // Try to comment this out, it will yell at you!
      {
        // import assert from 'assert';
      }
    });
    it('import an entire module using `import <name> from "<moduleName>"`', function() {
      //: {"jskatas": {"runnerOptions": {"runGivenCodeOnly": true, "type": "module"}}}
      import assert from 'https://jskatas.org/assert.esm.js';
      const expectedType = '???';
      assert.equal(typeof assert, expectedType);
    });
  });
  describe('import members', function() {
    it('import a single member, using `import {<memberName>} from "module"`', function() {
      //: {"jskatas": {"runnerOptions": {"runGivenCodeOnly": true, "type": "module"}}}
      import assert from 'https://jskatas.org/assert.esm.js';
      import {equal} from 'https://jskatas.org/assert.esm.js';
      assert.strictEqual(equal, assert.equal);
    });
    describe('separate multiple members with a comma', function() {
      it('`deepEqual` from the assert module', () => {
        //: {"jskatas": {"runnerOptions": {"runGivenCodeOnly": true, "type": "module"}}}
        import assert from 'https://jskatas.org/assert.esm.js';
        import {equal, deepEqual} from 'https://jskatas.org/assert.esm.js';
        assert.strictEqual(equal, assert.equal);
        assert.strictEqual(deepEqual, assert.deepEqual);
      });
    });
  });
  describe('alias imports', function() {
    it('using `member as alias` as memberName', function() {
      //: {"jskatas": {"runnerOptions": {"runGivenCodeOnly": true, "type": "module"}}}
      import assert from 'https://jskatas.org/assert.esm.js';
      import {equal as myEqual} from 'https://jskatas.org/assert.esm.js';
      assert.strictEqual(myEqual, assert.equal);
    });
    it('rename the default export of a module, using `default as alias` as memberName', function() {
      //: {"jskatas": {"runnerOptions": {"runGivenCodeOnly": true, "type": "module"}}}
      import assert from 'https://jskatas.org/assert.esm.js';
      import {default as myAssert} from 'https://jskatas.org/assert.esm.js';
      assert.strictEqual(myAssert, assert);
    });
  });
});
