import {SKILL_LEVEL} from '../../skill-levels';
import * as tag from '../../tags';
import {toUtcDate}  from '../../date';
import * as date from '../../date';
import {es1} from '../../es1/language/__raw-metadata__.js';

const buildReferenceForId = id => ({bundle: 'es6/language', id});
export const es6 = {
  TEMPLATE_STRING_BASICS: buildReferenceForId(1),
  TEMPLATE_STRING_MULTILINE: buildReferenceForId(2),
  TEMPLATE_STRING_TAGGED: buildReferenceForId(3),
  TEMPLATE_STRING_RAW: buildReferenceForId(4),
  ARROW_FUNCTION_BASICS: buildReferenceForId(5),
  ARROW_FUNCTION_BINDING: buildReferenceForId(6),
  LET: buildReferenceForId(7),
  CONST: buildReferenceForId(8),
  OBJECT_LITERAL_BASICS: buildReferenceForId(9),
  DESTRUCTURING_ARRAY: buildReferenceForId(10),

  DESTRUCTURING_STRING: buildReferenceForId(11),
  DESTRUCTURING_OBJECT: buildReferenceForId(12),
  DESTRUCTURING_DEFAULTS: buildReferenceForId(13),
  DESTRUCTURING_PARAMETERS: buildReferenceForId(14),
  DESTRUCTURING_ASSIGN: buildReferenceForId(15),
  OBJECT_LITERAL_COMPUTED_PROPERTIES: buildReferenceForId(16),
  UNICODE_IN_STRINGS: buildReferenceForId(17),
  REST_OPERATOR_AS_PARAMETER: buildReferenceForId(18),
  REST_OPERATOR_WITH_DESTRUCTURING: buildReferenceForId(19),

  SPREAD_WITH_ARRAYS: buildReferenceForId(20),
  SPREAD_WITH_STRINGS: buildReferenceForId(21),
  CLASS_CREATION: buildReferenceForId(22),
  CLASS_ACCESSORS: buildReferenceForId(23),
  CLASS_STATIC: buildReferenceForId(24),
  CLASS_EXTENDS: buildReferenceForId(25),
  CLASS_MORE_EXTENDS: buildReferenceForId(26),
  CLASS_SUPER_IN_METHOD: buildReferenceForId(27),
  CLASS_SUPER_IN_CONSTRUCTOR: buildReferenceForId(28),
  ARRAY_FROM: buildReferenceForId(29),

  ARRAY_OF: buildReferenceForId(30),
  ARRAY_FILL: buildReferenceForId(31),
  ARRAY_FIND: buildReferenceForId(32),
  ARRAY_FIND_INDEX: buildReferenceForId(33),
  SYMBOL_BASICS: buildReferenceForId(34),
  SYMBOL_FOR: buildReferenceForId(35),
  SYMBOL_KEY_FOR: buildReferenceForId(36),
  ITERATOR_ARRAY: buildReferenceForId(37),
  ITERATOR_STRING: buildReferenceForId(38),
  ITERATOR_PROTOCOL: buildReferenceForId(39),

  ITERATOR_USAGES: buildReferenceForId(40),
  ARRAY_ENTRIES: buildReferenceForId(41),
  ARRAY_KEYS: buildReferenceForId(42),
  ARRAY_VALUES: buildReferenceForId(43),
  MAP_BASICS: buildReferenceForId(44),
  MAP_GET: buildReferenceForId(45),
  MAP_SET: buildReferenceForId(46),
  SET_BASICS: buildReferenceForId(47),
  SET_ADD: buildReferenceForId(48),
  GENERATOR_CREATION: buildReferenceForId(49),

  GENERATOR_ITERATOR: buildReferenceForId(50),
  GENERATOR_YIELD: buildReferenceForId(51),
  GENERATOR_SEND_VALUE: buildReferenceForId(52),
  MAP_INITIALIZE: buildReferenceForId(53),
  OBJECT_IS: buildReferenceForId(54),
  NUMBER_ISINTEGER: buildReferenceForId(55),
  GENERATOR_SEND_FUNCTION: buildReferenceForId(56),
  DEFAULT_PARAMETERS_BASICS: buildReferenceForId(57),
  REFLECT_BASICS: buildReferenceForId(58),
  REFLECT_APPLY: buildReferenceForId(59),

  REFLECT_GET_PROTOTYPE_OF: buildReferenceForId(60),
  MODULES_IMPORT: buildReferenceForId(61),
  MAP_HAS: buildReferenceForId(62),
  STRING_INCLUDES: buildReferenceForId(63),
  SET_DELETE: buildReferenceForId(64),
  SET_API: buildReferenceForId(65),
  OBJECT_LITERAL_GETTER: buildReferenceForId(66),
  OBJECT_LITERAL_SETTER: buildReferenceForId(67),
  REFLECT_CONSTRUCT: buildReferenceForId(68),
  REFLECT_DEFINEPROPERTY: buildReferenceForId(69),

  SET_CLEAR: buildReferenceForId(70),
  STRING_REPEAT: buildReferenceForId(71),
  STRING_STARTSWITH: buildReferenceForId(72),
  GENERATOR_RETURN: buildReferenceForId(73),
  STRING_ENDSWITH: buildReferenceForId(74),
  PROMISE_BASICS: buildReferenceForId(75),
  PROMISE_CREATION: buildReferenceForId(76),
  PROMISE_CHAINING_THEN: buildReferenceForId(77),
  PROMISE_API: buildReferenceForId(78),
  PROMISE_CATCH: buildReferenceForId(79),

  NUMBER_ISNAN: buildReferenceForId(80),
  NUMBER_PARSEINT: buildReferenceForId(81),
  // PROMISE_CHAINING_AND_ERRORS: buildReferenceForId('??'),
};

