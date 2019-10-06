import {SKILL_LEVEL} from '../../skill-levels';
import * as tag from '../../tags';
import {toUtcDate}  from '../../date';
import * as date from '../../date';

const buildReferenceForId = id => ({bundle: 'es8/language', id});
export const es8 = {
  ASYNC_FUNCTIONS_BASICS: buildReferenceForId(1),
};

export const all = {
  name: 'ES8 Katas',
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
  },
};
