import {SKILL_LEVEL} from '../../skill-levels.js';
import {toUtcDate}  from '../../date';
import * as date from '../../date';

const ASSERRT_THAT = 1;
const MATCHER_EQUAL_TO = 2;
const MATCHER_STRICTLY_EQUAL_TO = 3;
const MATCHER_ANYTHING = 4;
const MATCHER_DEFINED = 5;

export const all = {
  name: 'Assertion Library Hamjest',
  nameSlug: 'hamjest-assertion-library',
  groups: {
    core: {
      items: {
        [ASSERRT_THAT]: {
          name: '`assertThat()`',
          description: 'The core function needed for most assertions.',
          path: 'assertThat',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: toUtcDate(2017, date.AUGUST, 21, 13, 0),
          links: [],
        },
      },
    },
    matchers: {
      items: {
        [MATCHER_EQUAL_TO]: {
          name: '`equalTo()`',
          description: 'The most common matcher `equalTo()`.',
          path: 'matchers/equalTo',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: toUtcDate(2017, date.AUGUST, 21, 15, 54),
          links: [],
        },
        [MATCHER_STRICTLY_EQUAL_TO]: {
          name: '`strictlyEqualTo()`',
          description: 'The strict version of `equalTo()`, just like the `===`.',
          path: 'matchers/strictlyEqualTo',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: toUtcDate(2017, date.AUGUST, 21, 16, 30),
          links: [],
        },
        [MATCHER_ANYTHING]: {
          name: '`anything()`',
          description: 'The matcher `anything()`, matches any value and never fails.',
          path: 'matchers/anything',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: toUtcDate(2017, date.AUGUST, 22, 16, 30),
          links: [],
        },
        [MATCHER_DEFINED]: {
          name: '`defined()`',
          description: 'The matcher `defined()`, matches everything but `undefined`.',
          path: 'matchers/defined',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: toUtcDate(2017, date.AUGUST, 22, 16, 30),
          links: [],
        },
      }
    }
  }
};
