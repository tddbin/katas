import {SKILL_LEVEL} from '../../skill-levels';
import * as tag from '../../tags';
import {toUtcDate}  from '../../date';
import * as date from '../../date';

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
const DESTRUCTURING_DEFAULTS = 13;
const DESTRUCTURING_PARAMETERS = 14;
const DESTRUCTURING_ASSIGN = 15;
const OBJECT_LITERAL_COMPUTED_PROPERTIES = 16;
const UNICODE_IN_STRINGS = 17;
const REST_OPERATOR_AS_PARAMETER = 18;
const REST_OPERATOR_WITH_DESTRUCTURING = 19;

const SPREAD_WITH_ARRAYS = 20;
const SPREAD_WITH_STRINGS = 21;
const CLASS_CREATION = 22;
const CLASS_ACCESSORS = 23;
const CLASS_STATIC = 24;
const CLASS_EXTENDS = 25;
const CLASS_MORE_EXTENDS = 26;
const CLASS_SUPER_IN_METHOD = 27;
const CLASS_SUPER_IN_CONSTRUCTOR = 28;
const ARRAY_FROM = 29;

const ARRAY_OF = 30;
const ARRAY_FILL = 31;
const ARRAY_FIND = 32;
const ARRAY_FIND_INDEX = 33;
const SYMBOL_BASICS = 34;
const SYMBOL_FOR = 35;
const SYMBOL_KEY_FOR = 36;
const ITERATOR_ARRAY = 37;
const ITERATOR_STRING = 38;
const ITERATOR_PROTOCOL = 39;

const ITERATOR_USAGES = 40;
const ARRAY_ENTRIES = 41;
const ARRAY_KEYS = 42;
const ARRAY_VALUES = 43;
const MAP_BASICS = 44;
const MAP_GET = 45;
const MAP_SET = 46;
const SET_BASICS = 47;
const SET_ADD = 48;
const GENERATOR_CREATION = 49;

const GENERATOR_ITERATOR = 50;
const GENERATOR_YIELD = 51;
const GENERATOR_SEND_VALUE = 52;
const MAP_INITIALIZE = 53;
const OBJECT_IS = 54;
const NUMBER_ISINTEGER = 55;
const GENERATOR_SEND_FUNCTION = 56;
const DEFAULT_PARAMETERS_BASICS = 57;
const REFLECT_BASICS = 58;
const REFLECT_APPLY = 59;

const REFLECT_GET_PROTOTYPE_OF = 60;
const MODULES_IMPORT = 61;
const MAP_HAS = 62;
const STRING_INCLUDES = 63;
const SET_DELETE = 64;
const SET_API = 65;
const OBJECT_LITERAL_GETTER = 66;
const OBJECT_LITERAL_SETTER = 67;
const REFLECT_CONSTRUCT = 68;
const REFLECT_DEFINEPROPERTY = 69;

const SET_CLEAR = 70;
const STRING_REPEAT = 71;
const STRING_STARTSWITH = 72;
const GENERATOR_RETURN = 73;
const STRING_ENDSWITH = 74;
const PROMISE_BASICS = 75;
const PROMISE_CREATION = 76;
const PROMISE_CHAINING_THEN = 77;
const PROMISE_API = 78;
const PROMISE_CATCH = 79;

const PROMISE_CHAINING_AND_ERRORS = '??';

