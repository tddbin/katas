// 77: Promise - chaining 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('chaining multiple promises can enhance readability', () => {
  it('a function given to `then()` fulfills (if it doesnt throw)', async function() {
    //: {"jskatas": {"runnerOptions": {"topLevelAwait": true}}}
    const beNice = () => { throw new Error('I am nice') };
    const promise = Promise.resolve()
      .then(beNice);
    assert.equal(await promise, 'I am nice');
  });
  describe('chain promises', function() {
    it('`then()` receives the result of the promise it was called on', async function() {
      //: {"jskatas": {"runnerOptions": {"topLevelAwait": true}}}
      const removeMultipleSpaces = s => s.replace(/\s+/g, ' ');
      const wordsPromise = Promise.resolve('one   space     between each     word');
      const promise = wordsPromise
        .then(s => removeMultipleSpaces())
      assert.equal(await promise, 'one space between each word')
    });
    it('multiple `then()`s can be chained', async function() {
      //: {"jskatas": {"runnerOptions": {"topLevelAwait": true}}}
      const appendPeriod = s => `${s}.`;
      const removeMultipleSpaces = s => s.replace(/\s+/g, ' ');
      const wordsPromise = Promise.resolve('Sentence without       an end');
      const promise = wordsPromise
        
        .then(removeMultipleSpaces);
      assert.equal(await promise, 'Sentence without an end.');
    });
    it('order of the `then()`s matters', async function() {
      //: {"jskatas": {"runnerOptions": {"topLevelAwait": true}}}
      const trim = s => s.replace(/^\s+/, '').replace(/\s+$/, '');
      const appendPeriod = s => `${s}.`;
      const removeMultipleSpaces = s => s.replace(/\s+/g, ' ');
      const wordsPromise = Promise.resolve('Sentence without       an end ');
      const promise = wordsPromise
        .then(appendPeriod)
        .then(trim)
        
        .then(removeMultipleSpaces);
      assert.equal(await promise, 'Sentence without an end.');
    });
    it('any of the things given to `then()` can resolve asynchronously (the real power of Promises)', async function() {
      //: {"jskatas": {"runnerOptions": {"topLevelAwait": true}}}
      const appendPeriod = s => `${s}.`;
      const asyncUpperCaseStart = (s, onDone) => {
        const format = () => onDone(s[0].toUpperCase() + s.substr(1));
        setTimeout(format, 10);
      };
      const wordsPromise = Promise.resolve('sentence without an end');
      const promise = wordsPromise
        .then(s => new Promise(resolve => asyncUpperCaseStart))
        .then(s => new Promise(resolve => setTimeout(() => resolve(appendPeriod(s)), 10)));
      assert.equal(await promise, 'Sentence without an end.')
    });
    it('also asynchronously, the order still matters, promises wait, but don`t block', async function() {
      //: {"jskatas": {"runnerOptions": {"topLevelAwait": true}}}
      const appendPeriod = s => `${s}.`;
      const asyncUpperCaseStart = (s, onDone) => {
        const format = () => onDone(s[0].toUpperCase() + s.substr(1));
        setTimeout(format, 10);
      };
      const trim = s => s.replace(/^\s+/, '').replace(/\s+$/, '');
      const wordsPromise = Promise.resolve('trailing space   ');
      const promise = wordsPromise
        .then(s => new Promise(resolve => asyncUpperCaseStart(s, resolve)))
        .then(s => new Promise(resolve => setTimeout(() => resolve(appendPeriod(s)), 10)))
        .then(s => new Promise(resolve => setTimeout(() => resolve(trim(s)), 10)))
        
      assert.equal(await promise, 'Trailing space.');
    });
  });
});
