import WALLET from './wallet';

export default {
  namespaced: true,
  state: {
    amount: 2,
    buycost: 25,
    sellcost: 15,
  },
  getters: {
    getAmount: (state) => state.amount,
    getBuyCost: (state) => state.buycost,
    getSellCost: (state) => state.sellcost,
    getSellState: (state) => state.amount === 0,
    getBuyState: (state, getters) => {
      console.log(getters['wallet/getCoins']);
      let marketDisable = false;
      if (getters['wallet/getCoins'] < state.buycost) {
        marketDisable = true;
      }
      return marketDisable;
    },
  },
  mutations: {
    ADD: (state) => { state.amount += 1; },
    TAKE: (state) => { state.amount -= 1; },
  },
  actions: {
  },
  modules: {
    wallet: WALLET,
  },
};
