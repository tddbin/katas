import {SKILL_LEVEL} from '../../skill-levels.js';

var WITH_ASSERT = 1;
var WITH_REFEREE = 2;
var WITH_SHOULD = 3;
export const all = {
  name: 'Mocha test libraries',
  groups: {
    'mocha': {
      items: {
        [WITH_ASSERT]: {
          name: 'with node`s assert',
          description: 'Examples of how to use mocha with node`s native assert lib.',
          path: 'with-assert',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: []
        },
        [WITH_REFEREE]: {
          name: 'with referee',
          description: 'Referee assertion lib provide jasmine style `expect().toXX()`.',
          path: 'with-referee',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: []
        },
        [WITH_SHOULD]: {
          name: 'with should assertion lib',
          description: 'Examples of how to use mocha with the more verbose should library.',
          path: 'with-should',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: []
        }
      }
    }
  }
};
