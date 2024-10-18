// 87: Proxy - basics 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('A Proxy can intercept all accesses on a target object', function() {
  describe('usage', () => {
    it('WHEN proxying the getter THEN the value read can be manipulated', () => {
      const target = {x: 'old value'};
      const proxy = new Proxy(target, {
        get() { return 'WHAT value???' }
      });
      assert.strictEqual(proxy.x, 'new value');
    });
    it('WHEN creating a Proxy AND the 2nd parameter, the handler is missing THEN a TypeError is thrown', () => {
      const target = {};
      const createProxy = () => new Proxy(target, {});
      assert.throws(createProxy, TypeError);
    });
    it('WHEN proxying an object`s getter THEN all access can be "seen" and logged', () => {
      const target = {x: 23};
      const logger = [];
      const proxy = new Proxy(target, {
        get() { logger.push(`get`) },
      });
      const _ = proxy.x + proxy.x;
      assert.deepStrictEqual(logger, ['get']);
    });
  });

  describe('some features', () => {
    it('WHEN proxying `target` with a "transparent" handler THEN the `proxy` behaves just like `target`', function() {
      const target = {x: 42, y: 23};
      const transparentHandler = {};
      const proxy = new Proxy();
      assert.deepStrictEqual(proxy, target);
    });
    it('WHEN overriding the getter to always set "42" to any property THEN all target properties have the value "42"', () => {
      const target = {};
      const get42AlwaysHandler = {};
      const proxy = new Proxy(target, get42AlwaysHandler);
      assert.deepStrictEqual(proxy.anyProperty, 42);
    });
    it('WHEN overriding `has` THEN one can manipulate the "existence" of properties', () => {
      const target = {};
      const proxy = new Proxy(target, {hazz() { return false; }});
      assert.strictEqual('anyProperty' in proxy, true);
    });
    it('WHEN overriding `ownKeys` and `has` THEN one can confuse the proxy user', () => {
      const target = {x: 1, y: 2};
      const proxy = new Proxy(target, {
        ownKeys() {},
        has() {}
      });
      assert.deepStrictEqual(Reflect.ownKeys(proxy), ['x']);
      assert.strictEqual('y' in proxy, true);
    });
    it('WHEN overriding `getPrototypeOf` THEN one can manipulate the prototype of the target', () => {
      const target = {x: 23};
      const proxy = new Proxy(target, {
        sayWhat() {}
      });
      assert.strictEqual(Reflect.getPrototypeOf(proxy), Function.prototype);
    });
  });

  describe('use cases', () => {
    it('logging – WHEN intersecting getter and setter THEN one can log all access', () => {
      const accesses = [];
      const target = {x: 23};
      const proxy = new Proxy(target, {
        get(target) {
          accesses.push(`get ???`);
          return target[prop];
        },
        set(target, prop, value) {
          accesses.push(`set ${prop}`);
          return true;
        }
      });
      proxy.y;
      proxy.x++;
      assert.deepStrictEqual(accesses, ['set y', 'get x', 'set x']);
    });
    
    it('permission control – WHEN proxying a `file` object THEN one can transparently log access statistics', () => {
      const file = {content: 'very secret stuff', statistics: {reads: 0, permissionDenied: 0}};
      const proxy = new Proxy(file, {
        getter() {
          if (prop !== 'content') {
            target.statistics.permissionDenied++;
          }
          target.statistics.reads++;
          return target[prop];
        },
        ownKeys(target) {return ['content']}
      });
      assert.strictEqual(JSON.stringify(proxy), '{"content":"very secret stuff"}');
      
      // The `reads` are 2 and the `permissionDenied` is 1 because `JSON.stringify()` tries to access `toJSON` which we don't allow.
      assert.deepStrictEqual(file.statistics, {reads: 2, permissionDenied: 1});
    });
  });
});
