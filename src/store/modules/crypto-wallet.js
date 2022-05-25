export default {
  namespaced: true,
  state: {
    coins: 45,
    balanceTextCased: 'монет',
    stackedCoinFarm: false,
  },
  getters: {
  },
  mutations: {
    SWITCH_STACK_MODE: (state) => {
      console.log('SWITCH_STACK_MODE', 'TO', !state.stackedCoinFarm);
      state.stackedCoinFarm = !state.stackedCoinFarm;
    },
    ADD_COINS_FIXED: (state) => {
      const amount = state.stackedCoinFarm ? 5 : 1;
      console.log('ADD_COINS_FIXED', amount);
      state.coins += amount;
    },
    ADD_COINS_AMOUNT: (state, amount) => {
      console.log('ADD_COINS_AMOUNT', amount);
      state.coins += amount;
    },
    TAKE_COINS_AMOUNT: (state, amount) => {
      console.log('TAKE_COINS_AMOUNT', amount);
      state.coins -= amount;
    },
    SET_TEXT_CASE: (state) => {
      console.log('SET_TEXT_CASE');
      if (state.coins >= 11 && state.coins <= 19) {
        state.balanceTextCased = 'монет';
      } else if (state.coins % 10 >= 2 && state.coins % 10 <= 4) {
        state.balanceTextCased = 'монеты';
      } else if (state.coins % 10 === 1) {
        state.balanceTextCased = 'монета';
      } else {
        state.balanceTextCased = 'монет';
      }
    },
  },
  actions: {
    farmCoins: {
      root: true,
      handler(namespacedContext) {
        namespacedContext.commit('ADD_COINS_FIXED');
        namespacedContext.commit('SET_TEXT_CASE');
      },
    },
    setStackMode: {
      root: true,
      handler(namespacedContext) {
        namespacedContext.commit('SWITCH_STACK_MODE');
      },
    },
  },
  modules: {
  },
};
