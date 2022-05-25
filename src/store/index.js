import { createStore } from 'vuex';

import CRYPTO_WALLET from './modules/crypto-wallet';
import PARTS from './modules/parts';
import FABRICATION from './modules/fabrication';
import BIOHANDS from './modules/biohands';
import MICROCHIPS from './modules/microchips';
import SOULS from './modules/souls';

export default createStore({
  modules: {
    cryptowallet: CRYPTO_WALLET,
    parts: PARTS,
    fabrication: FABRICATION,
    biohands: BIOHANDS,
    microchips: MICROCHIPS,
    souls: SOULS,
  },
});
