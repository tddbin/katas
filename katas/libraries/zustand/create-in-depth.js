import {assertThat, throws, hasProperties, func as isFunction} from 'hamjest';
import vanillaZustand from 'zustand/vanilla';
const create = typeof vanillaZustand === 'function' ? vanillaZustand : vanillaZustand.default;

describe('the `create()` function (for creating a store) in depth', () => {
  describe('GIVEN `create()` is called', () => {
    describe('how it fails', () => {
      it('WHEN given no argument THEN it throws', () => {
        assertThat(() => { create(); }, throws());
      });
      it('WHEN not given something different than a function THEN it throws', () => {
        assertThat(() => { create('not a function'); }, throws());
      });
      it('WHEN given a function that throws THEN it throws', () => {
        assertThat(() => { create(() => { throw Error(''); }); }, throws());
      });
    });
    describe('how it works', () => {
      it('WHEN a store is created THEN its of type=object', () => {
        const store = create(() => {});
        assertThat(typeof store, 'object');
      });
      it('WHEN a store is created THEN it provides four functions', () => {
        const store = create(() => {});
        assertThat(store, hasProperties({
          getState: isFunction(),
          setState: isFunction(),
          subscribe: isFunction(),
          destroy: isFunction(),
        }));
      });
      it('WHEN creating a store THEN the initial object (as reference) is kept', () => {
        const obj = {initial: {store: 'data'}};
        const store = create(() => obj);
        assertThat(store.getState() === obj, true);
      });
      it('WHEN a store was updated (at least once) THEN `getState()` returns a different object', () => {
        const obj = {initial: 'state'};
        const store = create(() => obj);
        store.setState({initial: 'state'});
        assertThat(store.getState() === obj, false);
      });
    });
  });
  describe('GIVEN a `createState` function (the function passed to `create()`)', () => {
    it('WHEN the `createState` function is missing THEN zustand reminds us', () => {
      assertThat(
        () => { create(); },
        throws(hasProperties({message: 'createState is not a function'}))
      );
    });
    it('WHEN a first parameter `setState` is given THEN this can be used to modify the store', () => {
      const store = create((setState) => {
        return {
          number: 42,
          modifyState: () => setState({number: 23}),
        };
      });
      assertThat(store.getState().number, 42);
      store.getState().modifyState();
      assertThat(store.getState().number, 23);
    });
    it('WHEN a 2nd parameter `getState` is given THEN this can be used to read the state', () => {
      const store = create((_, getState) => {
        return {
          numbers: [23, 42],
          all: () => { return getState(); },
        };
      });
      const state = store.getState();
      assertThat(state.all().numbers, [23, 42]);
    });
    it('WHEN a property is a getter THEN `getState()` comes in handy', () => {
      const store = create((_, getState) => {
        return {
          numbers: [23, 42],
          get allNumbers() { return getState().numbers; },
        };
      });
      const state = store.getState();
      assertThat(state.allNumbers, [23, 42]);
    });
    it('WHEN a 3rd parameter is given THEN it contains the entire API, just like the store itself', () => {
      const store = create((_1, _2, api) => {
        return {
          get theApi() { return api; },
        }
      });
      assertThat(store === store.getState().theApi, true);
    });
  });
});