export const all = {
  name: 'ECMAScript 6 / ES2015',
  nameSlug: 'es6-katas',
  groups: {
    'Template strings': {
      items: {
        [es6.TEMPLATE_STRING_BASICS.id]: {
          name: 'basics',
          description: 'A template string, is wrapped in backticks.',
          path: 'template-strings/basics',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
          ],
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
        [es6.TEMPLATE_STRING_MULTILINE.id]: {
          name: 'multiline',
          description: 'Template strings, can be multiline.',
          path: 'template-strings/multiline',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            es6.TEMPLATE_STRING_BASICS,
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
        [es6.TEMPLATE_STRING_TAGGED.id]: {
          name: 'tagged template strings',
          description: 'Advanced form of template strings.',
          path: 'template-strings/tagged',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            es6.TEMPLATE_STRING_BASICS,
            es6.REST_OPERATOR_AS_PARAMETER,
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MARCH, 17, 7, 55)),
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates',
              comment: 'Description of tagged template strings.',
              tags: [tag.MDN, tag.DOCS]
            }
          ]
        },
        [es6.TEMPLATE_STRING_RAW.id]: {
          name: '`raw` property',
          description: 'The `raw` property accesses the string as it was entered.',
          path: 'template-strings/raw',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            es6.TEMPLATE_STRING_BASICS,
            es6.TEMPLATE_STRING_TAGGED,
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
        [es6.ARROW_FUNCTION_BASICS.id]: {
          name: 'basics',
          description: 'Arrow functions are a more convinient and shorter way to write a function.',
          path: 'arrow-functions/basics',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.MARCH, 19, 7, 55))
        },
        [es6.ARROW_FUNCTION_BINDING.id]: {
          name: 'function binding',
          description: 'Arrow functions have lexical `this`, no dynamic `this`.',
          path: 'arrow-functions/binding',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            es6.ARROW_FUNCTION_BASICS,
            es6.CLASS_CREATION,
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
        [es6.LET.id]: {
          name: '`let` declaration',
          description: '`let` restricts the scope of the variable to the current block.',
          path: 'block-scoping/let',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.MARCH, 23, 7, 55))
        },
        [es6.CONST.id]: {
          name: '`const` declaration',
          description: '`const` is like `let` plus read-only.',
          path: 'block-scoping/const',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            es6.LET,
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MARCH, 24, 7, 55))
        }
      }
    },
    'Object literal': {
      items: {
        [es6.OBJECT_LITERAL_BASICS.id]: {
          name: 'basics',
          description: 'ES6 has new shorthands for objects.',
          path: 'object-literal/basics',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            es6.CONST,
            es6.ARROW_FUNCTION_BASICS
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MARCH, 25, 7, 55))
        },
        [es6.OBJECT_LITERAL_COMPUTED_PROPERTIES.id]: {
          name: 'computed properties',
          description: 'Object literal properties may be computed values.',
          path: 'object-literal/computed-properties',
          level: SKILL_LEVEL.ADVANCED,
          requiresKnowledgeFrom: [
            es6.CONST,
            es6.ARROW_FUNCTION_BASICS,
            es6.OBJECT_LITERAL_BASICS,
            //OBJECT_LITERAL_GETTER
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 3, 7, 55))
        },
        [es6.OBJECT_LITERAL_GETTER.id]: {
          name: 'getter',
          description: 'A getter binds an object property to a function that will be called when that property is looked up.',
          path: 'object-literal/getter',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            es6.CONST,
            es6.OBJECT_LITERAL_BASICS,
            es6.OBJECT_LITERAL_COMPUTED_PROPERTIES
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
        [es6.OBJECT_LITERAL_SETTER.id]: {
          name: 'setter',
          description: 'A setter binds an object property to a function to be called when there is an attempt to set that property.',
          path: 'object-literal/setter',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            es6.LET,
            es6.CONST,
            es6.OBJECT_LITERAL_BASICS,
            es6.OBJECT_LITERAL_COMPUTED_PROPERTIES,
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
        [es6.DESTRUCTURING_ARRAY.id]: {
          name: 'array',
          description: 'Destructuring arrays allows for more concise.',
          path: 'destructuring/array',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            es6.LET,
            es6.CONST,
            es6.TEMPLATE_STRING_BASICS,
            //FOR_OF
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MARCH, 26, 7, 55))
        },
        [es6.DESTRUCTURING_STRING.id]: {
          name: 'string',
          description: 'Destructuring can also be done on strings.',
          path: 'destructuring/string',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            es6.CONST,
            es6.UNICODE_IN_STRINGS
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MARCH, 27, 7, 55))
        },
        [es6.DESTRUCTURING_OBJECT.id]: {
          name: 'object',
          description: 'Destructuring objects is a core concepts for modules and more.',
          path: 'destructuring/object',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            es6.CONST,
            es6.OBJECT_LITERAL_BASICS
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MARCH, 30, 7, 55))
        },
        [es6.DESTRUCTURING_DEFAULTS.id]: {
          name: 'defaults',
          description: 'When destructuring you can also use default values.',
          path: 'destructuring/defaults',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            es6.CONST,
            es6.DESTRUCTURING_ARRAY,
            es6.DESTRUCTURING_OBJECT,
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MARCH, 31, 7, 55))
        },
        [es6.DESTRUCTURING_PARAMETERS.id]: {
          name: 'parameters',
          description: 'Destructuring function parameters.',
          path: 'destructuring/parameters',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            es6.DESTRUCTURING_ARRAY,
            es6.DESTRUCTURING_OBJECT,
            es6.ARROW_FUNCTION_BASICS,
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 1, 7, 55))
        },
        [es6.DESTRUCTURING_ASSIGN.id]: {
          name: 'assign',
          description: 'Assign variables while destructuring.',
          path: 'destructuring/rename',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            es6.DESTRUCTURING_ARRAY,
            es6.DESTRUCTURING_OBJECT,
            es6.DESTRUCTURING_DEFAULTS,
            es6.CONST,
            es6.ARROW_FUNCTION_BASICS,
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 2, 7, 55))
        }
      }
    },
    'Unicode': {
      items: {
        [es6.UNICODE_IN_STRINGS.id]: {
          name: 'in strings',
          description: 'How to use unicode in strings.',
          path: 'unicode/in-strings',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            es6.CONST,
            es6.TEMPLATE_STRING_BASICS,
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 6, 7, 55))
        }
      }
    },
    'Rest operator': {
      items: {
        [es6.REST_OPERATOR_AS_PARAMETER.id]: {
          name: 'as parameter',
          description: 'Use the rest operator as parameter.',
          path: 'rest/as-parameter',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 7, 8, 15))
        },
        [es6.REST_OPERATOR_WITH_DESTRUCTURING.id]: {
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
        [es6.SPREAD_WITH_ARRAYS.id]: {
          name: 'with arrays',
          description: 'Spread syntax in use with arrays.',
          path: 'spread/with-arrays',
          level: SKILL_LEVEL.INTERMEDIATE,
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 10, 8, 18)),
          requiresKnowledgeFrom: [
            es6.CONST,
            es6.DESTRUCTURING_ARRAY,
            es6.REST_OPERATOR_WITH_DESTRUCTURING,
          ],
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax',
              comment: 'Syntax docs on MDN.',
              tags: [tag.MDN, tag.DOCS]
            },
          ],
        },
        [es6.SPREAD_WITH_STRINGS.id]: {
          name: 'with strings',
          description: 'Spread syntax in use with strings.',
          path: 'spread/with-strings',
          level: SKILL_LEVEL.INTERMEDIATE,
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 13, 7, 55)),
          requiresKnowledgeFrom: [
            es6.CONST,
            es6.DESTRUCTURING_ARRAY,
            es6.REST_OPERATOR_WITH_DESTRUCTURING,
          ],
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax',
              comment: 'Syntax docs on MDN.',
              tags: [tag.MDN, tag.DOCS]
            },
          ],
        }
      }
    },
    'Class': {
      items: {
        [es6.CLASS_CREATION.id]: {
          name: 'creation',
          description: 'Create a class.',
          path: 'class/creation',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 14, 7, 55))
        },
        [es6.CLASS_ACCESSORS.id]: {
          name: 'accessors',
          description: 'Getter+setters as class properties.',
          path: 'class/accessors',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 15, 7, 56))
        },
        [es6.CLASS_STATIC.id]: {
          name: 'static',
          description: 'Use of the static keyword inside a class.',
          path: 'class/static',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 16, 7, 55))
        },
        [es6.CLASS_EXTENDS.id]: {
          name: 'extends',
          description: 'How to do inheritance, using `extends`.',
          path: 'class/extends',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 17, 8, 25))
        },
        [es6.CLASS_MORE_EXTENDS.id]: {
          name: 'more extends',
          description: 'More in depth `extends` stuff',
          path: 'class/more-extends',
          level: SKILL_LEVEL.ADVANCED,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 20, 7, 55))
        },
        [es6.CLASS_SUPER_IN_METHOD.id]: {
          name: 'super in method',
          description: 'Use of `super` inside a method.',
          path: 'class/super-in-method',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 21, 7, 55))
        },
        [es6.CLASS_SUPER_IN_CONSTRUCTOR.id]: {
          name: 'super in constructor',
          description: 'Use of `super` inside the constructor.',
          path: 'class/super-in-constructor',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 22, 7, 55))
        }
      }
    },
    'Array API': {
      items: {
        [es6.ARRAY_FROM.id]: {
          name: '`Array.from()`',
          description: 'Convert a not-array into an array.',
          path: 'array-api/from',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 23, 8, 32))
        },
        [es6.ARRAY_OF.id]: {
          name: '`Array.of()`',
          description: '`Array.of` creates an array with the given arguments as elements.',
          path: 'array-api/of',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 27, 8, 9))
        },
        [es6.ARRAY_FILL.id]: {
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
        [es6.ARRAY_FIND.id]: {
          name: '`[].find()`',
          description: '`[].find` makes finding items in arrays easier.',
          path: 'array-api/find',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.APRIL, 29, 7, 55))
        },
        [es6.ARRAY_FIND_INDEX.id]: {
          name: '`[].findIndex()`',
          description: '`[].findIndex` makes finding items in arrays easier.',
          path: 'array-api/findIndex',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 4, 8, 1))
        },
        [es6.ARRAY_ENTRIES.id]: {
          name: '`[].entries()`',
          description: '`[].entries()` returns an iterator object with all entries.',
          path: 'array-api/entries',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            es6.CONST,
            es6.ARRAY_FROM,
            es6.ITERATOR_PROTOCOL,
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 18, 8, 6))

        },
        [es6.ARRAY_KEYS.id]: {
          name: '`[].keys()`',
          description: '`[].keys()` returns an iterator for all keys in the array.',
          path: 'array-api/keys',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            es6.CONST,
            es6.DESTRUCTURING_ARRAY,
            es6.ARRAY_FROM,
            es6.ITERATOR_PROTOCOL,
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 19, 7, 55))
        },
        [es6.ARRAY_VALUES.id]: {
          name: '`[].values()`',
          description: '`[].values()` returns an iterator for all values in the array',
          path: 'array-api/values',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            es6.CONST,
            es6.DESTRUCTURING_ARRAY,
            es6.ITERATOR_PROTOCOL,
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 20, 7, 55))
        }
      }
    },
    'Symbol': {
      items: {
        [es6.SYMBOL_BASICS.id]: {
          name: 'basics',
          description: 'Symbol basics.',
          path: 'symbol/basics',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 5, 11, 21))
        },
        [es6.SYMBOL_FOR.id]: {
          name: '`Symbol.for()`',
          description: '`Symbol.for()` for registering Symbols globally.',
          path: 'symbol/for',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 6, 7, 55))
        },
        [es6.SYMBOL_KEY_FOR.id]: {
          name: '`Symbol.keyFor()`',
          description: '`Symbol.keyFor()` gets the symbol key for a given symbol.',
          path: 'symbol/keyFor',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            es6.SYMBOL_FOR,
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 7, 8, 9))
        }
      }
    },
    'Iterator': {
      items: {
        [es6.ITERATOR_ARRAY.id]: {
          name: 'array',
          description: '',
          path: 'iterator/array',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 8, 7, 55))
        },
        [es6.ITERATOR_STRING.id]: {
          name: 'string',
          description: '',
          path: 'iterator/string',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            es6.SYMBOL_BASICS,
            es6.ITERATOR_ARRAY,
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 11, 7, 55))
        },
        [es6.ITERATOR_PROTOCOL.id]: {
          name: 'protocol',
          description: '',
          path: 'iterator/protocol',
          level: SKILL_LEVEL.EXPERT,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 12, 7, 55))
        },
        [es6.ITERATOR_USAGES.id]: {
          name: 'usage',
          description: '',
          path: 'iterator/usages',
          level: SKILL_LEVEL.EXPERT,
          requiresKnowledgeFrom: [
            es6.LET,
            es6.DESTRUCTURING_ARRAY,
            es6.DESTRUCTURING_OBJECT,
            es6.SYMBOL_BASICS,
            es6.ITERATOR_PROTOCOL,
            es6.SPREAD_WITH_ARRAYS,
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 13, 8, 17))
        }
      }
    },
    'Map': {
      items: {
        [es6.MAP_BASICS.id]: {
          name: 'Basics',
          description: 'A Map holds key-value pairs, the key can even be a complex value.',
          path: 'map/basics',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            es6.CONST,
            // es6.FOR_OF
            // typeof
          ],
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map',
              comment: 'MDN page about Map.',
              tags: [tag.MDN]
            },
            {
              url: 'https://262.ecma-international.org/6.0/#sec-map-objects',
              comment: 'The chapter in the specification, with all details about Map.',
              tags: [tag.SPECIFICATION]
            },
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 21, 7, 55))
        },
        [es6.MAP_GET.id]: {
          name: '`map.get()`',
          description: '`Map.prototype.get` returns the element from the map for a key.',
          path: 'map/get',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            es6.ITERATOR_ARRAY,
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 22, 7, 55))
        },
        [es6.MAP_SET.id]: {
          name: '`map.set()`',
          description: '`Map.prototype.set` adds a new element with key and value to a Map.',
          path: 'map/set',
          level: SKILL_LEVEL.EXPERT,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 26, 8, 3))
        },
        [es6.MAP_INITIALIZE.id]: {
          name: 'initialize',
          description: 'Initializing a map with values.',
          path: 'map/initialize',
          level: SKILL_LEVEL.ADVANCED,
          requiresKnowledgeFrom: [
            es6.LET,
            es6.CONST,
            es6.ARRAY_FROM,
            es6.MAP_BASICS,
            es6.MAP_SET,
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.JUNE, 22, 11, 56))
        },
        [es6.MAP_HAS.id]: {
          name: '`map.has()`',
          description: 'Indicates whether an element with a key exists.',
          path: 'map/has',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            es6.LET,
            es6.MAP_BASICS,
            es6.MAP_SET,
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
        [es6.SET_BASICS.id]: {
          name: 'basics',
          description: '',
          path: 'set/basics',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 27, 10, 12))
        },
        [es6.SET_ADD.id]: {
          name: '`set.add()`',
          description: 'Appends a new element to the end of a Set object.',
          path: 'set/add',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            es6.SET_BASICS,
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.MAY, 29, 6, 55))
        },
        [es6.SET_DELETE.id]: {
          name: '`set.delete()`',
          description: 'Removes an element from a set.',
          path: 'set/delete',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            es6.LET,
            es6.CONST,
            es6.SET_BASICS,
            es6.SET_ADD,
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
        [es6.SET_API.id]: {
          name: 'the API',
          description: '`Set` API overview.',
          path: 'set/api',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            es6.LET,
            es6.CONST,
            es6.ARRAY_FROM,
            es6.SET_BASICS,
            es6.SET_ADD,
            es6.SET_DELETE,
            // SET_SIZE, SET_CLEAR, SET_ENTRIES, SET_HAS, SET_KEYS, SET_VALUES, SET_ITERATOR
            es6.ARROW_FUNCTION_BASICS,
            es6.SPREAD_WITH_ARRAYS,
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
        [es6.SET_CLEAR.id]: {
          name: '`set.clear()`',
          description: 'Removes all elements from a Set object.',
          path: 'set/clear',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            es6.CONST,
            es6.LET,
            es6.SET_BASICS,
            es6.SET_ADD,
            es6.DESTRUCTURING_OBJECT,
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
        [es6.GENERATOR_CREATION.id]: {
          name: 'creation',
          description: 'There are many ways to create a generator',
          path: 'generator/creation',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            es6.LET,
            es6.CONST,
            es6.OBJECT_LITERAL_COMPUTED_PROPERTIES,
            es6.CLASS_CREATION,
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
        [es6.GENERATOR_ITERATOR.id]: {
          name: 'iterator',
          description: 'Generators return iterable objects',
          path: 'generator/iterator',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            es6.GENERATOR_CREATION,
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.JUNE, 3, 7, 55))
        },
        [es6.GENERATOR_YIELD.id]: {
          name: 'yield expressions',
          description: 'The yield keyword is used to pause and resume a generator function',
          path: 'generator/yield',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            es6.LET,
            es6.GENERATOR_CREATION,
            es6.GENERATOR_ITERATOR,
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
        [es6.GENERATOR_SEND_VALUE.id]: {
          name: 'send value to a generator',
          description: 'By calling next() with a parameter, you can pass a value to a generator.',
          path: 'generator/send-value',
          level: SKILL_LEVEL.ADVANCED,
          requiresKnowledgeFrom: [
            es6.LET,
            es6.GENERATOR_CREATION,
            es6.GENERATOR_ITERATOR,
            es6.GENERATOR_YIELD,
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
        [es6.GENERATOR_SEND_FUNCTION.id]: {
          name: 'send function to a generator',
          description: 'By calling next() with a function, you can pass it to the generator.',
          path: 'generator/send-function',
          level: SKILL_LEVEL.EXPERT,
          requiresKnowledgeFrom: [
            es6.LET,
            es6.GENERATOR_CREATION,
            es6.GENERATOR_ITERATOR,
            es6.GENERATOR_YIELD,
            es6.GENERATOR_SEND_VALUE,
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.JUNE, 29, 11, 49))
        },
        [es6.GENERATOR_RETURN.id]: {
          name: '`return` inside a generator function',
          description: 'Return statement in a generator function is special.',
          path: 'generator/return',
          level: SKILL_LEVEL.ADVANCED,
          requiresKnowledgeFrom: [
            es6.CONST,
            es6.GENERATOR_YIELD,
            es6.GENERATOR_SEND_VALUE,
            es6.GENERATOR_ITERATOR,
            es6.GENERATOR_CREATION,
            es6.DESTRUCTURING_OBJECT,
            es6.ARRAY_FROM,
            es6.ITERATOR_PROTOCOL,
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

    'Object API': {
      items: {
        [es6.OBJECT_IS.id]: {
          name: '`Object.is()`',
          description: '`Object.is()` compares if two values are the same.',
          path: 'object-api/is',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            es6.CONST,
            es6.LET,
            es6.MAP_BASICS,
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.JUNE, 24, 7, 55))
        }
      }
    },

    'Number API': {
      items: {
        [es6.NUMBER_ISINTEGER.id]: {
          name: '`Number.isInteger()`',
          description: '`Number.isInteger()` determines if a value is an integer.',
          path: 'number-api/isinteger',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.JUNE, 25, 7, 55)),
        },
        [es6.NUMBER_ISNAN.id]: {
          name: '`Number.isNaN()`',
          description: '`Number.isNaN()` determines if a value is `NaN`.',
          path: 'number-api/isnan',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2019, date.JUNE, 15, 15, 42)),
          links: [
            {
              url: 'https://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan',
              comment: 'Description of `Number.isNaN` in the specification.',
              tags: [tag.SPECIFICATION, tag.DOCS]
            },
            {
              url: 'https://www.ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer',
              comment: 'Description of `Number.MAX_SAFE_INTEGER` in the spec.',
              tags: [tag.SPECIFICATION, tag.DOCS]
            },
            {
              url: 'https://www.ecma-international.org/ecma-262/6.0/#sec-number.positive_infinity',
              comment: 'Description of `Number.POSITIVE_INFINITY` in the spec.',
              tags: [tag.SPECIFICATION, tag.DOCS]
            },
            {
              url: 'https://www.ecma-international.org/ecma-262/6.0/#sec-isnan-number',
              comment: 'The (old) global `isNaN` function, that behaves a bit different.',
              tags: [tag.SPECIFICATION, tag.DOCS]
            },
            {
              url: 'https://www.ecma-international.org/ecma-262/6.0/#sec-math.pi',
              comment: 'The place where `Math.PI` is specified.',
              tags: [tag.SPECIFICATION, tag.DOCS]
            },
          ],
        },
        [es6.NUMBER_PARSEINT.id]: {
          name: '`Number.parseInt()`',
          description: '`Number.parseInt()` parses a string and returns an integer.',
          path: 'number-api/parseInt',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            es6.CONST,
            es6.ARROW_FUNCTION_BASICS, 
            es1.GLOBAL_PARSEINT
          ],
          publishDateUTC: new Date(Date.UTC(2019, date.OCTOBER, 6, 17, 29)),
          links: [
            {
              url: 'https://www.ecma-international.org/ecma-262/6.0/#sec-number.parseint',
              comment: 'Description of `Number.parseInt()` in the specification.',
              tags: [tag.SPECIFICATION, tag.DOCS]
            },
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt',
              comment: 'The MDN docs for this function.',
              tags: [tag.MDN, tag.DOCS]
            },
            {
              url: 'https://www.ecma-international.org/ecma-262/6.0/index.html#sec-parseint-string-radix',
              comment: 'Spec chapter of the global `parseInt()` function.',
              tags: [tag.SPECIFICATION, tag.DOCS]
            },
            {
              url: 'https://twitter.com/wolframkriesing/status/1180533105221873672',
              comment: 'A twitter thread, where I explained the decision process of the creation of this kata and how it relates to the ES1 kata of this function.',
              tags: [tag.DISCUSSION]
            },
          ],
        },
      }
    },

    'Default parameters': {
      items: {
        [es6.DEFAULT_PARAMETERS_BASICS.id]: {
          name: 'Basics',
          description: 'Default parameters make function parameters more flexible.',
          path: 'default-parameters/basics',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            es6.LET,
            es6.ARROW_FUNCTION_BASICS,
            es6.TEMPLATE_STRING_BASICS,
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.JUNE, 30, 7, 55))
        }
      }
    },

    'Reflect': {
      items: {
        [es6.REFLECT_BASICS.id]: {
          name: 'Basics',
          description: '',
          path: 'reflect/basics',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            es6.LET,
            es6.CLASS_CREATION,
            es6.CLASS_EXTENDS,
            es6.CLASS_SUPER_IN_CONSTRUCTOR,
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.JULY, 2, 8, 23))
        },
        [es6.REFLECT_APPLY.id]: {
          name: '`Reflect.apply()`',
          description: 'Calls a target function with given scope and arguments.',
          path: 'reflect/apply',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            es6.LET,
            es6.CONST,
            es6.CLASS_CREATION,
            es6.ARROW_FUNCTION_BASICS,
            es6.ARRAY_FILL,
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
        [es6.REFLECT_GET_PROTOTYPE_OF.id]: {
          name: '`Reflect.getPrototypeOf()`',
          description: 'It returns the prototype of the given object.',
          path: 'reflect/getprototypeof',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            es6.LET,
            es6.CONST,
            es6.CLASS_CREATION,
            es6.ARROW_FUNCTION_BASICS,
          ],
          publishDateUTC: new Date(Date.UTC(2015, date.JULY, 8, 8, 14))
        },
        [es6.REFLECT_CONSTRUCT.id]: {
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
        [es6.REFLECT_DEFINEPROPERTY.id]: {
          name: '`Reflect.defineProperty()`',
          description: 'Defines a property on a given object.',
          path: 'reflect/defineproperty',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            es6.CONST,
            es6.LET,
            es6.CLASS_CREATION,
            es6.SYMBOL_BASICS,
            es6.SYMBOL_FOR,
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
        [es6.MODULES_IMPORT.id]: {
          name: '`import` statement',
          description: 'Use `import` to import functions that have been exported somewhere else.',
          path: 'modules/import',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: new Date(Date.UTC(2015, date.JULY, 9, 8, 46))
        }
      }
    },

    'String API': {
      items: {
        [es6.STRING_INCLUDES.id]: {
          name: '`string.includes()`',
          description: 'Finds string within another string.',
          path: 'string-api/includes',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            es6.LET,
            es6.CONST,
            es6.ARROW_FUNCTION_BASICS,
            es6.DEFAULT_PARAMETERS_BASICS,
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
          ],
        },
        [es6.STRING_REPEAT.id]: {
          name: '`string.repeat(count)`',
          description: 'Appends `count` copies of `string` to each other and returns it.',
          path: 'string-api/repeat',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            es6.LET,
            es6.CONST,
            es6.CLASS_CREATION,
          ],
          publishDateUTC: toUtcDate(2015, date.AUGUST, 7, 7, 55),
          links: [
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.repeat',
              comment: 'The official specification, actually quite good to read for this function.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-tonumber',
              comment: 'The part in the spec, which explains the conversion of a string to a number.',
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
        [es6.STRING_STARTSWITH.id]: {
          name: '`string.startsWith()`',
          description: 'Determines whether a string begins with the characters of another string.',
          path: 'string-api/startswith',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            es6.LET,
            es6.CONST,
            es6.REST_OPERATOR_AS_PARAMETER,
            es6.SPREAD_WITH_ARRAYS,
            es6.ARROW_FUNCTION_BASICS,
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
        [es6.STRING_ENDSWITH.id]: {
          name: '`string.endsWith()`',
          description: 'Determines whether a string begins with the characters of another string.',
          path: 'string-api/endswith',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            es6.CONST,
            es6.ARROW_FUNCTION_BASICS,
            es6.REST_OPERATOR_AS_PARAMETER,
            es6.SPREAD_WITH_ARRAYS,
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
        [es6.PROMISE_BASICS.id]: {
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
        [es6.PROMISE_CREATION.id]: {
          name: 'creation',
          description: 'A promise can be created in multiple ways, learn them all here.',
          path: 'promise/creation',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            es6.CONST,
            es6.ARROW_FUNCTION_BASICS,
            es6.PROMISE_BASICS,
            es6.CLASS_EXTENDS,
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
        [es6.PROMISE_CHAINING_THEN.id]: {
          name: 'chaining `then()`',
          description: 'Chaining promises can enhance readability of asynchronous code.',
          path: 'promise/chaining-then',
          level: SKILL_LEVEL.ADVANCED,
          requiresKnowledgeFrom: [
            es6.CONST,
            es6.ARROW_FUNCTION_BASICS,
            es6.TEMPLATE_STRING_BASICS,
            es6.PROMISE_BASICS,
            es6.PROMISE_CREATION,
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
        [es6.PROMISE_API.id]: {
          name: 'the API',
          description: '`Promise` API overview.',
          path: 'promise/api',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            es6.PROMISE_BASICS,
            es6.PROMISE_CREATION,
          ],
          publishDateUTC: toUtcDate(2015, date.MARCH, 15, 9, 30),
          links: [
          ]
        },
        [es6.PROMISE_CATCH.id]: {
          name: '`promise.catch()`',
          description: 'Returns a Promise and deals with rejected cases only.',
          path: 'promise/catch',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            es6.PROMISE_BASICS,
            es6.PROMISE_CREATION,
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
          ],
        },
      },
    },
  },
};
