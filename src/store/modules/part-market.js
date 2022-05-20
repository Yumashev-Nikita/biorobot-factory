export default {
  namespaced: true,
  actions: {
    buyBiohand: {
      root: true,
      handler(namespacedContext) {
        namespacedContext.commit('cW/SET_COINS_TAKE_AMOUNT', 7, { root: true });
      },
    },
    buyMicrochip: {
      root: true,
      handler(namespacedContext) {
        namespacedContext.commit('cW/SET_COINS_TAKE_AMOUNT', 5, { root: true });
      },
    },
    buySoul: {
      root: true,
      handler(namespacedContext) {
        namespacedContext.commit('cW/SET_COINS_TAKE_AMOUNT', 25, { root: true });
      },
    },
  },
};
