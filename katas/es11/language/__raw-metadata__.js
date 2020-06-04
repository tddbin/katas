import {SKILL_LEVEL} from '../../skill-levels';
import * as tag from '../../tags';
import {toUtcDate}  from '../../date';
import * as date from '../../date';
import {es6} from '../../es6/language/__raw-metadata__.js';

const buildReferenceForId = id => ({bundle: 'es11/language', id});
export const es11 = {
  STRING_MATCHALL: buildReferenceForId(1),
};

export const all = {
  name: 'ECMAScript 11 (ES2020) Katas ',
  nameSlug: 'es11-katas',
  groups: {
    'String API': {
      items: {
        [es11.STRING_MATCHALL.id]: {
          name: 'string.matchAll()',
          description: 'Returns all results matching a regular expression.',
          path: 'string-api/matchAll',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
          ],
          // publishDateUTC: toUtcDate(2015, date.JULY, 14, 9, 29),
          links: [
            {
              url: 'https://github.com/tc39/proposal-string-matchall',
              comment: 'The proposal repo.',
              tags: [tag.SPECIFICATION, tag.DISCUSSION],
            },
            {
              url: 'https://tc39.es/proposal-string-matchall/',
              comment: 'The rendered and readable proposal.',
              tags: [tag.SPECIFICATION],
            },
            {
              url: 'https://tc39.es/ecma262/#sec-string.prototype.matchall',
              comment: 'The spec text.',
              tags: [tag.SPECIFICATION],
            },
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll',
              comment: 'The Mozilla Developer Network docs, contains good examples.',
              tags: [tag.MDN, tag.DOCS],
            },
          ],
        },
      },
    },
  },
};
