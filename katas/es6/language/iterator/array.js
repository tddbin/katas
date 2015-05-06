// 38: iterator/iterable - string. 
      
it('an array is', function() {
  const arr = [];
  assert.equal(typeof arr[Symbol.iterator], 'function');
});
it('can be looped with for-of', function() {
  const s = 'iterable';
  let letterCount = 0;
  for (let letter of s) {
    letterCount++;
  }
  assert.equal(letterCount, s.length);
});
