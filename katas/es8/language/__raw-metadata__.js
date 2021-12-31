import {SKILL_LEVEL} from '../../skill-levels.js';
import * as tag from '../../tags.js';
import {toUtcDate}  from '../../date.js';
import * as date from '../../date.js';

const buildReferenceForId = id => ({bundle: 'es8/language', id});
export const es8 = {
  ASYNC_FUNCTIONS_BASICS: buildReferenceForId(1),
  OBJECT_ENTRIES: buildReferenceForId(2),
  OBJECT_VALUES: buildReferenceForId(3),
};

export const all = {
  name: 'ECMAScript 8 (ES2017) Katas ',
  nameSlug: 'es8-katas',
  groups: {
    'Async Function': {
      items: {
        [es8.ASYNC_FUNCTIONS_BASICS.id]: {
          name: 'basics',
          description: '',
          path: 'async-functions/basics',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
          ],
          publishDateUTC: toUtcDate(2017, date.JUNE, 9, 21, 30),
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function',
              comment: 'A short description of async function.',
              tags: [tag.MDN, tag.DOCS]
            },
            {
              url: 'https://tc39.github.io/ecma262/#sec-async-function-definitions',
              comment: 'The actual chapter about `async`, you need to dive in from here.',
              tags: [tag.SPECIFICATION]
            },
          ],
        },
      },
    },
    'Object API': {
      items: {
        [es8.OBJECT_ENTRIES.id]: {
          name: '`Object.entries()`',
          description: '',
          path: 'object-api/entries',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          // publishDateUTC: toUtcDate(2019, date.JUNE, 25, 19, 55),
          links: [],
        },
        [es8.OBJECT_VALUES.id]: {
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
