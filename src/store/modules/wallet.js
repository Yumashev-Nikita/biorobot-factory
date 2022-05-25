export default {
  namespaced: true,
  state: {
    coins: 45,
    stackedCoinFarm: false,
  },
  getters: {
    getCoins: (state) => state.coins,
    getStackMode: (state) => state.stackedCoinFarm,
    getTextCased: (state) => {
      let textCased = 'монет';
      if (state.coins >= 11 && state.coins <= 19) {
        textCased = 'монет';
      } else if (state.coins % 10 >= 2 && state.coins % 10 <= 4) {
        textCased = 'монеты';
      } else if (state.coins % 10 === 1) {
        textCased = 'монета';
      } else {
        textCased = 'монет';
      }
      return textCased;
    },
  },
  mutations: {
    SWITCH_STACK_MODE: (state) => { state.stackedCoinFarm = !state.stackedCoinFarm; },
    ADD_COINS_FIXED: (state) => { state.coins += state.stackedCoinFarm ? 5 : 1; },
    ADD_COINS_AMOUNT: (state, amount) => { state.coins += amount; },
    TAKE_COINS_AMOUNT: (state, amount) => { state.coins -= amount; },
  },
  actions: {
    farmCoins: {
      root: true,
      handler(namespacedContext) {
        namespacedContext.commit('ADD_COINS_FIXED');
      },
    },
    switchStackMode(namespacedContext) {
      namespacedContext.commit('SWITCH_STACK_MODE');
    },
  },
  modules: {
  },
};
