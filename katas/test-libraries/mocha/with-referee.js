describe('mocha+expect API description (using referee)', function() {
  
  it('simple values equal?', () => {expect('one').toBe('one')});
  it('simple values doesnt equal?', () => {expect('one').not.toBe('two')});
  it('`toBe` compares strictly', () => {expect(1).not.toBe('1');});
  
  it('value is truthy', () => {expect(true).toBeTruthy()});
  it('value is falsy', () => {expect(false).toBeFalsy()});

  it('complex types equal?', () => {expect([1,2,3]).toEqual([1,2,3])});
  it('complex types dont equal?', () => {expect([1,2,3]).not.toEqual(['one', 'two']);});
  
  it('throws?', () => {expect(() => { throw new Error() }).toThrow()});
  
  describe('specific asserts', function(){
    it('array', () => {expect([]).toBeArray()});
    it('array like', () => {expect(arguments).toBeArrayLike()});
    it('boolean', () => {expect(false).toBeBoolean()});
    it('close to', () => {
      let howClose = 1;
      expect(41).toBeCloseTo(42, howClose);
    });
    it('greater than', () => {expect(1).toBeGreaterThan(0)});
    it('less than', () => {expect(1).toBeLessThan(2)});
    // and there are a couple more ...
  });
});
