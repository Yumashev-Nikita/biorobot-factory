/* eslint-disable prefer-template */

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
  },
};
