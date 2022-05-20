import { createStore } from 'vuex';

import cryptoWallet from './modules/crypto-wallet';
import partMarket from './modules/part-market';
import partStorage from './modules/part-storage';
import fabricationModule from './modules/fabrication-module';

export default createStore({
  modules: {
    cW: cryptoWallet,
    pM: partMarket,
    pS: partStorage,
    fW: fabricationModule,
  },
});
