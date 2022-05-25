/* eslint-disable prefer-template */

export default {
  namespaced: true,
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    buyPart: {
      root: true,
      handler(namespacedContext, partname) {
        namespacedContext.commit(partname + '/ADD', null, { root: true });
        namespacedContext.commit('wallet/TAKE_COINS_AMOUNT', this.getters[partname + '/getBuyCost'], { root: true });
      },
    },
    sellPart: {
      root: true,
      handler(namespacedContext, partname) {
        namespacedContext.commit(partname + '/TAKE', null, { root: true });
        namespacedContext.commit('wallet/ADD_COINS_AMOUNT', this.getters[partname + '/getSellCost'], { root: true });
      },
    },
  },
  modules: {
  },
};
