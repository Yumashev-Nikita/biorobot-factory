export default {
  namespaced: true,
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    buyBiohand: {
      root: true,
      handler(namespacedContext) {
        namespacedContext.commit('cryptowallet/TAKE_COINS_AMOUNT', this.getters['parts/getBiohandBuyCost'], { root: true });
        namespacedContext.commit('parts/ADD_BIOHAND', null, { root: true });
        if (this.getters['parts/getBiohandAmount'] === 1) {
          namespacedContext.commit('fabrication/SWITCH_DISABLE_BIOHAND', null, { root: true });
        }
        namespacedContext.commit('cryptowallet/SET_TEXT_CASE', null, { root: true });
      },
    },
    buyMicrochip: {
      root: true,
      handler(namespacedContext) {
        namespacedContext.commit('cryptowallet/TAKE_COINS_AMOUNT', this.getters['parts/getMicrochipBuyCost'], { root: true });
        namespacedContext.commit('parts/ADD_MICROCHIP', null, { root: true });
        if (this.getters['parts/getMicrochipAmount'] === 1) {
          namespacedContext.commit('fabrication/SWITCH_DISABLE_MICROCHIP', null, { root: true });
        }
        namespacedContext.commit('cryptowallet/SET_TEXT_CASE', null, { root: true });
      },
    },
    buySoul: {
      root: true,
      handler(namespacedContext) {
        namespacedContext.commit('cryptowallet/TAKE_COINS_AMOUNT', this.getters['parts/getSoulBuyCost'], { root: true });
        namespacedContext.commit('parts/ADD_SOUL', null, { root: true });
        if (this.getters['parts/getSoulAmount'] === 1) {
          namespacedContext.commit('fabrication/SWITCH_DISABLE_SOUL', null, { root: true });
        }
        namespacedContext.commit('cryptowallet/SET_TEXT_CASE', null, { root: true });
      },
    },
  },
  modules: {
  },
};
