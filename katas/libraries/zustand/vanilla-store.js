import {assertThat, throws, func, hasProperties} from 'hamjest';
import vanillaZustand from 'zustand/vanilla';
const create = typeof vanillaZustand === 'function' ? vanillaZustand : vanillaZustand.default;

describe('Zustand - the vanilla store', () => {
  describe('the `create()` function and the API', () => {
    it('fails when it does NOT get an intial-state function as param', () => {
      assertThat(() => { create(); }, throws());
    });
    it('returns a store with the functions `getState()` and `setState()`', () => {
      const store = create(() => {});
      assertThat(store.getState, func('function'));
      assertThat(store.setState, func('function'));
    });
    it('returns a `destroy()` and `subscribe()` function too', () => {
      const store = create(() => {});
      assertThat(store.destroy, func('function'));
      assertThat(store.subscribe, func('function'));
    });
  });

  describe('initial state handling', () => {
    const store = create(() => ({color: 'blue'}));
    it('the initial state as passed can be retreived via `getState()`', () => {
      assertThat(store.getState(), hasProperties({color: 'blue'}));
    });
  });

  describe('updating state', () => {
    it('use `setState()` to update a property in the state', () => {
      const store = create(() => ({color: 'blue'}));
      assertThat(store.getState(), {color: 'blue'});

      store.setState({color: 'red'});
      assertThat(store.getState(), {color: 'red'});
    });
    it('the store can be updated partially', () => {
      const store = create(() => ({color: 'green'}));
      store.setState({backgroundColor: 'white'});
      assertThat(store.getState(), {
        color: 'green', backgroundColor: 'white',
      });
    });
  });

  describe('actions', () => {
    it('the action to modify the state can be inside the initial state', () => {
      const {getState} = create((set) => ({
        blue: 'not red',
        modifyBlue: () => { set({blue: 'but blue'}); }
      }));
      getState().modifyBlue();
      assertThat(getState().blue, 'but blue');
    });
    it('the action to modify the state can also NOT be in the initial state object', () => {
      const store = create(() => ({
        blue: 'not red',
      }));
      const modifyBlue = () => {
        store.setState({blue: 'but blue'});
      }
      modifyBlue();
      assertThat(store.getState().blue, 'but blue');
    });
  });
});
