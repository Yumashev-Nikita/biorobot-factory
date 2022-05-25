export default {
  namespaced: true,
  state: {
    amount: 2,
    buycost: 5,
    sellcost: 3,
    marketDisable: false,
    storageDisable: false,
    fabDisable: false,
  },
  getters: {
    getAmount: (state) => state.amount,
    getBuycost: (state) => state.buycost,
    getSellcost: (state) => state.sellcost,
    getFabState: (state) => state.fabDisable,
    getMarketState: (state) => state.marketDisable,
    getStorageState: (state) => state.storageDisable,
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
  },
};
