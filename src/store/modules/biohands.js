import WALLET from './wallet';

export default {
  namespaced: true,
  state: {
    amount: 2,
    buycost: 7,
    sellcost: 5,
  },
  getters: {
    getAmount: (state) => state.amount,
    getBuyCost: (state) => state.buycost,
    getSellCost: (state) => state.sellcost,
    getZeroState: (state) => state.amount === 0,
    getMarketState: (state, getters) => {
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
    marketSwitch: (state) => { state.marketDisable = !state.marketDisable; },
    storageSwitch: (state) => { state.storageDisable = !state.storageDisable; },
    fabSwitch: (state) => { state.fabDisable = !state.fabDisable; },
  },
  actions: {
  },
  modules: {
    wallet: WALLET,
  },
};
