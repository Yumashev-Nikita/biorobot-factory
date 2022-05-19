import { createStore } from 'vuex';
import Parts from './parts.json';

export default createStore({
  state: {
    coins: 45,
    stackedCoinFarm: false,
    parts: Parts,
  },
  getters: {
  },
  mutations: {
    switchStackMode(state) {
      state.stackedCoinFarm = !state.stackedCoinFarm;
    },
    farmCoins(state) {
      const amount = state.stackedCoinFarm ? 5 : 1;
      state.coins += amount;
    },
    addCoins(state, amount) {
      state.coins += amount;
    },
  },
  actions: {
  },
  modules: {
  },
});
