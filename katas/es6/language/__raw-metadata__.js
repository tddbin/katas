import {SKILL_LEVEL} from '../../skill-levels.js';

const TEMPLATE_STRING_BASICS = 1;
const TEMPLATE_STRING_MULTILINE = 2;
const TEMPLATE_STRING_TAGGED = 3;
const TEMPLATE_STRING_RAW = 4;
const ARROW_FUNCTION_BASICS = 5;
const ARROW_FUNCTION_BINDING = 6;
const LET = 7;
const CONST = 8;
const OBJECT_LITERAL_BASICS = 9;
const DESTRUCTURING_ARRAY = 10;

const DESTRUCTURING_STRING = 11;
const DESTRUCTURING_OBJECT = 12;
const OBJECT_LITERAL_COMPUTED_PROPERTIES = 16;
const ITERATOR_PROTOCOL = 39;

const ARRAY_FROM = 29;
const SYMBOL_BASICS = 34;
const SPREAD_WITH_ARRAYS = 20;

const ARRAY_ENTRIES = 41;
const ARRAY_KEYS = 42;
const ARRAY_VALUES = 43;
const MAP_BASICS = 44;
const MAP_GET = 45;
const MAP_SET = 46;
const SET_BASICS = 47;
const SET_ADD = 48;

const SPREAD_WITH_STRINGS = 21;
const CLASS_CREATION = 22;
const CLASS_ACCESSORS = 23;

const FOR_OF = 0;

const UNICODE_IN_STRINGS = 17;
const DESTRUCTURING_DEFAULTS = 13;

const GENERATOR_CREATION = 49;
const GENERATOR_ITERATOR = 50;
const GENERATOR_YIELD = 51;

