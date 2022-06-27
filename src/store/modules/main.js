export default {
  namespaced: true,
  state: {
    biohands_necessery: 2,
    microchips_necessery: 3,
    souls_necessery: 1,
    coins_necessery: 1,
    max_coins: 100,
    coins_gain_no_stackmode: 1,
    coins_gain_stackmode: 5,
  },
  getters: {
    getMaxCoins: (state) => state.max_coins,
    getBiohands: (state) => state.biohands_necessery,
    getMicrochips: (state) => state.microchips_necessery,
    getSouls: (state) => state.souls_necessery,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
};
