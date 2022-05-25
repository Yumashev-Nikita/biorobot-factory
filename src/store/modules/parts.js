/* eslint-disable prefer-template */

export default {
  namespaced: true,
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    buyPart: {
      root: true,
      handler(namespacedContext, partname) {
        namespacedContext.commit(partname + '/ADD', null, { root: true });
      },
    },
    sellPart: {
      root: true,
      handler(namespacedContext, partname) {
        namespacedContext.commit(partname + '/TAKE', null, { root: true });
      },
    },
  },
  modules: {
  },
};
