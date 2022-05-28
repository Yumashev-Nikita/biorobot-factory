<template>
  <div class="interlayer" v-if="modalCoinsOpened || modalRobotsOpened">
    <div class="modal-window" v-if="modalCoinsOpened">
      <div class="modal-window__coin-modal-wrapper coin-modal"></div>
      <div class="modal-window__cross-modal-wrapper cross-modal" @click="switchCoinsModal"></div>
      <div class="modal-window__content">
        <div class="modal-main-text">Количество монет ограничено</div>
        <div class="modal-secondary-text">Вы не можете нацыганить более 100 монет biorobo
        </div>
      </div>
    </div>
    <div class="modal-window" v-if="modalRobotsOpened">
      <div class="modal-window__cross-modal-wrapper cross-modal"
      @click="switchRobotsModal(); reloadPage()"></div>
      <div class="modal-window__content">
        <div class="modal-main-text">Биоробот произведён</div>
        <div class="modal-secondary-text">Поздравляем!<br>Вы произвели биоробота</div>
      </div>
    </div>
  </div>
  <div class="app-container">
    <div class="main-container">
      <div class="top-bar">
        <div class="pacman-logo"></div>
        <div class="button-main wd236 button-orange-wired button-text"
      @click="sellSoul">Произвести биоробота</div>
      </div>

      <div class="robots-wrapper robots"></div>

      <div class="section">
        <div class="section__top-part">
          <div class="section__number number" style="margin-top: 28px">01</div>
          <div class="section__main-title main-title">Фабрика по производству биороботов</div>
        </div>
        <div class="section__main-part">
          <div class="section__scroll">
            <div class="scroll">скролл</div>
            <div class="scroll-arrow-wrapper scroll-arrow"></div>
          </div>
          <div class="section__undertitle undertitle">класса «монитор-кресло»</div>
        </div>
      </div>

      <div class="section">
        <div class="section__top-part">
          <div class="section__number number">02</div>
          <div class="section__title section__title-title">Кошелёк криптовалют</div>
        </div>
        <div class="section__main-part">
          <div class="section__scroll"></div>
          <div class="section__component">
            <CryptoWallet/>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section__top-part">
          <div class="section__number number">03</div>
          <div class="section__title section__title-title">Рынок комплектующих</div>
        </div>
        <div class="section__main-part">
          <div class="section__scroll"></div>
          <div class="section__component">
            <PartMarket/>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section__top-part">
          <div class="section__number number">04</div>
          <div class="section__title section__title-title">Склад</div>
        </div>
        <div class="section__main-part">
          <div class="section__scroll"></div>
          <div class="section__component">
            <PartStorage/>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section__top-part">
          <div class="section__number number">05</div>
          <div class="section__title section__title-title">Производство</div>
        </div>
        <div class="section__main-part">
          <div class="section__scroll"></div>
          <div class="section__component">
            <FabricationModule/>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import CryptoWallet from './components/CryptoWallet.vue';
import PartMarket from './components/PartMarket.vue';
import PartStorage from './components/PartStorage.vue';
import FabricationModule from './components/FabricationModule.vue';

export default {
  name: 'app',
  components: {
    CryptoWallet,
    PartMarket,
    PartStorage,
    FabricationModule,
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
  },
  setup() {
    const store = useStore();
    return {
      modalCoinsOpened: computed(() => store.getters['wallet/getCoinsModalState']),
      modalRobotsOpened: computed(() => store.getters['fabrication/getRobotModalState']),
      switchCoinsModal: () => store.commit('wallet/SWITCH_COINS_MODAL'),
      switchRobotsModal: () => store.commit('fabrication/SWITCH_ROBOT_MODAL'),
    };
  },
};
</script>
<style lang="scss" scoped>
  @use '@/style/textstyles';
  @use '@/style/sprites';
  @use '@/style/buttonstyle';
  .app-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: radial-gradient(82.33% 80.44% at 50% 0%, #26394D 0%, #212529 100%), #FFFFFF;
  }
  .top-bar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 120px;
  }
  .main-container {
    margin: 48px auto;
    width: 1016px;
  }
  .section {
    display: flex;
    flex-direction: column;
    width: 1016px;
    &__top-part {
      display: flex;
    }
    &__main-part {
      margin-bottom: 80px;
      display: flex;
    }
    &__number {
      width: 24px;
      height: 24px;
      text-align: center;
      margin-top: 8px;
      padding-top: 4px;
      user-select: none;
    }
    &__main-title {
      margin-left: 106px;
      width: 470px;
    }
    &__title {
      margin-left: 106px;
    }
    &__scroll {
      width: 24px;
      height: 100px;
      user-select: none;
    }
    &__component {
      margin-top: 60px;
      margin-left: 106px;
    }
    &__undertitle {
      margin-top: 24px;
      margin-left: 106px;
    }
  }
  .robots-wrapper {
    position: absolute;
    margin-left: 650px;
    margin-top: -20px;
  }
  .scroll-arrow-wrapper {
    margin-top: 13px;
    margin-left: 6px;
    user-select: none;
  }
  .interlayer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #1a1a1a9f;
    z-index: 100;
  }
  .modal-window {
    z-index: 101;
    width: 496px;
    height: 240px;
    background: #FFFFFF;
    border-radius: 10px;
    margin: 20% auto;
    &__content {
      width: 320px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin-left: 106px;
      height: 235px;
    }
    &__coin-modal-wrapper {
      position: absolute;
      margin-top: 48px;
      margin-left: 34px;
    }
    &__cross-modal-wrapper {
      float: right;
      margin-top: 8px;
      margin-right: 8px;
      cursor: pointer;
    }
  }
</style>
