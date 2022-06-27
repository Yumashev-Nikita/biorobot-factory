/* eslint-disable max-len */
/* eslint-disable prefer-const */

import MAIN from './main';
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
    part_comps: {
      biohands: [],
      microchips: [],
      souls: [],
    },
  },
  getters: {
    getType: (state) => state.type,
    getGender: (state) => state.gender,
    getRobotModalState: (state) => state.robotModal,
    getStatus: (state, getters) => {
      let status = '';
      if (state.ready) {
        status = 'ready';
      } else if (state.biohands === state.main.biohands_necessery
        && state.microchips === state.main.microchips_necessery
          && state.souls === state.main.souls_necessery && getters['wallet/getCoins'] >= state.main.coins_necessery) {
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
      if (biohandsAmount === state.main.biohands_necessery
        && microchipsAmount === state.main.microchips_necessery
          && soulsAmount === state.main.souls_necessery && balance >= state.main.coins_necessery) {
        finalText[0] = 'Для производства биоробота всего хватает';
      } else {
        let isFirst = true;
        if (biohandsAmount !== state.main.biohands_necessery) {
          const bhReq = state.main.biohands_necessery - biohandsAmount;
          finalText.push(`${bhReq} биорук${(bhReq === 1 ? 'и' : '')}`);
          isFirst = false;
        }
        if (microchipsAmount !== state.main.microchips_necessery) {
          const mcrReq = state.main.microchips_necessery - microchipsAmount;
          if (!isFirst) finalText.push(', ');
          finalText.push(`${mcrReq} микрочип${(mcrReq === 1 ? 'a' : 'ов')}`);
          isFirst = false;
        }
        if (soulsAmount !== state.main.souls_necessery) {
          const soulReq = state.main.souls_necessery - soulsAmount;
          if (!isFirst) finalText.push(', ');
          finalText.push(`${soulReq} души`);
          isFirst = false;
        }
        if (balance < state.main.coins_necessery) {
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
    SWITCH_ACTIVE_BY_ID: (state, payload) => {
      switch (payload.name) {
        case 'biohand': {
          state.part_comps.biohands[payload.id].isActive = !state.part_comps.biohands[payload.id].isActive;
          break;
        }
        case 'microchip': {
          state.part_comps.microchips[payload.id].isActive = !state.part_comps.microchips[payload.id].isActive;
          break;
        }
        case 'soul': {
          state.part_comps.souls[payload.id].isActive = !state.part_comps.souls[payload.id].isActive;
          break;
        }
        default: {
          break;
        }
      }
    },
    DEACTIVATE_PARTS: (state) => {
      for (let i = 0; i < state.part_comps.biohands.length; i += 1) {
        state.part_comps.biohands[i].isActive = false;
      }
      for (let i = 0; i < state.part_comps.microchips.length; i += 1) {
        state.part_comps.microchips[i].isActive = false;
      }
      for (let i = 0; i < state.part_comps.souls.length; i += 1) {
        state.part_comps.souls[i].isActive = false;
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
        namespacedContext.commit('wallet/TAKE_COINS_AMOUNT', this.state.main.coins_necessery);
        namespacedContext.commit('SWITCH_ROBOT_MODAL');
      },
    },
    resetGame: {
      root: true,
      handler(namespacedContext) {
        namespacedContext.commit('SWITCH_READY');
        namespacedContext.commit('SWITCH_ROBOT_MODAL');
        namespacedContext.commit('DEACTIVATE_PARTS');
      },
    },
    switchActiveById: {
      root: true,
      handler(namespacedContext, payload) {
        namespacedContext.commit('SWITCH_ACTIVE_BY_ID', payload);
      },
    },
  },
  modules: {
    wallet: WALLET,
    main: MAIN,
  },
};
