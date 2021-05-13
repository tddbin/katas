import {assertThat, throws, func, hasProperties} from 'hamjest';
import vanillaZustand from 'zustand/vanilla';
const create = typeof vanillaZustand === 'function' ? vanillaZustand : vanillaZustand.default;

describe('Zustand - the vanilla store (vanilla = pure JS)', () => {
  describe('creating a store, and it`s API', () => {
    it('WHEN calling `create()` without any parameter THEN it throws', () => {
      assertThat(() => { create(); }, throws());
    });
    describe('WHEN `create()` returns a new store', () => {
      it('THEN the store has `getState()` and `setState()`', () => {
        const store = create(() => {});
        assertThat(store.getState, func('function'));
        assertThat(store.setState, func('function'));
      });
      it('AND it provides `destroy()` and `subscribe()`', () => {
        const store = create(() => {});
        assertThat(store.destroy, func('function'));
        assertThat(store.subscribe, func('function'));
      });
    });
  });

  describe('initial state via `create()`', () => {
    it('WHEN given an initial state THEN it can be retreived via `getState()`', () => {
      const initialState = {color: 'blue'};
      const store = create(() => initialState);
      assertThat(store.getState(), hasProperties({color: 'blue'}));
    });
    it('WHEN given no initial state (`undefined`) THEN `getState()` returns exactly `undefined`', () => {
      const initialState = undefined;
      const store = create(() => initialState);
      assertThat(store.getState(), undefined);
    });
  });

  describe('updating state via `setState()`', () => {
    it('WHEN calling `setState()` with one property THEN it is overriden in the state', () => {
      const store = create(() => ({color: 'blue'}));
      assertThat(store.getState(), {color: 'blue'});
      store.setState({color: 'red'});
      assertThat(store.getState(), {color: 'red'});
    });
    it('WHEN updating the store partially THEN it automatically gets merged with the old state', () => {
      const initialState = {color: 'green'};
      const store = create(() => initialState);
      const partialNewState = {backgroundColor: 'white'};
      store.setState(partialNewState);
      assertThat(store.getState(), {
        color: 'green',
        backgroundColor: 'white',
      });
    });
    it('WHEN updating the store THEN it is NOT deep-merged', () => {
      const store = create(() => ({border: {width: 1, color: 'blue'}}));
      store.setState({border: {color: 'red'}});
      assertThat(store.getState(), {
        // Notice, the `width` key was removed!
        border: {color: 'red'}});
    });
    it('WHEN deep-merging is needed THEN do it manually, get the old state first and merge it in', () => {
      const store = create(() => ({border: {width: 1, color: 'blue'}}));
      const oldBorder = store.getState().border;
      store.setState({border: {...oldBorder, color: 'red'}});
      assertThat(store.getState(), {
        border: {width: 1, color: 'red'}});
    });
  });

  describe('updating state via custom functions (aka "actions")', () => {
    it('an action can be inside the initial state', () => {
      const {getState} = create((set) => ({
        blue: 'not red',
        modifyBlue: () => { set({blue: 'but blue'}); }
      }));
      getState().modifyBlue();
      assertThat(getState().blue, 'but blue');
    });
    it('the action can also NOT be in the initial state object', () => {
      const store = create(() => ({
        blue: 'not red',
      }));
      const modifyBlue = () => {
        store.setState({blue: 'but blue'});
      };
      modifyBlue();
      assertThat(store.getState().blue, 'but blue');
    });
  });
});