var ITERATOR_ARRAY = 37;
const GENERATOR_SEND_VALUE = 52;
export const all = {
  name: 'ES6 Katas',
  groups: {
    'Template strings': {
      items: {
        [TEMPLATE_STRING_BASICS]: {
          name: 'Basics',
          description: 'A template string, is wrapped in backticks.',
          path: 'template-strings/basics',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        [TEMPLATE_STRING_MULTILINE]: {
          name: 'Multiline',
          description: 'Template strings, can be multiline.',
          path: 'template-strings/multiline',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            TEMPLATE_STRING_BASICS
          ]
        },
        [TEMPLATE_STRING_TAGGED]: {
          name: 'tagged',
          description: 'Tagged template strings are preceeded by an expression.',
          path: 'template-strings/tagged',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            TEMPLATE_STRING_BASICS
          ]
        },
        [TEMPLATE_STRING_RAW]: {
          name: '`raw` property',
          description: 'The `raw` property accesses the string as it was entered.',
          path: 'template-strings/raw',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            TEMPLATE_STRING_BASICS,
            TEMPLATE_STRING_TAGGED
          ]
        }
      }
    },
    'Arrow functions': {
      items: {
        [ARROW_FUNCTION_BASICS]: {
          name: 'Basics',
          description: 'Arrow functions are a more convinient and shorter way to write a function.',
          path: 'arrow-functions/basics',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        [ARROW_FUNCTION_BINDING]: {
          name: 'Function binding',
          description: 'Arrow functions have lexical `this`, no dynamic `this`.',
          path: 'arrow-functions/binding',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            ARROW_FUNCTION_BASICS,
            CLASS_CREATION
          ]
        }
      }
    },
    'Block scope': {
      items: {
        [LET]: {
          name: '`let` declaration',
          description: '`let` restricts the scope of the variable to the current block.',
          path: 'block-scope/let',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        [CONST]: {
          name: '`const` declaration',
          description: '`const` is like `let` plus read-only.',
          path: 'block-scope/const',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            LET
          ]
        }
      }
    },
    'Object literal': {
      items: {
        [OBJECT_LITERAL_BASICS]: {
          name: 'Basics',
          description: 'ES6 has new shorthands for objects.',
          path: 'object-literal/basics',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            ARROW_FUNCTION_BASICS, 
            CONST
          ]
        },
        [OBJECT_LITERAL_COMPUTED_PROPERTIES]: {
          name: 'Computed properties',
          description: 'Object literal properties may be computed values.',
          path: 'object-literal/computed-properties',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            OBJECT_LITERAL_BASICS,
            CONST
          ]
        }
      }
    },
    'Destructuring': {
      items: {
        [DESTRUCTURING_ARRAY]: {
          name: 'Array',
          description: 'Destructuring arrays allows for more concise.',
          path: 'destructuring/array',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            LET,
            CONST,
            TEMPLATE_STRING_BASICS,
            //FOR_OF
          ]
        },
        [DESTRUCTURING_STRING]: {
          name: 'String',
          description: 'Destructuring can also be done on strings.',
          path: 'destructuring/string',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            CONST,
            UNICODE_IN_STRINGS
          ]
        },
        [DESTRUCTURING_OBJECT]: {
          name: 'Object',
          description: 'Destructuring objects is a core concepts for modules and more.',
          path: 'destructuring/object',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            CONST,
            OBJECT_LITERAL_BASICS
          ]
        },
        [DESTRUCTURING_DEFAULTS]: {
          name: 'Defaults',
          description: 'When destructuring you can also use default values.',
          path: 'destructuring/defaults',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            CONST,
            DESTRUCTURING_ARRAY,
            DESTRUCTURING_OBJECT
          ]
        },
        14: {
          name: 'Parameters',
          description: 'Destructuring function parameters.',
          path: 'destructuring/parameters',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            DESTRUCTURING_ARRAY,
            DESTRUCTURING_OBJECT,
            ARROW_FUNCTION_BASICS
          ]
        },
        15: {
          name: 'Rename',
          description: 'Rename variables while destructuring.',
          path: 'destructuring/rename',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            DESTRUCTURING_ARRAY,
            DESTRUCTURING_OBJECT,
            DESTRUCTURING_DEFAULTS,
            CONST,
            ARROW_FUNCTION_BASICS
          ]
        },
      }
    },
    'Unicode': {
      items: {
        [UNICODE_IN_STRINGS]: {
          name: 'In strings',
          description: 'How to use unicode in strings.',
          path: 'unicode/in-strings',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            CONST,
            TEMPLATE_STRING_BASICS
          ]
        },
      }
    },
    'Rest operator': {
      items: {
        18: {
          path: 'rest/as-parameter',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        19: {
          path: 'rest/with-destructuring',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
      }
    },
    'Spread operator': {
      items: {
        [SPREAD_WITH_ARRAYS]: {
          path: 'spread/with-arrays',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        [SPREAD_WITH_STRINGS]: {
          path: 'spread/with-strings',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
      }
    },
    'Class': {
      items: {
        [CLASS_CREATION]: {
          path: 'class/creation',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        [CLASS_ACCESSORS]: {
          path: 'class/accessors',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        24: {
          path: 'class/static',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        25: {
          path: 'class/extends',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        26: {
          path: 'class/more-extends',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        27: {
          path: 'class/super-in-method',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        28: {
          path: 'class/super-in-constructor',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
      }
    },
    'Array API': {
      items: {
        [ARRAY_FROM]: {
          path: 'array-api/from',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        30: {
          path: 'array-api/of',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        31: {
          path: 'array-api/fill',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        32: {
          path: 'array-api/find',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        33: {
          path: 'array-api/findIndex',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        [ARRAY_ENTRIES]: {
          path: 'array-api/entries',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [CONST, ARRAY_FROM, ITERATOR_PROTOCOL]
        },
        [ARRAY_KEYS]: {
          path: 'array-api/keys',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [CONST, DESTRUCTURING_ARRAY, ARRAY_FROM, ITERATOR_PROTOCOL]
        },
        [ARRAY_VALUES]: {
          path: 'array-api/values',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [CONST, DESTRUCTURING_ARRAY, ITERATOR_PROTOCOL]
        }
      }
    },
    'Symbol': {
      items: {
        [SYMBOL_BASICS]: {
          name: 'Basics',
          description: '',
          path: 'symbol/basics',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: []
        },
        35: {
          path: 'symbol/for',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: []
        },
        36: {
          path: 'symbol/keyFor',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [35]
        },
      }
    },
    'Iterator': {
      items: {
        [ITERATOR_ARRAY]: {
          path: 'iterator/array',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        38: {
          path: 'iterator/string',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [SYMBOL_BASICS, ITERATOR_ARRAY]
        },
        [ITERATOR_PROTOCOL]: {
          path: 'iterator/protocol',
          level: SKILL_LEVEL.EXPERT,
          requiresKnowledgeFrom: []
        },
        40: {
          path: 'iterator/usages',
          level: SKILL_LEVEL.EXPERT,
          requiresKnowledgeFrom: [LET, DESTRUCTURING_ARRAY, DESTRUCTURING_OBJECT, SYMBOL_BASICS, ITERATOR_PROTOCOL, SPREAD_WITH_ARRAYS]
        },
      }
    },
    'Map': {
      items: {
        [MAP_BASICS]: {
          name: 'Basics',
          description: '',
          path: 'map/basics',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        [MAP_GET]: {
          name: '`get()` method',
          description: '',
          path: 'map/get',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [ITERATOR_ARRAY]
        },
        [MAP_SET]: {
          name: '`set()` method',
          description: '',
          path: 'map/set',
          level: SKILL_LEVEL.EXPERT,
          requiresKnowledgeFrom: []
        },
      }
    },
    'Set': {
      items: {
        [SET_BASICS]: {
          name: 'Basics',
          description: '',
          path: 'set/basics',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        [SET_ADD]: {
          name: '`add()` method',
          description: 'Appends a new element to the end of a Set object.',
          path: 'set/add',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            SET_BASICS
          ]
        },
      }
    },
    'Generator': {
      items: {
        [GENERATOR_CREATION]: {
          name: 'Creation',
          description: 'There are many ways to create a generator',
          path: 'generator/creation',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            LET,
            CONST,
            OBJECT_LITERAL_COMPUTED_PROPERTIES,
            CLASS_CREATION
          ]
        },
        [GENERATOR_ITERATOR]: {
          name: 'Iterator',
          description: 'Generators return iterable objects',
          path: 'generator/iterator',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            GENERATOR_CREATION
          ]
        },
        [GENERATOR_YIELD]: {
          name: 'Yield Expressions',
          description: 'The yield keyword is used to pause and resume a generator function',
          path: 'generator/yield',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            LET,
            GENERATOR_CREATION,
            GENERATOR_ITERATOR
          ]
        },
        [GENERATOR_SEND_VALUE]: {
          name: 'Send value to a generator',
          description: 'By calling next() with a parameter, you can pass a value to a generator.',
          path: 'generator/send-value',
          level: SKILL_LEVEL.ADVANCED,
          requiresKnowledgeFrom: [
            LET,
            GENERATOR_CREATION,
            GENERATOR_ITERATOR,
            GENERATOR_YIELD
          ]
        }
      }
    }
  }
};
