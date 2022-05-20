import Parts from '../parts.json' assert {type: 'json'};

export default {
  namespaced: true,
  state: {
    parts: Parts,
  },
  actions: {
    buyBiohand: {
      root: true,
      handler(namespacedContext) {
        namespacedContext.commit('cryptowallet/SET_COINS_TAKE_AMOUNT', Parts.biohand.buycost, { root: true });
      },
    },
    buyMicrochip: {
      root: true,
      handler(namespacedContext) {
        namespacedContext.commit('cryptowallet/SET_COINS_TAKE_AMOUNT', this.parts.microchip.buycost, { root: true });
      },
    },
    buySoul: {
      root: true,
      handler(namespacedContext) {
        namespacedContext.commit('cryptowallet/SET_COINS_TAKE_AMOUNT', this.parts.soul.buycost, { root: true });
      },
    },
  },
};
