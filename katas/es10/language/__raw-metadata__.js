import {SKILL_LEVEL} from '../../skill-levels';
import * as tag from '../../tags';
import {toUtcDate}  from '../../date';
import * as date from '../../date';
import {es6} from '../../es6/language/__raw-metadata__.js';
import {es1} from '../../es1/language/__raw-metadata__.js';

const buildReferenceForId = id => ({bundle: 'es10/language', id});
export const es10 = {
  OBJECT_FROMENTRIES: buildReferenceForId(1),
  OBJECT_FROMENTRIES_IN_DEPTH: buildReferenceForId(2),
  STRING_TRIMSTART: buildReferenceForId(3),
  STRING_TRIMEND: buildReferenceForId(4),
  ARRAY_FLAT: buildReferenceForId(5),
  ARRAY_FLATMAP: buildReferenceForId(6),
  ARRAY_SORT: buildReferenceForId(7),
  FUNCTION_TOSTRING: buildReferenceForId(8),
  JSON_STRINGIFY: buildReferenceForId(9),
  JSON_SUPERSET_BASICS: buildReferenceForId(10),
  SYMBOL_DESCRIPTION: buildReferenceForId(11),
  TRY_CATCH: buildReferenceForId(12),
};

export const all = {
  name: 'ECMAScript 10 / ES2019',
  nameSlug: 'es10-katas',
  groups: {
    'Array API': {
      items: {
        [es10.ARRAY_FLAT.id]: {
          name: '`array.flat()`',
          description: '`array.flat()` creates an array with all sub-array elements concatenated recursively',
          path: 'array-api/flat',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
          ],
          // publishDateUTC: toUtcDate(2019, date.JULY, 28, 22, 55),
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat',
              comment: 'Description of array.flat() on MDN.',
              tags: [tag.MDN, tag.DOCS]
            },
            {
              url: 'https://v8.dev/features/array-flat-flatmap',
              comment: 'Blog post on flat and flatMap, on the v8 blog.',
              tags: [tag.ARTICLE]
            },
            {
              url: 'https://developers.google.com/web/updates/2018/03/smooshgate',
              comment: '"#SmooshGate FAQ"',
              tags: [tag.ARTICLE]
            },
          ],
        },
        [es10.ARRAY_FLATMAP.id]: {
          name: '`array.flatMap()`',
          description: '`array.flatMap()` maps over each element and flattens it afterwards',
          path: 'array-api/flatMap',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            es10.ARRAY_FLAT,
            // "array.map" was that in es5?
          ],
          // publishDateUTC: toUtcDate(2019, date.JULY, 28, 22, 55),
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap',
              comment: 'Description of array.flatMap() on MDN.',
              tags: [tag.MDN, tag.DOCS]
            },
            {
              url: 'https://v8.dev/features/array-flat-flatmap',
              comment: 'Blog post on flat and flatMap, on the v8 blog.',
              tags: [tag.ARTICLE]
            },
            {
              url: 'https://developers.google.com/web/updates/2018/03/smooshgate',
              comment: '"#SmooshGate FAQ"',
              tags: [tag.ARTICLE]
            },
            {
              url: 'https://exploringjs.com/impatient-js/ch_arrays.html#flatmap-mapping-to-zero-or-more-values',
              comment: '".flatMap(): mapping to zero or more values " by Axel Rauschmayer',
              tags: [tag.ARTICLE]
            },
          ],
        },
        [es10.ARRAY_SORT.id]: {
          name: 'stable `array.sort()`',
          description: '`array.sort()` - is now a stable sort',
          path: 'array-api/sort',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            es1.ARRAY_SORT_BASICS,
            es1.ARRAY_SORT_WITH_FUNCTION,
          ],
          // publishDateUTC: toUtcDate(2019, date.JULY, 28, 22, 55),
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#sort_stability',
              comment: 'MDN chapter on "Sort stability".',
              tags: [tag.MDN, tag.DOCS]
            },
            {
              url: 'https://v8.dev/features/stable-sort',
              comment: 'Blog post the stable sort, on the v8 blog.',
              tags: [tag.ARTICLE]
            },
          ],
        },
      },
    },
    'Object API': {
      items: {
        [es10.OBJECT_FROMENTRIES.id]: {
          name: '`Object.fromEntries()`',
          description: '`Object.fromEntries()` converts key-value pairs into an object',
          path: 'object-api/fromEntries',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
          ],
          publishDateUTC: toUtcDate(2019, date.JULY, 28, 22, 55),
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries',
              comment: 'Description of Object.fromEntries() on MDN.',
              tags: [tag.MDN, tag.DOCS]
            },
          ],
        },
        [es10.OBJECT_FROMENTRIES_IN_DEPTH.id]: {
          name: '`Object.fromEntries()` in depth',
          description: '`Object.fromEntries()` converts key-value pairs into an object',
          path: 'object-api/fromEntries-in-depth',
          level: SKILL_LEVEL.EXPERT,
          requiresKnowledgeFrom: [
            es10.OBJECT_FROMENTRIES,
            es6.CONST,
            es6.MAP_BASICS,
            es6.SET_BASICS,
            // es6.ITERABLE,
            es6.ARROW_FUNCTION_BASICS,
            es6.SYMBOL_BASICS,
          ],
          publishDateUTC: toUtcDate(2019, date.JUNE, 25, 19, 55),
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries',
              comment: 'Description of Object.fromEntries() on MDN.',
              tags: [tag.MDN, tag.DOCS]
            },
            {
              url: 'https://www.ecma-international.org/ecma-262/10.0/#sec-object.fromentries',
              comment: 'The specification describing `Object.fromEntries()`.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'https://github.com/tc39/proposal-object-from-entries',
              comment: 'The (now archived) proposal, before it went into the spec, interesting read if you wanna go deep.',
              tags: [tag.DISCUSSION, tag.DOCS]
            },
            {
              url: 'https://github.com/tc39/proposal-object-from-entries/blob/master/DETAILS.md',
              comment: 'Very interesting details about some decisions on this method.',
              tags: [tag.DISCUSSION, tag.DOCS]
            },
          ],
        },
      },
    },
    'String API': {
      items: {
        [es10.STRING_TRIMSTART.id]: {
          name: '`string.trimStart()`',
          description: '`string.trimStart()` - removes whitespace from the beginning of a string',
          path: 'string-api/trimStart',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          publishDateUTC: toUtcDate(2020, date.NOVEMBER, 28, 0, 56),
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart',
              comment: 'Description of `String.prototype.trimStart()` on MDN.',
              tags: [tag.MDN, tag.DOCS]
            },
            {
              url: 'https://www.ecma-international.org/ecma-262/10.0/#sec-string.prototype.trimstart',
              comment: 'The specification describing `String.prototype.trimStart()`.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'https://github.com/tc39/test262/tree/main/test/built-ins/String/prototype/trimStart',
              comment: 'The official tests for JavaScript (engines) for `trimStart`.',
              tags: [tag.TESTS, tag.SOURCE_CODE]
            },
          ],
        },
        [es10.STRING_TRIMEND.id]: {
          name: '`string.trimEnd()`',
          description: '`string.trimEnd()` - removes whitespace from the end of a string',
          path: 'string-api/trimEnd',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          // publishDateUTC: toUtcDate(2020, date.NOVEMBER, 28, 0, 56),
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd',
              comment: 'Description of String.prototype.trimEnd() on MDN.',
              tags: [tag.MDN, tag.DOCS]
            },
            {
              url: 'https://262.ecma-international.org/10.0/#sec-string.prototype.trimend',
              comment: 'The specification describing `String.prototype.trimEnd()`.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'https://github.com/tc39/test262/tree/main/test/built-ins/String/prototype/trimEnd',
              comment: 'The official tests for JavaScript (engines) for `trimStart`.',
              tags: [tag.TESTS, tag.SOURCE_CODE]
            },
            {
              url: 'https://v8.dev/features/string-trimming',
              comment: 'Blog post on the v8 blog.',
              tags: [tag.ARTICLE]
            },
          ],
        },
      },
    },
    'Function API': {
      items: {
        [es10.FUNCTION_TOSTRING.id]: {
          name: '`function.toString()`',
          description: '`function.toString()` - now returns the complete source code of the function',
          path: 'function-api/toString',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          // publishDateUTC: toUtcDate(2020, date.NOVEMBER, 28, 0, 56),
          links: [
            {
              url: 'https://tc39.es/Function-prototype-toString-revision/#proposal-sec-function.prototype.tostring',
              comment: 'The proposal, that went into the specification.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'https://v8.dev/features/function-tostring',
              comment: 'Blog post on the new `function.toString()`, on the v8 blog.',
              tags: [tag.ARTICLE]
            },
          ],
        },
      },
    },
    'JSON API': {
      items: {
        [es10.JSON_STRINGIFY.id]: {
          name: 'well-formed `JSON.stringify()`',
          description: '`JSON.stringify()` - now returns well-formed output',
          path: 'json-api/stringify',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          // publishDateUTC: toUtcDate(2020, date.NOVEMBER, 28, 0, 56),
          links: [
            {
              url: 'https://github.com/tc39/proposal-well-formed-stringify',
              comment: 'The proposal, that went into the specification.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'https://v8.dev/features/well-formed-json-stringify',
              comment: 'Blog post on the well-formed `JSON.stringify()`, on the v8 blog.',
              tags: [tag.ARTICLE]
            },
          ],
        },
      },
    },
    'JSON superset': {
      items: {
        [es10.JSON_SUPERSET_BASICS.id]: {
          name: 'JSON superset basics',
          description: 'JSON is now a syntactic subset of ECMAScript',
          path: 'json-superset/basics',
          level: SKILL_LEVEL.ADVANCED,
          requiresKnowledgeFrom: [],
          // publishDateUTC: toUtcDate(2020, date.NOVEMBER, 28, 0, 56),
          links: [
            {
              url: 'https://github.com/tc39/proposal-json-superset',
              comment: 'The proposal, that went into the specification.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'https://github.com/tc39/test262/pull/1544/files',
              comment: 'The merge request with the official tests for JavaScript (engines) for JSON superset.',
              tags: [tag.TESTS, tag.SOURCE_CODE]
            },
            {
              url: 'https://v8.dev/features/subsume-json',
              comment: 'Blog post on the the JSON superset, on the v8 blog.',
              tags: [tag.ARTICLE]
            },
          ],
        },
      },
    },
    'Symbol API': {
      items: {
        [es10.SYMBOL_DESCRIPTION.id]: {
          name: '`symbol.description`',
          description: 'A read-only description of a Symbol object.',
          path: 'symbol-api/description',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            es6.SYMBOL_BASICS,
            es6.SYMBOL_FOR,
            es6.SYMBOL_KEY_FOR,
          ],
          // publishDateUTC: toUtcDate(2020, date.NOVEMBER, 28, 0, 56),
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description',
              comment: 'Description of `symbol.description` on MDN.',
              tags: [tag.MDN, tag.DOCS]
            },
            {
              url: 'https://v8.dev/features/symbol-description',
              comment: 'Blog post on the the `symbol.description`, on the v8 blog.',
              tags: [tag.ARTICLE]
            },
            {
              url: 'https://tc39.es/ecma262/#sec-symbol.prototype.description',
              comment: 'The proposal, that went into the specification.',
              tags: [tag.SPECIFICATION]
            },
          ],
        },
      },
    },
    'try-catch': {
      items: {
        [es10.TRY_CATCH.id]: {
          name: 'unbinded `catch`',
          description: '`catch` can now be used without a binding',
          path: 'try-catch/catch',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [],
          // publishDateUTC: toUtcDate(2020, date.NOVEMBER, 28, 0, 56),
          links: [
            {
              url: 'https://tc39.es/proposal-optional-catch-binding/',
              comment: 'The proposal, that went into the specification.',
              tags: [tag.SPECIFICATION]
            },
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#the_exception_identifier',
              comment: 'Description of "The exception identifier" on MDN.',
              tags: [tag.MDN, tag.DOCS]
            },
            {
              url: 'https://v8.dev/features/optional-catch-binding',
              comment: 'Blog post on the the optional catch binding, on the v8 blog.',
              tags: [tag.ARTICLE]
            },
          ],
        },
      },
    },
  },
};