export const all = {
  name: 'ES6 Katas',
  groups: {
    'Template strings': {
      items: {
        [TEMPLATE_STRING_BASICS]: {
          name: 'basics',
          description: 'A template string, is wrapped in backticks.',
          path: 'template-strings/basics',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.MARCH, 13, 7, 55)),
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings',
              comment: 'Description of template strings.',
              tags: [tag.MDN, tag.DOCS]
            },
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-template-literal-lexical-components',
              comment: 'The specification describing the template string syntax.',
              tags: [tag.SPECIFICATION]
            }
          ]
        },
        [TEMPLATE_STRING_MULTILINE]: {
          name: 'multiline',
          description: 'Template strings, can be multiline.',
          path: 'template-strings/multiline',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            TEMPLATE_STRING_BASICS
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MARCH, 16, 7, 55)),
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings#Multi-line_strings',
              comment: 'Description of multiline template strings.',
              tags: [tag.MDN, tag.DOCS]
            }
          ]
        },
        [TEMPLATE_STRING_TAGGED]: {
          name: 'tagged template strings',
          description: 'Advanced form of template strings.',
          path: 'template-strings/tagged',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            TEMPLATE_STRING_BASICS,
            REST_OPERATOR_AS_PARAMETER
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MARCH, 17, 7, 55)),
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings#Tagged_template_strings',
              comment: 'Description of tagged template strings.',
              tags: [tag.MDN, tag.DOCS]
            }
          ]
        },
        [TEMPLATE_STRING_RAW]: {
          name: '`raw` property',
          description: 'The `raw` property accesses the string as it was entered.',
          path: 'template-strings/raw',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            TEMPLATE_STRING_BASICS,
            TEMPLATE_STRING_TAGGED
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MARCH, 18, 7, 55)),
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings#Raw_strings',
              comment: 'Description of `raw` property of tagged template strings.',
              tags: [tag.MDN, tag.DOCS]
            },
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-static-semantics-templatestrings',
              comment: 'Describing the raw behavior.',
              tags: [tag.SPECIFICATION]
            }
          ]
        }
      }
    },
    'Arrow functions': {
      items: {
        [ARROW_FUNCTION_BASICS]: {
          name: 'basics',
          description: 'Arrow functions are a more convinient and shorter way to write a function.',
          path: 'arrow-functions/basics',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.MARCH, 19, 7, 55))
        },
        [ARROW_FUNCTION_BINDING]: {
          name: 'function binding',
          description: 'Arrow functions have lexical `this`, no dynamic `this`.',
          path: 'arrow-functions/binding',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            ARROW_FUNCTION_BASICS,
            CLASS_CREATION
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MARCH, 20, 7, 55))
        }
      }
    },
    'Block scope': {
      links: [
        {
          url: 'http://www.2ality.com/2015/10/why-tdz.html',
          comment: 'Why is there a "temporal dead zone" in ES6? - The timespan between creation and declaration of a `const` or `let` variable is the temporal dead zone.',
          links: [tag.ARTICLE]
        }
      ],
      items: {
        [LET]: {
          name: '`let` declaration',
          description: '`let` restricts the scope of the variable to the current block.',
          path: 'block-scoping/let',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.MARCH, 23, 7, 55))
        },
        [CONST]: {
          name: '`const` declaration',
          description: '`const` is like `let` plus read-only.',
          path: 'block-scoping/const',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            LET
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MARCH, 24, 7, 55))
        }
      }
    },
    'Object literal': {
      items: {
        [OBJECT_LITERAL_BASICS]: {
          name: 'basics',
          description: 'ES6 has new shorthands for objects.',
          path: 'object-literal/basics',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            CONST,
            ARROW_FUNCTION_BASICS
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MARCH, 25, 7, 55))
        },
        [OBJECT_LITERAL_COMPUTED_PROPERTIES]: {
          name: 'computed properties',
          description: 'Object literal properties may be computed values.',
          path: 'object-literal/computed-properties',
          level: SKILL_LEVEL.ADVANCED,
          requiresKnowledgeFrom: [
            CONST,
            ARROW_FUNCTION_BASICS,
            OBJECT_LITERAL_BASICS,
            CONST
            //OBJECT_LITERAL_GETTER
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 3, 7, 55))
        },
        [OBJECT_LITERAL_GETTER]: {
          name: 'getter',
          description: 'A getter binds an object property to a function that will be called when that property is looked up.',
          path: 'object-literal/getter',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            CONST,
            OBJECT_LITERAL_BASICS,
            OBJECT_LITERAL_COMPUTED_PROPERTIES
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.JULY, 27, 8, 5)),
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get',
              comment: 'Description of all the details of a getter.',
              tags: [tag.MDN, tag.DOCS]
            },
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-object-type',
              comment: '"An accessor property associates a key value with one or two accessor functions ..."',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'https://twitter.com/es6katas/status/625577823357566976',
              comment: 'Announcement of this kata on twitter.',
              tags: [tag.ANNOUNCEMENT]
            }
          ]
        },
        [OBJECT_LITERAL_SETTER]: {
          name: 'setter',
          description: 'A setter binds an object property to a function to be called when there is an attempt to set that property.',
          path: 'object-literal/setter',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            LET, CONST,
            OBJECT_LITERAL_BASICS,
            OBJECT_LITERAL_COMPUTED_PROPERTIES
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.JULY, 28, 7, 57)),
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set',
              comment: 'Description of all the details of a setter.',
              tags: [tag.MDN, tag.DOCS]
            },
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-object-type',
              comment: '"An accessor property associates a key value with one or two accessor functions ..."',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-method-definitions',
              comment: 'The syntax definition of how to write an (accessor) method.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'https://twitter.com/es6katas/status/625938211672600576',
              comment: 'Announcement of this kata on twitter.',
              tags: [tag.ANNOUNCEMENT]
            }
          ]
        }
      }
    },
    'Destructuring': {
      items: {
        [DESTRUCTURING_ARRAY]: {
          name: 'array',
          description: 'Destructuring arrays allows for more concise.',
          path: 'destructuring/array',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            LET,
            CONST,
            TEMPLATE_STRING_BASICS
            //FOR_OF
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MARCH, 26, 7, 55))
        },
        [DESTRUCTURING_STRING]: {
          name: 'string',
          description: 'Destructuring can also be done on strings.',
          path: 'destructuring/string',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            CONST,
            UNICODE_IN_STRINGS
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MARCH, 27, 7, 55))
        },
        [DESTRUCTURING_OBJECT]: {
          name: 'object',
          description: 'Destructuring objects is a core concepts for modules and more.',
          path: 'destructuring/object',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            CONST,
            OBJECT_LITERAL_BASICS
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MARCH, 30, 7, 55))
        },
        [DESTRUCTURING_DEFAULTS]: {
          name: 'defaults',
          description: 'When destructuring you can also use default values.',
          path: 'destructuring/defaults',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            CONST,
            DESTRUCTURING_ARRAY,
            DESTRUCTURING_OBJECT
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MARCH, 31, 7, 55))
        },
        [DESTRUCTURING_PARAMETERS]: {
          name: 'parameters',
          description: 'Destructuring function parameters.',
          path: 'destructuring/parameters',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            DESTRUCTURING_ARRAY,
            DESTRUCTURING_OBJECT,
            ARROW_FUNCTION_BASICS
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 1, 7, 55))
        },
        [DESTRUCTURING_ASSIGN]: {
          name: 'assign',
          description: 'Assign variables while destructuring.',
          path: 'destructuring/rename',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            DESTRUCTURING_ARRAY,
            DESTRUCTURING_OBJECT,
            DESTRUCTURING_DEFAULTS,
            CONST,
            ARROW_FUNCTION_BASICS
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 2, 7, 55))
        }
      }
    },
    'Unicode': {
      items: {
        [UNICODE_IN_STRINGS]: {
          name: 'in strings',
          description: 'How to use unicode in strings.',
          path: 'unicode/in-strings',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            CONST,
            TEMPLATE_STRING_BASICS
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 6, 7, 55))
        }
      }
    },
    'Rest operator': {
      items: {
        [REST_OPERATOR_AS_PARAMETER]: {
          name: 'as parameter',
          description: 'Use the rest operator as parameter.',
          path: 'rest/as-parameter',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 7, 8, 15))
        },
        [REST_OPERATOR_WITH_DESTRUCTURING]: {
          name: 'with destructuring',
          description: 'Use the rest operator with destructuring.',
          path: 'rest/with-destructuring',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 8, 7, 55))
        }
      }
    },
    'Spread operator': {
      items: {
        [SPREAD_WITH_ARRAYS]: {
          name: 'with arrays',
          description: 'Spread operator in use with arrays.',
          path: 'spread/with-arrays',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 10, 8, 18))
        },
        [SPREAD_WITH_STRINGS]: {
          name: 'with strings',
          description: 'Apply spread operator on strings.',
          path: 'spread/with-strings',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 13, 7, 55))
        }
      }
    },
    'Class': {
      items: {
        [CLASS_CREATION]: {
          name: 'creation',
          description: 'Create a class.',
          path: 'class/creation',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 14, 7, 55))
        },
        [CLASS_ACCESSORS]: {
          name: 'accessors',
          description: 'Getter+setters as class properties.',
          path: 'class/accessors',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 15, 7, 56))
        },
        [CLASS_STATIC]: {
          name: 'static',
          description: 'Use of the static keyword inside a class.',
          path: 'class/static',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 16, 7, 55))
        },
        [CLASS_EXTENDS]: {
          name: 'extends',
          description: 'How to do inheritance, using `extends`.',
          path: 'class/extends',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 17, 8, 25))
        },
        [CLASS_MORE_EXTENDS]: {
          name: 'more extends',
          description: 'More in depth `extends` stuff',
          path: 'class/more-extends',
          level: SKILL_LEVEL.ADVANCED,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 20, 7, 55))
        },
        [CLASS_SUPER_IN_METHOD]: {
          name: 'super in method',
          description: 'Use of `super` inside a method.',
          path: 'class/super-in-method',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 21, 7, 55))
        },
        [CLASS_SUPER_IN_CONSTRUCTOR]: {
          name: 'super in constructor',
          description: 'Use of `super` inside the constructor.',
          path: 'class/super-in-constructor',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 22, 7, 55))
        }
      }
    },
    'Array': {
      items: {
        [ARRAY_FROM]: {
          name: '`Array.from()`',
          description: 'Convert a not-array into an array.',
          path: 'array-api/from',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 23, 8, 32))
        },
        [ARRAY_OF]: {
          name: '`Array.of()`',
          description: '`Array.of` creates an array with the given arguments as elements.',
          path: 'array-api/of',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 27, 8, 9))
        },
        [ARRAY_FILL]: {
          name: '`[].fill()`',
          description: '`[].fill` can fill up an array with one value.',
          path: 'array-api/fill',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 28, 7, 55)),
          links: [
            {
              url: 'https://github.com/tddbin/es6katas.org/issues/9',
              comment: 'A discussion in a github issue, about how to use this kata.',
              tags: [tag.DISCUSSION]
            },
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill',
              comment: 'API doc on MDN.',
              tags: [tag.MDN, tag.DOCS]
            }
          ]
        },
        [ARRAY_FIND]: {
          name: '`[].find()`',
          description: '`[].find` makes finding items in arrays easier.',
          path: 'array-api/find',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 29, 7, 55))
        },
        [ARRAY_FIND_INDEX]: {
          name: '`[].findIndex()`',
          description: '`[].findIndex` makes finding items in arrays easier.',
          path: 'array-api/findIndex',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 4, 8, 1))
        },
        [ARRAY_ENTRIES]: {
          name: '`[].entries()`',
          description: '`[].entries()` returns an iterator object with all entries.',
          path: 'array-api/entries',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [CONST, ARRAY_FROM, ITERATOR_PROTOCOL
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 18, 8, 6))

        },
        [ARRAY_KEYS]: {
          name: '`[].keys()`',
          description: '`[].keys()` returns an iterator for all keys in the array.',
          path: 'array-api/keys',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [CONST, DESTRUCTURING_ARRAY, ARRAY_FROM, ITERATOR_PROTOCOL
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 19, 7, 55))
        },
        [ARRAY_VALUES]: {
          name: '`[].values()`',
          description: '`[].values()` returns an iterator for all values in the array',
          path: 'array-api/values',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [CONST, DESTRUCTURING_ARRAY, ITERATOR_PROTOCOL
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 20, 7, 55))
        }
      }
    },
    'Symbol': {
      items: {
        [SYMBOL_BASICS]: {
          name: 'basics',
          description: 'Symbol basics.',
          path: 'symbol/basics',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 5, 11, 21))
        },
        [SYMBOL_FOR]: {
          name: '`Symbol.for()`',
          description: '`Symbol.for()` for registering Symbols globally.',
          path: 'symbol/for',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 6, 7, 55))
        },
        [SYMBOL_KEY_FOR]: {
          name: '`Symbol.keyFor()`',
          description: '`Symbol.keyFor()` gets the symbol key for a given symbol.',
          path: 'symbol/keyFor',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            SYMBOL_FOR
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 7, 8, 9))
        }
      }
    },
    'Iterator': {
      items: {
        [ITERATOR_ARRAY]: {
          name: 'array',
          description: '',
          path: 'iterator/array',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 8, 7, 55))
        },
        [ITERATOR_STRING]: {
          name: 'string',
          description: '',
          path: 'iterator/string',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            SYMBOL_BASICS,
            ITERATOR_ARRAY
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 11, 7, 55))
        },
        [ITERATOR_PROTOCOL]: {
          name: 'protocol',
          description: '',
          path: 'iterator/protocol',
          level: SKILL_LEVEL.EXPERT,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 12, 7, 55))
        },
        [ITERATOR_USAGES]: {
          name: 'usage',
          description: '',
          path: 'iterator/usages',
          level: SKILL_LEVEL.EXPERT,
          requiresKnowledgeFrom: [
            LET,
            DESTRUCTURING_ARRAY, DESTRUCTURING_OBJECT,
            SYMBOL_BASICS,
            ITERATOR_PROTOCOL,
            SPREAD_WITH_ARRAYS
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 13, 8, 17))
        }
      }
    },
    'Map': {
      items: {
        [MAP_BASICS]: {
          name: 'Basics',
          description: '',
          path: 'map/basics',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 21, 7, 55))
        },
        [MAP_GET]: {
          name: '`map.get()`',
          description: '',
          path: 'map/get',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [ITERATOR_ARRAY
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 22, 7, 55))
        },
        [MAP_SET]: {
          name: '`map.set()`',
          description: '',
          path: 'map/set',
          level: SKILL_LEVEL.EXPERT,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 26, 8, 3))
        },
        [MAP_INITIALIZE]: {
          name: 'initialize',
          description: 'Initializing a map with values.',
          path: 'map/initialize',
          level: SKILL_LEVEL.ADVANCED,
          requiresKnowledgeFrom: [
            LET, CONST,
            ARRAY_FROM,
            MAP_BASICS, MAP_SET
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.JUNE, 22, 11, 56))
        },
        [MAP_HAS]: {
          name: '`map.has()`',
          description: 'Indicates whether an element with a key exists.',
          path: 'map/has',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            LET,
            MAP_BASICS,
            MAP_SET
            //MAP_DELETE
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.JULY, 10, 8, 9)),
          links: [
            {
              url: 'https://www.youtube.com/watch?v=71aX1z0SzZU',
              comment: 'A video (15min) documenting how this kata was created.',
              tags: [tag.VIDEO]
            }
          ]
        }
      }
    },
    'Set': {
      items: {
        [SET_BASICS]: {
          name: 'basics',
          description: '',
          path: 'set/basics',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 27, 10, 12))
        },
        [SET_ADD]: {
          name: '`set.add()`',
          description: 'Appends a new element to the end of a Set object.',
          path: 'set/add',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            SET_BASICS
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 29, 6, 55))
        },
        [SET_DELETE]: {
          name: '`set.delete()`',
          description: 'Removes an element from a set.',
          path: 'set/delete',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            LET, CONST,
            SET_BASICS,
            SET_ADD
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.JULY, 15, 16, 12)),
          links: [
            {
              url: 'https://twitter.com/es6katas/status/621351626561994752',
              comment: 'Announcement of this kata on twitter.',
              tags: [tag.ANNOUNCEMENT]
            }
          ]
        },
        [SET_API]: {
          name: 'the API',
          description: '`Set` API overview.',
          path: 'set/api',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            LET, CONST,
            ARRAY_FROM,
            SET_BASICS, SET_ADD, SET_DELETE,
            // SET_SIZE, SET_CLEAR, SET_ENTRIES, SET_HAS, SET_KEYS, SET_VALUES, SET_ITERATOR
            ARROW_FUNCTION_BASICS,
            SPREAD_WITH_ARRAYS
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.JULY, 16, 8, 24)),
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set',
              comment: '',
              tags: [tag.MDN, tag.DOCS]
            },
            {
              url: 'https://twitter.com/es6katas/status/621596289160081408',
              comment: 'Announcement of this kata on twitter.',
              tags: [tag.ANNOUNCEMENT]
            }
          ]
        },
        [SET_CLEAR]: {
          name: '`set.clear()`',
          description: 'Removes all elements from a Set object.',
          path: 'set/clear',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            CONST, LET,
            SET_BASICS, SET_ADD,
            DESTRUCTURING_OBJECT
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.AUGUST, 3, 8, 25)),
          links: [
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-set.prototype.clear',
              comment: 'How the implementation is specified.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear',
              comment: 'The MDN docs.',
              tags: [tag.DOCS, tag.MDN]
            },
            {
              url: 'https://twitter.com/es6katas/status/628119522604662785',
              comment: 'Announcement of this kata on twitter.',
              tags: [tag.ANNOUNCEMENT]
            }
          ]
        }
      }
    },
    'Generator': {
      links: [
        {
          url: 'https://hacks.mozilla.org/2015/05/es6-in-depth-generators/',
          comment: 'ES6 In Depth: Generators',
          tags: [tag.MDN, tag.ARTICLE]
        },
        {
          url: 'https://hacks.mozilla.org/2015/07/es6-in-depth-generators-continued/',
          comment: 'ES6 In Depth: Generators, continued',
          tags: [tag.MDN, tag.ARTICLE]
        },
        {
          url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-generator-objects',
          comment: 'The specification chapter about generators.',
          tags: [tag.SPECIFICATION]
        },
        {
          url: 'http://davidwalsh.name/es6-generators',
          comment: 'The article "The Basics Of ES6 Generators".',
          tags: [tag.ARTICLE]
        }
      ],
      items: {
        [GENERATOR_CREATION]: {
          name: 'creation',
          description: 'There are many ways to create a generator',
          path: 'generator/creation',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            LET,
            CONST,
            OBJECT_LITERAL_COMPUTED_PROPERTIES,
            CLASS_CREATION
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.JUNE, 1, 8, 39)),
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*',
              comment: 'Describes the `function*` declaration.',
              tags: [tag.MDN, tag.DOCS]
            }
          ]
        },
        [GENERATOR_ITERATOR]: {
          name: 'iterator',
          description: 'Generators return iterable objects',
          path: 'generator/iterator',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            GENERATOR_CREATION
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.JUNE, 3, 7, 55))
        },
        [GENERATOR_YIELD]: {
          name: 'yield expressions',
          description: 'The yield keyword is used to pause and resume a generator function',
          path: 'generator/yield',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            LET,
            GENERATOR_CREATION,
            GENERATOR_ITERATOR
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.JUNE, 5, 8, 25)),
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield',
              comment: 'Describing the `yield` keyword.',
              tags: [tag.MDN, tag.DOCS]
            }
          ]
        },
        [GENERATOR_SEND_VALUE]: {
          name: 'send value to a generator',
          description: 'By calling next() with a parameter, you can pass a value to a generator.',
          path: 'generator/send-value',
          level: SKILL_LEVEL.ADVANCED,
          requiresKnowledgeFrom: [
            LET,
            GENERATOR_CREATION,
            GENERATOR_ITERATOR,
            GENERATOR_YIELD
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.JUNE, 18, 12, 7)),
          links: [
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-generatorresume',
              comment: 'The part in the spec, that describes how a generator resumes.',
              tags: [tag.SPECIFICATION]
            }
          ]
        },
        [GENERATOR_SEND_FUNCTION]: {
          name: 'send function to a generator',
          description: 'By calling next() with a function, you can pass it to the generator.',
          path: 'generator/send-function',
          level: SKILL_LEVEL.EXPERT,
          requiresKnowledgeFrom: [
            LET,
            GENERATOR_CREATION,
            GENERATOR_ITERATOR,
            GENERATOR_YIELD,
            GENERATOR_SEND_VALUE
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.JUNE, 29, 11, 49))
        },
        [GENERATOR_RETURN]: {
          name: '`return` inside a generator function',
          description: 'Return statement in a generator function is special.',
          path: 'generator/return',
          level: SKILL_LEVEL.ADVANCED,
          requiresKnowledgeFrom: [
            CONST,
            GENERATOR_YIELD, GENERATOR_SEND_VALUE,
            GENERATOR_ITERATOR, GENERATOR_CREATION,
            DESTRUCTURING_OBJECT,
            ARRAY_FROM,
            ITERATOR_PROTOCOL
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.SEPTEMBER, 25, 14, 45)),
          links: [
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-iteratorresult-interface',
              comment: 'Description of the IteratorResult interface.',
              tags: [tag.SPECIFICATION, tag.DOCS]
            },
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield#Description',
              comment: 'Describes how a return statement behaves inside a generator.',
              tags: [tag.DOCS, tag.MDN]
            }
          ]
        }
      }
    },

    'Object': {
      items: {
        [OBJECT_IS]: {
          name: '`Object.is()`',
          description: '`Object.is()` compares if two values are the same.',
          path: 'object-api/is',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            CONST, LET,
            MAP_BASICS
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.JUNE, 24, 7, 55))
        }
      }
    },

    'Number': {
      items: {
        [NUMBER_ISINTEGER]: {
          name: '`Number.isInteger()`',
          description: '`Number.isInteger()` determines if a value is an integer.',
          path: 'number-api/isinteger',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.JUNE, 25, 7, 55))
        }
      }
    },

    'Default parameters': {
      items: {
        [DEFAULT_PARAMETERS_BASICS]: {
          name: 'Basics',
          description: 'Default parameters make function parameters more flexible.',
          path: 'default-parameters/basics',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            LET,
            ARROW_FUNCTION_BASICS,
            TEMPLATE_STRING_BASICS
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.JUNE, 30, 7, 55))
        }
      }
    },

    'Reflect': {
      items: {
        [REFLECT_BASICS]: {
          name: 'Basics',
          description: '',
          path: 'reflect/basics',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            LET,
            CLASS_CREATION,
            CLASS_EXTENDS,
            CLASS_SUPER_IN_CONSTRUCTOR
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.JULY, 2, 8, 23))
        },
        [REFLECT_APPLY]: {
          name: '`Reflect.apply()`',
          description: 'Calls a target function with given scope and arguments.',
          path: 'reflect/apply',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            LET, CONST,
            CLASS_CREATION,
            ARROW_FUNCTION_BASICS,
            ARRAY_FILL
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.JULY, 3, 7, 55)),
          links: [
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-reflect.apply',
              comment: 'How this function is specified.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-createlistfromarraylike',
              comment: 'How the 3rd parameter gets processed, as an `CreateListFromArrayLike`.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply',
              comment: 'The MDN docs for this function.',
              tags: [tag.DOCS, tag.MDN]
            },
            {
              url: 'https://twitter.com/es6katas/status/616877798917967873',
              comment: 'Announcement of this kata on twitter.',
              tags: [tag.ANNOUNCEMENT]
            },
          ],
        },
        [REFLECT_GET_PROTOTYPE_OF]: {
          name: '`Reflect.getPrototypeOf()`',
          description: 'It returns the prototype of the given object.',
          path: 'reflect/getprototypeof',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            LET,
            CONST,
            CLASS_CREATION,
            ARROW_FUNCTION_BASICS
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.JULY, 8, 8, 14))
        },
        [REFLECT_CONSTRUCT]: {
          name: '`Reflect.construct()`',
          description: 'The `new` operator as a function.',
          path: 'reflect/construct',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.JULY, 30, 7, 55)),
          links: [
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-reflect.construct',
              comment: 'How this function is specified.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-createlistfromarraylike',
              comment: 'How the arguments list that can be passed as second parameter is specified.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'https://leanpub.com/exploring-es6/read#sec_allocating-and-initializing-instances',
              comment: 'Axel Rauschmayer explaining in his book "The data flow between class constructors is different from the canonical way of subclassing in ES5."',
              tags: [tag.DOCS, tag.BOOK]
            },
            {
              url: 'https://leanpub.com/exploring-es6/read#leanpub-auto-reflect',
              comment: 'The chapter on Reflect in the book "Exploring ES6"',
              tags: [tag.DOCS, tag.BOOK]
            },
            {
              url: 'https://twitter.com/es6katas/status/626662280046886912',
              comment: 'Announcement of this kata on twitter.',
              tags: [tag.ANNOUNCEMENT]

            },
          ],
        },
        [REFLECT_DEFINEPROPERTY]: {
          name: '`Reflect.defineProperty()`',
          description: 'Defines a property on a given object.',
          path: 'reflect/defineproperty',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            CONST, LET,
            CLASS_CREATION,
            SYMBOL_BASICS, SYMBOL_FOR
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.JULY, 31, 8, 12)),
          links: [
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-reflect.defineproperty',
              comment: 'The specification for this function.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty',
              comment: 'The MDN docs for this function.',
              tags: [tag.DOCS, tag.MDN]
            },
            {
              url: 'https://twitter.com/es6katas/status/627029158997180416',
              comment: 'Announcement of this kata on twitter.',
              tags: [tag.ANNOUNCEMENT]
            }
          ]
        }
      }
    },

    'Modules': {
      items: {
        [MODULES_IMPORT]: {
          name: '`import` statement',
          description: 'Use `import` to import functions that have been exported somewhere else.',
          path: 'modules/import',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.JULY, 9, 8, 46))
        }
      }
    },

    'String': {
      items: {
        [STRING_INCLUDES]: {
          name: '`string.includes()`',
          description: 'Finds string within another string.',
          path: 'string-api/includes',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            LET,
            CONST,
            ARROW_FUNCTION_BASICS,
            DEFAULT_PARAMETERS_BASICS
          ],
          publishDateUTC: toUtcDate(2015, date.JULY, 14, 9, 29),
          links: [
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.includes',
              comment: 'The official specification, actually quite good to read for this function.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes',
              comment: 'The Mozilla Developer Network docs, contains good examples.',
              tags: [tag.MDN, tag.DOCS]
            }
          ]
        },
        [STRING_REPEAT]: {
          name: '`string.repeat(count)`',
          description: 'Appends `count` copies of `string` to each other and returns it.',
          path: 'string-api/repeat',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            LET, CONST,
            CLASS_CREATION
          ],
          publishDateUTC: toUtcDate(2015, date.AUGUST, 7, 7, 55),
          links: [
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.repeat',
              comment: 'The official specification, actually quite good to read for this function.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat',
              comment: 'The Mozilla Developer Network docs, contains good examples.',
              tags: [tag.MDN, tag.DOCS]
            },
            {
              url: 'https://twitter.com/es6katas/status/629561384896847873',
              comment: 'Announcement of this kata on twitter.',
              tags: [tag.ANNOUNCEMENT]
            }
          ]
        },
        [STRING_STARTSWITH]: {
          name: '`string.startsWith()`',
          description: 'Determines whether a string begins with the characters of another string.',
          path: 'string-api/startswith',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            LET, CONST,
            REST_OPERATOR_AS_PARAMETER,
            SPREAD_WITH_ARRAYS,
            ARROW_FUNCTION_BASICS
          ],
          publishDateUTC: toUtcDate(2015, date.AUGUST, 26, 9, 42),
          links: [
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.startswith',
              comment: 'The official specification, actually quite good to read for this function.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith',
              comment: 'The Mozilla Developer Network docs, contains good examples.',
              tags: [tag.MDN, tag.DOCS]
            }
          ]
        },
        [STRING_ENDSWITH]: {
          name: '`string.endsWith()`',
          description: 'Determines whether a string begins with the characters of another string.',
          path: 'string-api/endswith',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            CONST,
            ARROW_FUNCTION_BASICS,
            REST_OPERATOR_AS_PARAMETER,
            SPREAD_WITH_ARRAYS
          ],
          publishDateUTC: toUtcDate(2015, date.OCTOBER, 2, 7, 55),
          links: [
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.endswith',
              comment: 'The official specification, actually quite good to read for this function.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith',
              comment: 'The Mozilla Developer Network docs, contains some examples.',
              tags: [tag.MDN, tag.DOCS]
            }
          ]
        }
      }
    },

    'Promise': {
      links: [
        {
          url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects',
          comment: 'A Promise is an object that is used as a placeholder for the eventual results of a deferred (and possibly asynchronous) computation.',
          tags: [tag.QUOTE, tag.SPECIFICATION]
        },
        {
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',
          comment: 'The MDN documentation with some extensive examples.',
          tags: [tag.MDN, tag.DOCS]
        },
      ],
      items: {
        [PROMISE_BASICS]: {
          name: 'basics',
          description: 'A promise represents an operation that hasn`t completed yet, but is expected in the future.',
          path: 'promise/basics',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: toUtcDate(2015, date.OCTOBER, 9, 9, 30),
          links: [
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects',
              comment: 'A well understandable description of the states a promise can be in.',
              tags: [tag.SPECIFICATION]
            }
          ]
        },
        [PROMISE_CREATION]: {
          name: 'creation',
          description: 'A promise can be created in multiple ways, learn them all here.',
          path: 'promise/creation',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            CONST, ARROW_FUNCTION_BASICS,
            PROMISE_BASICS,
            CLASS_EXTENDS
          ],
          publishDateUTC: toUtcDate(2015, date.OCTOBER, 28, 14, 30),
          links: [
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-promise-constructor',
              comment: 'Describing the promise constructor.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-promise.all',
              comment: 'How `Promise.all()` is specified.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all',
              comment: 'Documenting `Promise.all()`.',
              tags: [tag.MDN, tag.DOCS]
            },
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-promise.race',
              comment: 'How `Promise.race()` is specified.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race',
              comment: 'Documenting `Promise.race()`.',
              tags: [tag.MDN, tag.DOCS]
            },
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-promise.resolve',
              comment: 'How `Promise.resolve()` is specified.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve',
              comment: 'Documenting `Promise.resolve()`.',
              tags: [tag.MDN, tag.DOCS]
            },
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-promise.reject',
              comment: 'How `Promise.resolve()` is specified.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject',
              comment: 'Documenting `Promise.reject()`.',
              tags: [tag.MDN, tag.DOCS]
            }
          ]
        },
        [PROMISE_CHAINING_THEN]: {
          name: 'chaining `then()`',
          description: 'Chaining promises can enhance readability of asynchronous code.',
          path: 'promise/chaining-then',
          level: SKILL_LEVEL.ADVANCED,
          requiresKnowledgeFrom: [
            CONST, ARROW_FUNCTION_BASICS,
            TEMPLATE_STRING_BASICS,
            PROMISE_BASICS, PROMISE_CREATION
          ],
          publishDateUTC: toUtcDate(2015, date.NOVEMBER, 10, 13, 30),
          links: [
            {
              url: 'https://promisesaplus.com/#point-45',
              comment: 'The description of how a value given to `then()` becomes a resolved promise.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-promisereactionjob',
              comment: 'Looks like the description in the spec of what `then()` accepts and does with the given value.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'http://www.html5rocks.com/en/tutorials/es6/promises/',
              comment: 'A long article introducing promises.',
              tags: [tag.ARTICLE]
            }
          ]
        },
        // [PROMISE_CHAINING_AND_ERRORS]: {
        //   name: 'chaining and errors',
        //   description: 'Handling errors in chained promises made easy.',
        //   path: 'promise/chaining-and-errors',
        //   level: SKILL_LEVEL.ADVANCED,
        //   requiresKnowledgeFrom: [
        //   ],
        //   publishDateUTC: toUtcDate(2015, date.NOVEMBER, ??, ??, ??),
        //   links: [
        //   ]
        // },
        [PROMISE_API]: {
          name: 'the API',
          description: '`Promise` API overview.',
          path: 'promise/api',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            PROMISE_BASICS, PROMISE_CREATION,
          ],
          publishDateUTC: toUtcDate(2015, date.MARCH, 15, 9, 30),
          links: [
          ]
        },
        [PROMISE_CATCH]: {
          name: '`promise.catch()`',
          description: 'Returns a Promise and deals with rejected cases only.',
          path: 'promise/catch',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            PROMISE_BASICS, PROMISE_CREATION,
          ],
          publishDateUTC: toUtcDate(2015, date.MARCH, 15, 9, 30),
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch',
              comment: 'A short description of how `catch` works.',
              tags: [tag.MDN, tag.DOCS]
            },
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/index.html#sec-promise.prototype.catch',
              comment: 'The actual chapter about `catch`, you need to dive in from here.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/index.html#sec-performpromisethen',
              comment: 'The description of the actual flow of `catch`.',
              tags: [tag.SPECIFICATION]
            },
          ]
        },
      }
    }
  }
};
