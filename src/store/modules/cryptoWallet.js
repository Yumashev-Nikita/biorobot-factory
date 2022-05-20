export default {
  state: {
    coins: 45,
    balanceTextCased: 'монет',
    stackedCoinFarm: false,
  },
  getters: {
  },
  mutations: {
    switchStackMode(state) {
      console.log('switchStackMode', 'from', state.stackedCoinFarm, 'to', !state.stackedCoinFarm);
      state.stackedCoinFarm = !state.stackedCoinFarm;
    },
    farmCoins(state) {
      const amount = state.stackedCoinFarm ? 5 : 1;
      console.log('farmCoins', amount);
      state.coins += amount;
    },
    addCoins(state, amount) {
      console.log('addCoins', amount);
      state.coins += amount;
    },
    caseText(state) {
      console.log('caseText');
      if (state.coins >= 11 && state.coins <= 19) {
        console.log('cond1');
        state.balanceTextCased = 'монет';
      } else if (state.coins % 10 >= 2 && state.coins % 10 <= 4) {
        console.log('cond2');
        state.balanceTextCased = 'монеты';
      } else if (state.coins % 10 === 1) {
        console.log('cond3');
        state.balanceTextCased = 'монета';
      } else {
        console.log('cond4');
        state.balanceTextCased = 'монет';
      }
    },
  },
  actions: {
  },
  modules: {
  },
};
