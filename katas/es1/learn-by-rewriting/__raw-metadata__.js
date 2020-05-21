import {SKILL_LEVEL} from '../../skill-levels';
import * as tag from '../../tags';
import * as date from '../../date';

const buildReferenceForId = id => ({bundle: 'es1/language', id});
export const es1 = {
  'ARRAY_INDEXOF': buildReferenceForId(1),
};

export const all = {
  name: 'ECMAScript 1 - Learn by rewriting',
  nameSlug: 'es1-learn-by-rewriting',
  groups: {
    'Array': {
      items: {
        [es1.ARRAY_INDEXOF.id]: {
          name: '`indexOf()`',
          description: 'The `indexOf()` method returns the first index at which a given element can be found in the array',
          path: 'array-api/indexOf',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2019, date.OCTOBER, 25, 17, )),
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexof',
              comment: 'Very detailed description of how indexOf() works.',
              tags: [tag.MDN, tag.DOCS]
            },
            {
              url: 'https://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.14',
              comment: 'The definition of "Array.prototype.indexOf" in ECMAScript 5.1 (ECMA-262) specification.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'https://twitter.com/wolframkriesing/status/657161540525826048',
              comment: 'Announcement of this kata on twitter.',
              tags: [tag.ANNOUNCEMENT]
            }
          ]
        },
      }
    },
  }
};
