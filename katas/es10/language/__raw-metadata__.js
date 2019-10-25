import {SKILL_LEVEL} from '../../skill-levels';
import * as tag from '../../tags';
import {toUtcDate}  from '../../date';
import * as date from '../../date';
import {es6} from '../../es6/language/__raw-metadata__.js';

const buildReferenceForId = id => ({bundle: 'es10/language', id});
export const es10 = {
  OBJECT_FROMENTRIES: buildReferenceForId(1),
  OBJECT_FROMENTRIES_IN_DEPTH: buildReferenceForId(2),
};

export const all = {
  name: 'ES10 Katas',
  groups: {
    'Object API': {
      items: {
        [es10.OBJECT_FROMENTRIES.id]: {
          name: '`Object.fromEntries()`',
          description: '`Object.fromEntries()` converts key-value pairs into an object',
          path: 'object-api/fromEntries',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
          ],
          publishDateUTC: toUtcDate(2019, date.JULY, 28, 22, 55),
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries',
              comment: 'Description of Object.fromEntries() on MDN.',
              tags: [tag.MDN, tag.DOCS]
            },
          ],
        },
        [es10.OBJECT_FROMENTRIES_IN_DEPTH.id]: {
          name: '`Object.fromEntries()` in depth',
          description: '`Object.fromEntries()` converts key-value pairs into an object',
          path: 'object-api/fromEntries-in-depth',
          level: SKILL_LEVEL.EXPERT,
          requiresKnowledgeFrom: [
            es10.OBJECT_FROMENTRIES,
            es6.CONST,
            es6.MAP_BASICS,
            es6.SET_BASICS,
            // es6.ITERABLE,
            es6.ARROW_FUNCTION_BASICS,
            es6.SYMBOL_BASICS,
          ],
          publishDateUTC: toUtcDate(2019, date.JUNE, 25, 19, 55),
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries',
              comment: 'Description of Object.fromEntries() on MDN.',
              tags: [tag.MDN, tag.DOCS]
            },
            {
              url: 'https://www.ecma-international.org/ecma-262/10.0/#sec-object.fromentries',
              comment: 'The specification describing `Object.fromEntries()`.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'https://github.com/tc39/proposal-object-from-entries',
              comment: 'The (now archived) proposal, before it went into the spec, interesting read if you wanna go deep.',
              tags: [tag.DISCUSSION, tag.DOCS]
            },
            {
              url: 'https://github.com/tc39/proposal-object-from-entries/blob/master/DETAILS.md',
              comment: 'Very interesting details about some decisions on this method.',
              tags: [tag.DISCUSSION, tag.DOCS]
            },
          ],
        },
      },
    },
  },
};
