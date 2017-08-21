import {SKILL_LEVEL} from '../../skill-levels.js';
import * as date from '../../date';

const ASSERRT_THAT = 1;
const MATCHER_EQUAL_TO = 2;

export const all = {
  name: 'Hamjest assertion library',
  groups: {
    'hamjest': {
      items: {
        [ASSERRT_THAT]: {
          name: '`assertThat()`',
          description: 'The core function needed for most assertions.',
          path: 'assertThat',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: date.toUtcDate(2017, date.AUGUST, 21, 13, 0),
          links: [],
        },
        [MATCHER_EQUAL_TO]: {
          name: '`equalTo()`',
          description: 'The most common matcher `equalTo()`.',
          path: 'matchers/equalTo',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: date.toUtcDate(2017, date.AUGUST, 21, 15, 54),
          links: [],
        },
      }
    }
  }
};
