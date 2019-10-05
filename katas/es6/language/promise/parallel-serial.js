xdescribe('', () => {

  it('fire in parallel', function() {
    const gps = Promise.resolve();
    const clockIn = Promise.resolve();

    return gps.then(clockIn);
  });

  it('run sequentially', function() {
    let calls = [];
    const gps = () => new Promise((resolve) => {
      setTimeout(() => { calls.push('gps'); resolve(); }, 200);
    });
    const clockIn = () => new Promise((resolve) => {
      setTimeout(() => { calls.push('clockIn'); resolve(); }, 100);
    });

    const startPromiseChainWith = (x) => x();

    return startPromiseChainWith(gps)
      .then(clockIn)
      .then(() => assert.deepEqual(calls, ['gps', 'clockIn']))
    ;
  });

});
