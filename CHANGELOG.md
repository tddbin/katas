# Todos, Ideas, etc.
- [ ] Deploy `<kataname>.spec.js` files too (the passing tests).
- [ ] Verify that all katafied tests fail (the katafication does really create failing tests).
- [ ] Remove lines which only have `////` and nothing beyond (I have not seen a case where I would not remove that line).
- [ ] Fix vulnerabilities that GH shows.
- [ ] Test if katafication results in invalid JS code (as happened for multiline kata)
- [ ] Test if every test has the katafy part in it

# version 2
- [ ] Fix names for various katas, many miss the "API" prefix, like "es6 " map, promise, set, ...
- [ ] write kata for ES1 `parseInt()` in depth
- [x] move ES1 array katas into directory `array-api` as ADR5 defines
- [x] write kata for ES1 `parseInt()`
- [x] write kata for ES6 `Number.parseInt()`
- [x] Katafy (and improve) the spread katas
- [x] Katafy (and improve) the string-api katas
- [ ] Katafy (and improve) the iterator katas
- [x] Katafy (and improve) the tagged template strings katas
- [x] Katafy the unicode in strings katas
- [x] Fix `PromiseRejectionHandledWarning` thrown when `npm test` runs
- [x] Add release script which also handles the changelog.
- [x] Clean up coding style according to ADR#1.
- [x] Fix: Improve one of the promise/api katas
- [x] Use the package for the CHANGELOG checking (it is https://github.com/wolframkriesing/to-do-list-checker)
- [x] Deploy the katas for ES1, ES8 and hamjest
- [x] Rename TDDBIN_ROOT_DOMAIN to TDDBIN_ROOT_URL and store the URL in there, not just the domain, since we moved to HTTPS
- [ ] Finish the kata-naming ADR5
- [ ] Finish the kata dependencies ADR6
- [x] Split out the in-depth `Object.fromEntries()` kata, see ADR4