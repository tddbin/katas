import {SKILL_LEVEL} from '../../skill-levels';
import * as tag from '../../tags';
import {toUtcDate}  from '../../date';
import * as date from '../../date';

const OBJECT_FROMENTRIES_IN_DEPTH = 1;
const OBJECT_FROMENTRIES = 2;

export const all = {
  name: 'ES10 Katas',
  groups: {
    'Object API': {
      items: {
        [OBJECT_FROMENTRIES]: {
          name: '`Object.fromEntries()`',
          description: '`Object.fromEntries()` converts key-value pairs into an object',
          path: 'object-api/fromEntries',
          level: SKILL_LEVEL.ADVANCED,
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
        [OBJECT_FROMENTRIES_IN_DEPTH]: {
          name: '`Object.fromEntries()` in depth',
          description: '`Object.fromEntries()` converts key-value pairs into an object',
          path: 'object-api/fromEntries-in-depth',
          level: SKILL_LEVEL.ADVANCED,
          requiresKnowledgeFrom: [
            OBJECT_FROMENTRIES,
            // const
            // Map
            // Set
            // Iterable
            // arrow function
            // Symbol
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
