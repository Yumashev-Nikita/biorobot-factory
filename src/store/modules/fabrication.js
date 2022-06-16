/* eslint-disable prefer-const */

import WALLET from './wallet';

export default {
  namespaced: true,
  state: {
    type: 'front',
    gender: 'male',
    ready: false,
    biohands: 0,
    microchips: 0,
    souls: 0,
    robotModal: false,
    globalDeactivate: false,
  },
  getters: {
    getType: (state) => state.type,
    getGender: (state) => state.gender,
    getRobotModalState: (state) => state.robotModal,
    getGlobaDeactivate: (state) => state.globalDeactivate,
    getStatus: (state, getters) => {
      let status = '';
      if (state.ready) {
        status = 'ready';
      } else if (state.biohands === 4 && state.microchips === 4 && state.souls === 1 && getters['wallet/getCoins'] >= 10) {
        status = 'available';
      } else {
        status = 'blocked';
      }
      return status;
    },
    getFuncText: (state, getters) => {
      const biohandsAmount = state.biohands;
      const microchipsAmount = state.microchips;
      const soulsAmount = state.souls;
      const balance = getters['wallet/getCoins'];
      let finalText = ['Для производства биоробота не хватает '];
      if (biohandsAmount === 4 && microchipsAmount === 4 && soulsAmount === 1 && balance >= 10) {
        finalText[0] = 'Для производства биоробота всего хватает';
      } else {
        let isFirst = true;
        if (biohandsAmount !== 4) {
          const bhReq = 4 - biohandsAmount;
          finalText.push(`${bhReq} биорук${(bhReq === 1 ? 'и' : '')}`);
          isFirst = false;
        }
        if (microchipsAmount !== 4) {
          const mcrReq = 4 - microchipsAmount;
          if (!isFirst) finalText.push(', ');
          finalText.push(`${mcrReq}  микрочип${(mcrReq === 1 ? 'a' : 'ов')}`);
        }
        if (soulsAmount !== 1) {
          const soulReq = 1 - soulsAmount;
          if (!isFirst) finalText.push(', ');
          finalText.push(`${soulReq} души`);
        }
        if (balance < 10) {
          if (!isFirst) finalText.push(', ');
          finalText.push('денег');
        }
      }
      const index = finalText.lastIndexOf(', ');
      finalText[index] = ' и ';
      return `${finalText.join('')}.`;
    },
  },
  mutations: {
    SWITCH_TYPE: (state, type) => { state.type = type; },
    SWITCH_GENDER: (state, gender) => { state.gender = gender; },
    SWITCH_READY: (state) => { state.ready = !state.ready; },
    SWITCH_ROBOT_MODAL: (state) => { state.robotModal = !state.robotModal; },
    DISABLE_GLOBAL_DEACTIVATE: (state) => { console.log('dis'); state.globalDeactivate = false; },
    ENABLE_GLOBAL_DEACTIVATE: (state) => { console.log('enb'); state.globalDeactivate = true; },
    ADD_PART_TO_FAB: (state, partname) => {
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
    TAKE_PART_FROM_FAB: (state, partname) => {
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
    TAKE_ALL_PARTS: (state) => {
      state.biohands = 0;
      state.microchips = 0;
      state.souls = 0;
    },
  },
  actions: {
    getPart: {
      root: true,
      handler(namespacedContext, partname) {
        namespacedContext.commit(`${partname}/TAKE`, null, { root: true });
        namespacedContext.commit('ADD_PART_TO_FAB', partname);
      },
    },
    putPart: {
      root: true,
      handler(namespacedContext, partname) {
        namespacedContext.commit(`${partname}/ADD`, null, { root: true });
        namespacedContext.commit('TAKE_PART_FROM_FAB', partname);
      },
    },
    fabricateRobot: {
      root: true,
      handler(namespacedContext) {
        namespacedContext.commit('SWITCH_READY');
        namespacedContext.commit('TAKE_ALL_PARTS');
        namespacedContext.commit('wallet/TAKE_COINS_AMOUNT', 10);
        namespacedContext.commit('SWITCH_ROBOT_MODAL');
      },
    },
  },
  modules: {
    wallet: WALLET,
  },
};
