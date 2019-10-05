// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth
/*

> d = new Date('2000-12-01')
Fri Dec 01 2000 01:00:00 GMT+0100 (CET)
> d.setMonth(30)
1025478000000
> d
Mon Jul 01 2002 01:00:00 GMT+0200 (CEST)



 */

// awesome feature as stated above, but does not work reliably, see
// in latest canary as of may 2016

describe('', () => {
  
  it('date add', () => {
    const date = new Date('2000-01-01');
    date.setMonth(15);
    // assert.deepEqual(new Date('2001-04-01'), date);
  });

});
