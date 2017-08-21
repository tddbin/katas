import {SKILL_LEVEL} from '../../skill-levels.js';
import * as date from '../../date';

const ASSERRT_THAT = 1;
const GENERAL_MATCHERS = 2;

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
        [GENERAL_MATCHERS]: {
          name: 'general matchers',
          description: 'The most common, non-specific matchers.',
          path: 'general',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: date.toUtcDate(2017, date.AUGUST, 21, 15, 54),
          links: [],
        },
      }
    }
  }
};
