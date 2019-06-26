import {SKILL_LEVEL} from '../../skill-levels';
import * as tag from '../../tags';
import {toUtcDate}  from '../../date';
import * as date from '../../date';

const OBJECT_FROMENTRIES = 1;

export const all = {
  name: 'ES10 Katas',
  groups: {
    'Object API': {
      items: {
        [OBJECT_FROMENTRIES]: {
          name: 'basics',
          description: '',
          path: 'object-api/fromEntries',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
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
          ],
        },
      },
    },
  },
};
