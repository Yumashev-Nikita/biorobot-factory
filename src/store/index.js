import { createStore } from 'vuex';

import CRYPTO_WALLET from './modules/crypto-wallet';
import PARTS from './modules/parts';
import FABRICATION from './modules/fabrication';

export default createStore({
  modules: {
    cryptowallet: CRYPTO_WALLET,
    parts: PARTS,
    fabrication: FABRICATION,
  },
});
