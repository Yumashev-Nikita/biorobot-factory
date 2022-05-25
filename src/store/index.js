import { createStore } from 'vuex';

import CRYPTO_WALLET from './modules/crypto-wallet';
import PARTS from './modules/parts';
import PARTS_MARKET from './modules/parts-market';
import PARTS_STORAGE from './modules/parts-storage';
import FABRICATION from './modules/fabrication';

export default createStore({
  modules: {
    cryptowallet: CRYPTO_WALLET,
    parts: PARTS,
    partsmarket: PARTS_MARKET,
    partsstorage: PARTS_STORAGE,
    fabrication: FABRICATION,
  },
});
