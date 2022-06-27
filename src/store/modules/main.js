export default {
  namespaced: true,
  state: {
    biohands_necessery: 8,
    microchips_necessery: 8,
    souls_necessery: 2,
    coins_necessery: 10,
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
