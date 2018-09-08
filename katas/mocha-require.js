global.assert = require('assert');

global.document = {
  createElement: () => {
    return new FakeDomNode();
  }
};

class FakeDomNode {
  constructor() {
    this.classList = new Set();
  }
}
