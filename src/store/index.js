import { createStore } from 'vuex';

import cryptoWallet from './modules/cryptoWallet';

export default createStore({
  actions: {
    farmAndCase({ commit }) {
      commit('farmCoins');
      commit('caseText');
    },
  },
  modules: {
    cW: cryptoWallet,
  },
});
