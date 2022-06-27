import { createStore } from 'vuex';

import WALLET from './modules/wallet';
import PARTS from './modules/parts';
import FABRICATION from './modules/fabrication';
import BIOHANDS from './modules/biohands';
import MICROCHIPS from './modules/microchips';
import SOULS from './modules/souls';
import MAIN from './modules/main';

export default createStore({
  modules: {
    wallet: WALLET,
    parts: PARTS,
    fabrication: FABRICATION,
    biohand: BIOHANDS,
    microchip: MICROCHIPS,
    soul: SOULS,
    main: MAIN,
  },
});
