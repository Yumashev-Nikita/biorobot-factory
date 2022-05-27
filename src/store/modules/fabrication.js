/* eslint-disable prefer-template */
import WALLET from './wallet';

export default {
  namespaced: true,
  state: {
    type: true,
    gender: true,
    biohands: 0,
    microchips: 0,
    souls: 0,
  },
  getters: {
    getType: (state) => state.type,
    getGender: (state) => state.gender,
    getFuncText: (state, getters) => {
      let funcText = 'Для производства биоробота не хватает ';
      const biohandsAmount = state.biohands;
      const microchipsAmount = state.microchips;
      const soulsAmount = state.souls;
      console.log(biohandsAmount, microchipsAmount, soulsAmount, getters['wallet/getCoins']);
      if (biohandsAmount === 4 && microchipsAmount === 4 && soulsAmount === 1 && getters['wallet/getCoins'] > 10) {
        funcText = 'Для производства биоробота всего хватает.';
      }
      return funcText;
    },
  },
  mutations: {
    SWITCH_TYPE: (state) => { state.type = !state.type; },
    SWITCH_GENDER: (state) => { state.gender = !state.gender; },
    ADD_PART_TO_FAB(state, partname) {
      switch (partname) {
        case 'biohand': {
          state.biohands += 1;
          break;
        }
        case 'microchip': {
          state.microchips += 1;
          break;
        }
        case 'soul': {
          state.souls += 1;
          break;
        }
        default: {
          break;
        }
      }
    },
    TAKE_PART_FROM_FAB(state, partname) {
      switch (partname) {
        case 'biohand': {
          state.biohands -= 1;
          break;
        }
        case 'microchip': {
          state.microchips -= 1;
          break;
        }
        case 'soul': {
          state.souls -= 1;
          break;
        }
        default: {
          break;
        }
      }
    },
  },
  actions: {
    getPart: {
      root: true,
      handler(namespacedContext, partname) {
        namespacedContext.commit(partname + '/TAKE', null, { root: true });
        namespacedContext.commit('ADD_PART_TO_FAB', partname);
      },
    },
    putPart: {
      root: true,
      handler(namespacedContext, partname) {
        namespacedContext.commit(partname + '/ADD', null, { root: true });
        namespacedContext.commit('TAKE_PART_FROM_FAB', partname);
      },
    },
  },
  modules: {
    wallet: WALLET,
  },
};
