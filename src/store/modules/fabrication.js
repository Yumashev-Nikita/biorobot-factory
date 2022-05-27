/* eslint-disable prefer-template, prefer-const */

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
      const biohandsAmount = state.biohands;
      const microchipsAmount = state.microchips;
      const soulsAmount = state.souls;
      const balance = getters['wallet/getCoins'];
      let finalText = ['Для производства биоробота не хватает '];
      if (biohandsAmount === 4 && microchipsAmount === 4 && soulsAmount === 1 && balance > 10) {
        finalText[0] = 'Для производства биоробота всего хватает';
      } else {
        let isFirst = true;
        if (biohandsAmount !== 4) {
          const bhReq = 4 - biohandsAmount;
          finalText.push(bhReq + ' биорук' + (bhReq === 1 ? 'и' : ''));
          isFirst = false;
        }
        if (microchipsAmount !== 4) {
          const mcrReq = 4 - microchipsAmount;
          if (!isFirst) finalText.push(', ');
          finalText.push(mcrReq + ' микрочип' + (mcrReq === 2 || mcrReq === 1 ? 'a' : 'ов'));
        }
        if (soulsAmount !== 1) {
          const soulReq = 1 - soulsAmount;
          if (!isFirst) finalText.push(', ');
          finalText.push(soulReq + ' души');
        }
        if (balance < 10) {
          if (!isFirst) finalText.push(', ');
          finalText.push('денег');
        }
      }
      let index = finalText.lastIndexOf(', ');
      finalText[index] = ' и ';
      return finalText.join('') + '.';
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
