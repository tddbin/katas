// ES10 - 3: string.trimStart
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

/**
 * - [x] trimStart === trimLeft
 * - [x] leaves the original string unchanged
 * - [x] utf8?
 * - [ ] used on other types?
 * - [ ] `this = not a string`
 * - [ ] trim whitespace and linebreaks
 * - [ ] is there a utf16 space?
 *

 > String.prototype.trimStart.call(' v')
 "v"
 > String.prototype.trimStart.call({})
 "[object Object]"
 > String.prototype.trimStart.call({'': ' eins'})
 "[object Object]"
 > String.prototype.trimStart.call({toString: () => ' f   nix'})
 "f   nix"

 > String.prototype.trimStart.call(null)
 TypeError
 */

describe('`string.trimStart()` removes whitespace from the beginning of a string', () => {
});
