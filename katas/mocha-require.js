global.assert = require('assert');

global.document = {
  createElement: () => {
    return new FakeDomNode();
  },
  domain: 'tddbin.com',
};

class FakeDomNode {
  constructor() {
    this.classList = new Set();
  }
}
