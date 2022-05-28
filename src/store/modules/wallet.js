export default {
  namespaced: true,
  state: {
    coins: 45,
    stackedCoinFarm: false,
    coinsModal: false,
  },
  getters: {
    getCoins: (state) => state.coins,
    getStackMode: (state) => state.stackedCoinFarm,
    getCoinsModalState: (state) => state.coinsModal,
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
    ADD_COINS_FIXED: (state) => {
      const sum = state.stackedCoinFarm ? 5 : 1;
      if (state.coins + sum <= 100) {
        state.coins += sum;
      } else {
        state.coinsModal = !state.coinsModal;
      }
    },
    ADD_COINS_AMOUNT: (state, amount) => { state.coins += amount; },
    TAKE_COINS_AMOUNT: (state, amount) => { state.coins -= amount; },
    SWITCH_COINS_MODAL: (state) => { state.coinsModal = !state.coinsModal; },
  },
  actions: {
  },
  modules: {
  },
};
