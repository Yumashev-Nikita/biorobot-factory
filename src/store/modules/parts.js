export default {
  namespaced: true,
  state: {
    parts: [
      {
        name: 'biohand', amount: 2, buycost: 7, sellcost: 5,
      },
      {
        name: 'microchip', amount: 2, buycost: 5, sellcost: 3,
      },
      {
        name: 'soul', amount: 2, buycost: 25, sellcost: 15,
      },
    ],
  },
  getters: {
    getBiohandBuyCost(state) {
      return state.parts[0].buycost;
    },
    getMicrochipBuyCost(state) {
      return state.parts[1].buycost;
    },
    getSoulBuyCost(state) {
      return state.parts[2].buycost;
    },
    getBiohandSellCost(state) {
      return state.parts[0].sellcost;
    },
    getMicrochipSellCost(state) {
      return state.parts[1].sellcost;
    },
    getSoulSellCost(state) {
      return state.parts[2].sellcost;
    },
  },
  actions: {
    buyBiohand: {
      root: true,
      handler(namespacedContext) {
        namespacedContext.commit('cryptowallet/SET_COINS_TAKE_AMOUNT', this.getters['parts/getBiohandBuyCost'], { root: true });
        namespacedContext.commit('cryptowallet/SET_TEXT_CASE', null, { root: true });
      },
    },
    buyMicrochip: {
      root: true,
      handler(namespacedContext) {
        namespacedContext.commit('cryptowallet/SET_COINS_TAKE_AMOUNT', this.getters['parts/getMicrochipBuyCost'], { root: true });
        namespacedContext.commit('cryptowallet/SET_TEXT_CASE', null, { root: true });
      },
    },
    buySoul: {
      root: true,
      handler(namespacedContext) {
        namespacedContext.commit('cryptowallet/SET_COINS_TAKE_AMOUNT', this.getters['parts/getSoulBuyCost'], { root: true });
        namespacedContext.commit('cryptowallet/SET_TEXT_CASE', null, { root: true });
      },
    },
    sellBiohand: {
      root: true,
      handler(namespacedContext) {
        namespacedContext.commit('cryptowallet/SET_COINS_ADD_AMOUNT', this.getters['parts/getBiohandSellCost'], { root: true });
        namespacedContext.commit('cryptowallet/SET_TEXT_CASE', null, { root: true });
      },
    },
    sellMicrochip: {
      root: true,
      handler(namespacedContext) {
        namespacedContext.commit('cryptowallet/SET_COINS_ADD_AMOUNT', this.getters['parts/getMicrochipSellCost'], { root: true });
        namespacedContext.commit('cryptowallet/SET_TEXT_CASE', null, { root: true });
      },
    },
    sellSoul: {
      root: true,
      handler(namespacedContext) {
        namespacedContext.commit('cryptowallet/SET_COINS_ADD_AMOUNT', this.getters['parts/getSoulSellCost'], { root: true });
        namespacedContext.commit('cryptowallet/SET_TEXT_CASE', null, { root: true });
      },
    },
  },
};
