import {SKILL_LEVEL} from '../../skill-levels';
import * as tag from '../../tags';
import {toUtcDate}  from '../../date';
import * as date from '../../date';

const ARRAY_INCLUDES = 1;
const OBJECT_ENTRIES = 2;
const OBJECT_VALUES = 3;

export const all = {
  name: 'ES7 Katas',
  groups: {
    'Array API': {
      items: {
        [ARRAY_INCLUDES]: {
          name: '`[].includes()`',
          description: '',
          path: 'array-api/includes',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          // publishDateUTC: toUtcDate(2019, date.JUNE, 25, 19, 55),
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes',
              comment: 'Description of [].includes() on MDN.',
              tags: [tag.MDN, tag.DOCS]
            },
            {
              url: 'https://www.ecma-international.org/ecma-262/7.0/#sec-array.prototype.includes',
              comment: 'The specification describing `Array.prototype.includes()`.',
              tags: [tag.SPECIFICATION]
            },
          ],
        },
      },
    },
    'Object API': {
      items: {
        [OBJECT_ENTRIES]: {
          name: '`Object.entries()`',
          description: '',
          path: 'object-api/entries',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          // publishDateUTC: toUtcDate(2019, date.JUNE, 25, 19, 55),
          links: [],
        },
        [OBJECT_VALUES]: {
          name: '`Object.values()`',
          description: '',
          path: 'object-api/values',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          // publishDateUTC: toUtcDate(2019, date.JUNE, 25, 19, 55),
          links: [],
        },
      },
    },
  },
};
