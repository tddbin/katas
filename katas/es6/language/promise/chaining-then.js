// 77: Promise - chaining 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!


describe('chaining multiple promises can enhance readability', () => {
  describe('prerequisites for understanding', function() {
    it('reminder: the test passes when a fulfilled promise is returned', function() {
      return Promise.reject('I should fulfill.');
    });
    it('a function given to `then()` fulfills (if it doesnt throw)', function() {
      const beNice = () => { throw new Error('I am nice') };
      return Promise.resolve()
        .then(beNice)
        .then(niceMessage => assert.equal(niceMessage, 'I am nice'));
    });
  });
  describe('chain promises', function() {
    it('`then()` receives the result of the promise it was called on', function() {
      const removeMultipleSpaces = s => s.replace(/\s+/g, ' ');
      const wordsPromise = Promise.resolve('one   space     between each     word');
      return wordsPromise
        .then(s => removeMultipleSpaces())
        .then(actual => {assert.equal(actual, 'one space between each word')})
      ;
    });
    it('multiple `then()`s can be chained', function() {
      const appendPeriod = s => `${s}.`;
      const removeMultipleSpaces = s => s.replace(/\s+/g, ' ');
      const wordsPromise = Promise.resolve('Sentence without       an end');
      return wordsPromise
        
        .then(removeMultipleSpaces)
        .then(actual => {assert.equal(actual, 'Sentence without an end.')})
      ;
    });
    it('order of the `then()`s matters', function() {
      const trim = s => s.replace(/^\s+/, '').replace(/\s+$/, '');
      const appendPeriod = s => `${s}.`;
      const removeMultipleSpaces = s => s.replace(/\s+/g, ' ');
      const wordsPromise = Promise.resolve('Sentence without       an end ');
      return wordsPromise
        .then(appendPeriod)
        .then(trim)
        
        .then(removeMultipleSpaces)
        .then(actual => {assert.equal(actual, 'Sentence without an end.')})
      ;
    });
    it('any of the things given to `then()` can resolve asynchronously (the real power of Promises)', function() {
      const appendPeriod = s => `${s}.`;
      const asyncUpperCaseStart = (s, onDone) => {
        const format = () => onDone(s[0].toUpperCase() + s.substr(1));
        setTimeout(format, 100);
      };
      const wordsPromise = Promise.resolve('sentence without an end');
      return wordsPromise
        .then(s => new Promise(resolve => asyncUpperCaseStart))
        .then(s => new Promise(resolve => setTimeout(() => resolve(appendPeriod(s)), 100)))
        .then(actual => {assert.equal(actual, 'Sentence without an end.')})
      ;
    });
    it('also asynchronously, the order still matters, promises wait, but don`t block', function() {
      const appendPeriod = s => `${s}.`;
      const asyncUpperCaseStart = (s, onDone) => {
        const format = () => onDone(s[0].toUpperCase() + s.substr(1));
        setTimeout(format, 100);
      };
      const trim = s => s.replace(/^\s+/, '').replace(/\s+$/, '');
      const wordsPromise = Promise.resolve('trailing space   ');
      return wordsPromise
        .then(s => new Promise(resolve => asyncUpperCaseStart(s, resolve)))
        .then(s => new Promise(resolve => setTimeout(() => resolve(appendPeriod(s)), 100)))
        .then(s => new Promise(resolve => setTimeout(() => resolve(trim(s)), 100)))
        
        .then(actual => {assert.equal(actual, 'Trailing space.')})
      ;
    });
  });
});
