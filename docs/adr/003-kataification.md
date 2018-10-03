# 3. Katafication

## Status

Accepted

## Context

All katas in here are supposed to be used to fix failing tests.
The problem with storing failing tests (the katas) in the repo is that there is no
way but fixing them each time to find out if they actually work or the engine
the kata is run on supports a certain feature.

## Decision

All tests have to pass and the special comment `////` marks how to katafy
this test.
For example:
```
      //// const expectedType = 'not a function!';
      const expectedType = 'object';
      assert.equal(typeof Reflect, expectedType);
```
The above test passes. Katafy means uncomment the first line and remove the following line, so
that the code looks like this afterwards:
```
      const expectedType = 'not a function!';
      assert.equal(typeof Reflect, expectedType);
```
Now this test fails, and it can be used as a kata.

## Consequences

The tests can be used as tests and katas. Additionally it can be assured
automatically if a kata would be solvable.
How? Just run the test, that should fail on that platform (e.g. because the
JS engine does not support all features or just an older version of ECMAScript).
If the test passes, the feature is supported. Now katafy the
test and the user can start solving the kata and learn.
