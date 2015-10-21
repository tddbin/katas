import {SKILL_LEVEL} from '../../skill-levels';
import * as tag from '../../tags';
import {toUtcDate}  from '../../date';
import * as date from '../../date';

const ARRAY_SORT_BASICS = 1;

export const all = {
  name: 'JavaScript Katas',
  groups: {
    'Array': {
      items: {
        [ARRAY_SORT_BASICS]: {
          name: '`[].sort()` basics',
          description: 'The `sort()` function sorts an array as if each element was a string.',
          path: 'array/sort-basics',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.OCTOBER, 22, 7, 55)),
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
              comment: 'Very detailed description of how sort() works.',
              tags: [tag.MDN, tag.DOCS]
            },
            {
              url: 'https://en.wikipedia.org/wiki/List_of_Unicode_characters#Basic_Latin',
              comment: 'All the basic latin characters (close to ASCII).',
              tags: [tag.WIKIPEDIA, tag.DOCS]
            },
            {
              url: 'https://en.wikipedia.org/wiki/Emoji#Blocks',
              comment: 'Some emoji icons and their unicode data.',
              tags: [tag.WIKIPEDIA, tag.DOCS]
            }
          ]
        }
      }
    }
  }
};
