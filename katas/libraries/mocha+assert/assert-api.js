

describe('mocha + assert', () => {

  it('simple values equal?', () => assert.equal('one', 'one'));
  it('simple values doesnt equal?', () => assert.notEqual('one', 'two'));

  it('value is truthy', () => assert.ok(true));

  it('complex types equal?', () => assert.deepEqual([1,2,3], [1,2,3]));
  it('complex types dont equal?', () => assert.notDeepEqual([1,2,3], ['one', 'two']));

  it('value and type equal?', () => assert.strictEqual('1', '1'));
  it('complex types dont equal?', () => assert.notStrictEqual(1, '1'));

  it('throws?', () => assert.throws(() => { throw new Error(); }));
  it('does not throw?', () => assert.doesNotThrow(() => {}));

});