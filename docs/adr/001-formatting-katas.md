# 1. The Katas follow the here described formatting

## Status

Accepted

## Context

I come back to the katas and my formatting style I currently use has
changed, but it makes no sense to adapt all katas in here every time.
These katas are a long-term thingy, they live for a long time, so this
should be defined and settled once and for all.

## Decision

A kata looks like the following:

```
describe('`Reflect` basics', function() {     // The test description is a proper English sentence, so it starts upper case.
  describe('Reflect is special, it is different to e.g. `Object`', function() {
    it('it`s of type object', function() {
      //// const expectedType = 'not a function!';
      const expectedType = 'object';
      assert.equal(typeof Reflect, expectedType);
    });
  });
});
            // the file ends with an empty line
```

There are no unnecessary spaces and new lines, also not before the assert.
In some rare cases where a new line really helps readability it's ok, but it should
be the exception.
All lines should be as short as possible.
Overall, most important be consistent!

## Consequences

All katas look alike and the users have one UX and not a new one each file.
