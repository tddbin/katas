import {SKILL_LEVEL} from '../../skill-levels';
import * as tag from '../../tags';
import * as date from '../../date';

const ARRAY_SORT_BASICS = 1;
const ARRAY_SORT_WITH_FUNCTION = 2;

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
          publishDateUTC: new Date(Date.UTC(2015, date.OCTOBER, 22, 9, 11)),
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
            },
            {
              url: 'https://twitter.com/wolframkriesing/status/657161540525826048',
              comment: 'Announcement of this kata on twitter.',
              tags: [tag.ANNOUNCEMENT]
            }
          ]
        },
        [ARRAY_SORT_WITH_FUNCTION]: {
          name: '`[].sort()` can take a compare function',
          description: 'Passing a callback to the `sort()` function, allows for any custom sorting.',
          path: 'array/sort-with-function',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            ARRAY_SORT_BASICS
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.OCTOBER, 23, 9, 26)),
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
              comment: 'Very detailed description of how `sort()` works.',
              tags: [tag.MDN, tag.DOCS]
            },
            {
              url: 'https://twitter.com/wolframkriesing/status/657488332298043392',
              comment: 'Announcement of this kata on twitter.',
              tags: [tag.ANNOUNCEMENT]
            }
          ]
        }
      }
    }
  }
};
