# 4. In-depth katas are separated from "normal" katas

## Status

Accepted

## Context

I (Wolfram) am writing most of the katas and slowly I see a pattern arising in how I write them and also of which depth
I want them to be. Lately some things made me think about in-depth versions of katas.
One was writing the ES10 `Object.fromEntries()` kata. Writing this kata took me more than a week, every evening
figuring out certain details of the spec and how to transport those into a kata. This made me realize that
this kata has become too complex to get just a feeling for how `Object.fromEntries()` works, and it also made
me realize that I want this depth because I don't want to write any kata that states wrong things.
But this kata has simply become too big and too detailed.
Discussing this at #jscc19 and also at the #jslang meetup, I realized that people would appreciate a simple
introductory kata, which allows one to learn the feature (superficically) and have an in-depth or expert kata,
which covers all specifics that might be described in the spec.

## Decision

Katas might come in two flavours, the simple kata and the in-depth kata.
In case of the above described `Object.fromEntries()` kata these two katas will be:
- stored in `es10/language/object-api/fromEntries.js` and `es10/language/object-api/fromEntries-in-depth.js`
- they are two separate katas, with separate metadata, etc.

The simple kata serves the purpose of understanding and being able to use the functionality/API.
The in-depth kata covers things like how does this functionality behave with edge cases, type coercion, using
the function directly from it's prototype and alike things.

## Consequences

There will be more katas.
The simple katas will be easier to solve and stay with an reduced complexity but allow one to learn the feature.
 