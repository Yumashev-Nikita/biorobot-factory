export default {
  namespaced: true,
  state: {
    ENTITIES: {
      biohand: 0,
      microchip: 1,
      soul: 2,
    },
    parts: [
      {
        name: 'biohand', amount: 2, buycost: 7, sellcost: 5,
      },
      {
        name: 'microchip', amount: 2, buycost: 5, sellcost: 3,
      },
      {
        name: 'soul', amount: 2, buycost: 25, sellcost: 15,
      },
    ],
  },
  getters: {
    getBiohandBuyCost: (state) => state.parts[state.ENTITIES.biohand].buycost,
    getMicrochipBuyCost: (state) => state.parts[state.ENTITIES.microchip].buycost,
    getSoulBuyCost: (state) => state.parts[state.ENTITIES.soul].buycost,
    getBiohandSellCost: (state) => state.parts[state.ENTITIES.biohand].sellcost,
    getMicrochipSellCost: (state) => state.parts[state.ENTITIES.microchip].sellcost,
    getSoulSellCost: (state) => state.parts[state.ENTITIES.soul].sellcost,
    getBiohandAmount: (state) => state.parts[state.ENTITIES.biohand].amount,
    getMicrochipAmount: (state) => state.parts[state.ENTITIES.microchip].amount,
    getSoulAmount: (state) => state.parts[state.ENTITIES.soul].amount,
  },
  mutations: {
    TAKE_BIOHAND(state) {
      console.log('TAKE_BIOHAND');
      if (state.parts[state.ENTITIES.biohand].amount !== 0) {
        state.parts[state.ENTITIES.biohand].amount -= 1;
      }
    },
    TAKE_MICROCHIP(state) {
      console.log('TAKE_MICROCHIP');
      if (state.parts[state.ENTITIES.microchip].amount !== 0) {
        state.parts[state.ENTITIES.microchip].amount -= 1;
      }
    },
    TAKE_SOUL(state) {
      console.log('TAKE_SOUL');
      if (state.parts[state.ENTITIES.soul].amount !== 0) {
        state.parts[state.ENTITIES.soul].amount -= 1;
      }
    },
    ADD_BIOHAND(state) {
      console.log('ADD_BIOHAND');
      state.parts[state.ENTITIES.biohand].amount += 1;
    },
    ADD_MICROCHIP(state) {
      console.log('ADD_MICROCHIP');
      state.parts[state.ENTITIES.microchip].amount += 1;
    },
    ADD_SOUL(state) {
      console.log('ADD_SOUL');
      state.parts[state.ENTITIES.soul].amount += 1;
    },
  },
  actions: {
  },
  modules: {
  },
};
