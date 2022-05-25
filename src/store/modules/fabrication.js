export default {
  namespaced: true,
  state: {
    type: 'design',
    gender: 'male',
    isDisableBiohand: false,
    isDisableMicrochip: false,
    isDisableSoul: false,
  },
  getters: {
  },
  mutations: {
    SWITCH_DISABLE_BIOHAND(state) {
      state.isDisableBiohand = !state.isDisableBiohand;
    },
    SWITCH_DISABLE_MICROCHIP(state) {
      state.isDisableMicrochip = !state.isDisableMicrochip;
    },
    SWITCH_DISABLE_SOUL(state) {
      state.isDisableSoul = !state.isDisableSoul;
    },
  },
  actions: {
    switchDisableBiohand: {
      root: true,
      handler(namespacedContext) {
        namespacedContext.dispatch('parts/SWITCH_DISABLE_BIOHAND', null, { root: true });
      },
    },
    addBiohand: {
      root: true,
      handler(namespacedContext) {
        namespacedContext.commit('parts/ADD_BIOHAND');
      },
    },
    addMicrochip: {
      root: true,
      handler(namespacedContext) {
        namespacedContext.commit('parts/ADD_MICROCHIP');
      },
    },
    addSoul: {
      root: true,
      handler(namespacedContext) {
        namespacedContext.commit('parts/ADD_SOUL');
      },
    },
    takeBiohand: {
      root: true,
      handler(namespacedContext) {
        namespacedContext.commit('parts/TAKE_BIOHAND');
      },
    },
    takeMicrochip: {
      root: true,
      handler(namespacedContext) {
        namespacedContext.commit('parts/TAKE_MICROCHIP');
      },
    },
    takeSoul: {
      root: true,
      handler(namespacedContext) {
        namespacedContext.commit('parts/TAKE_SOUL');
      },
    },
  },
  modules: {
  },
};
