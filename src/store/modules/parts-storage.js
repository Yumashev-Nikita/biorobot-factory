export default {
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    sellBiohand: {
      root: true,
      handler(namespacedContext) {
        console.log(this.getters['parts/getBiohandAmount']);
        if (this.getters['parts/getBiohandAmount'] > 0) {
          namespacedContext.commit('cryptowallet/ADD_COINS_AMOUNT', this.getters['parts/getBiohandSellCost'], { root: true });
          namespacedContext.commit('parts/TAKE_BIOHAND', null, { root: true });
          namespacedContext.commit('cryptowallet/SET_TEXT_CASE', null, { root: true });
          if (this.getters['parts/getBiohandAmount'] === 0) {
            namespacedContext.commit('fabrication/SWITCH_DISABLE_BIOHAND', null, { root: true });
          }
        }
      },
    },
    sellMicrochip: {
      root: true,
      handler(namespacedContext) {
        console.log(this.getters['parts/getMicrochipAmount']);
        if (this.getters['parts/getMicrochipAmount'] > 0) {
          namespacedContext.commit('cryptowallet/ADD_COINS_AMOUNT', this.getters['parts/getMicrochipSellCost'], { root: true });
          namespacedContext.commit('parts/TAKE_MICROCHIP', null, { root: true });
          namespacedContext.commit('cryptowallet/SET_TEXT_CASE', null, { root: true });
          if (this.getters['parts/getMicrochipAmount'] === 0) {
            namespacedContext.commit('fabrication/SWITCH_DISABLE_MICROCHIP', null, { root: true });
          }
        }
      },
    },
    sellSoul: {
      root: true,
      handler(namespacedContext) {
        console.log(this.getters['parts/getSoulAmount']);
        if (this.getters['parts/getSoulAmount'] > 0) {
          namespacedContext.commit('cryptowallet/ADD_COINS_AMOUNT', this.getters['parts/getSoulSellCost'], { root: true });
          namespacedContext.commit('parts/TAKE_SOUL', null, { root: true });
          namespacedContext.commit('cryptowallet/SET_TEXT_CASE', null, { root: true });
          if (this.getters['parts/getSoulAmount'] === 0) {
            namespacedContext.commit('fabrication/SWITCH_DISABLE_SOUL', null, { root: true });
          }
        }
      },
    },
  },
  modules: {
  },
};
