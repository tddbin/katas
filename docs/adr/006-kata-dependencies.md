# 6. Kata Dependencies

## Status

Accepted

## Context

Knowledge to solve a certain kata depends on the knowledge one should have gathered from other katas.
Within one kata-bundle (e.g. "es6/language") this is well defined and can be done already.
How can this be done across all katas in this repo?
E.g. a ES10 kata might require knowledge of something learned in an ES6 kata. To be able to inform the
user about such a learning path the katas should be able to reflect their dependencies throughout the
entire repo.

## Decision

See ES1 kata, where this was done. All katas export the available katas like so:
```js
const buildReferenceForId = id => ({bundle: 'es1/language', id});
export const es1 = {
  'ARRAY_SORT_BASICS': buildReferenceForId(1),
  'ARRAY_SORT_WITH_FUNCTION': buildReferenceForId(2),
  'GLOBAL_PARSEINT': buildReferenceForId(3),
  // ...
};
```
Inside the ES6 katas any kata can be refered to by importing and refering to this exact kata.
```js
// inside es6/language/__raw-metadata__.js
import {es1} from '../../es1/language/__raw-metadata__.js';

const requiresKnowledgeFrom = [es1.GLOBAL_PARSEINT];
```

## Consequences

