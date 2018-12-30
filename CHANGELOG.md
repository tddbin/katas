- [ ] Deploy `<kataname>.spec.js` files too (the passing tests).
- [ ] Add release script which also handles the changelog.
- [ ] Verify that all katafied tests fail (the katafication does really create failing tests).
- [ ] Remove lines which only have `////` and nothing beyond (I have not seen a case where I would not remove that line).
- [ ] Fix vulnerabilities that GH shows.
- [ ] Test if katafication results in invalid JS code (as happened for multiline kata)
- [ ] Test if every test has the katafy part in it

# v2

- [x] Katafy the spread katas
- [x] Improve spread katas and add more meta data
- [ ] Katafy the iterator katas
- [ ] Katafy the ... katas
- [ ] Fix `PromiseRejectionHandledWarning` thrown when `npm test` runs
