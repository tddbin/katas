import * as date from '../../date';
import { SKILL_LEVEL } from '../../skill-levels';
import * as tag from '../../tags';

const ASYNC_FUNCTIONS_BASICS = 1;

export const all = {
  name: 'ES8 Katas',
  groups: {
    'Async Function': {
      items: {
        [ASYNC_FUNCTIONS_BASICS]: {
          name: 'basics',
          description: '',
          path: 'async-functions/basics',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
          ],
          publishDateUTC: date.toUtcDate(2017, date.JUNE, 9, 21, 30),
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
          ]
        },
      }
    }
  }
};
