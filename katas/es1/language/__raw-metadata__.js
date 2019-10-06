import {SKILL_LEVEL} from '../../skill-levels';
import * as tag from '../../tags';
import * as date from '../../date';

const buildReferenceForId = id => ({bundle: 'es1/language', id});
export const es1 = {
  'ARRAY_SORT_BASICS': buildReferenceForId(1),
  'ARRAY_SORT_WITH_FUNCTION': buildReferenceForId(2),
  'GLOBAL_PARSEINT': buildReferenceForId(3),
  'GLOBAL_PARSEINT_IN_DEPTH': buildReferenceForId(4),
};

export const all = {
  name: 'JavaScript Katas',
  groups: {
    'Array API': {
      items: {
        [es1.ARRAY_SORT_BASICS.id]: {
          name: '`[].sort()` basics',
          description: 'The `sort()` function sorts an array as if each element was a string.',
          path: 'array-api/sort-basics',
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
        [es1.ARRAY_SORT_WITH_FUNCTION.id]: {
          name: '`[].sort()` can take a compare function',
          description: 'Passing a callback to the `sort()` function, allows for any custom sorting.',
          path: 'array-api/sort-with-function',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            es1.ARRAY_SORT_BASICS
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
    },
    'Global Object API': {
      items: {
        [es1.GLOBAL_PARSEINT.id]: {
          name: '`parseInt()`',
          description: '',
          path: 'global-api/parseInt',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2019, date.OCTOBER, 6, 19, 53)),
          links: [
            {
              url: 'https://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf',
              comment: 'The very first version of the spec defining `parseInt`, the ES1 spec.',
              tags: [tag.SPECIFICATION, tag.DOCS]
            },
            {
              url: 'https://www.ecma-international.org/ecma-262/10.0/index.html#sec-parseint-string-radix',
              comment: 'A later, newer version of the spec text for `parseInt`, from ES10.',
              tags: [tag.SPECIFICATION, tag.DOCS]
            },
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt',
              comment: 'The description of `parseInt()` on MDN, probably best to read.',
              tags: [tag.MDN, tag.DOCS]
            },
            {
              url: 'https://twitter.com/wolframkriesing/status/1180943849486716928',
              comment: 'Announcement of this kata on twitter.',
              tags: [tag.ANNOUNCEMENT]
            },
          ],
        },
        [es1.GLOBAL_PARSEINT_IN_DEPTH.id]: {
          name: '`parseInt()` in depth',
          description: '',
          path: 'global-api/parseInt-in-depth',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          // publishDateUTC: new Date(Date.UTC(2019, date.OCTOBER, 6, 19, 53)),
          links: []
        },
      },
    },
  }
};
