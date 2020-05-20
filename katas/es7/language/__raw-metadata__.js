import {SKILL_LEVEL} from '../../skill-levels';
import * as tag from '../../tags';
import {toUtcDate}  from '../../date';
import * as date from '../../date';
import {es6} from '../../es6/language/__raw-metadata__.js';

const buildReferenceForId = id => ({bundle: 'es7/language', id});
export const es7 = {
  'ARRAY_INCLUDES': buildReferenceForId(1),
  'OBJECT_ENTRIES': buildReferenceForId(2),
  'OBJECT_VALUES': buildReferenceForId(3),
};


export const all = {
  name: 'ES7 Katas',
  groups: {
    'Array API': {
      items: {
        [es7.ARRAY_INCLUDES.id]: {
          name: '`[].includes()`',
          description: '`Array.prototype.includes()` determines whether an array includes a certain value',
          path: 'array-api/includes',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            es6.CONST,
            es6.SYMBOL_BASICS,
            es6.SYMBOL_FOR,
          ],
          publishDateUTC: toUtcDate(2020, date.MAY, 21, 0, 20),
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
            {
              url: 'https://www.freecodecamp.org/news/why-could-es7-be-called-es2-4c5f094ccef7/',
              comment: 'An in-depth article about `includes` quoting the spec.',
              tags: [tag.ARTICLE]
            },
          ],
        },
      },
    },
    'Object API': {
      items: {
        [es7.OBJECT_ENTRIES.id]: {
          name: '`Object.entries()`',
          description: '',
          path: 'object-api/entries',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          // publishDateUTC: toUtcDate(2019, date.JUNE, 25, 19, 55),
          links: [],
        },
        [es7.OBJECT_VALUES.id]: {
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
