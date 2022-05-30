<template>
  <ModalWindow/>
  <div class="app-container">
    <div class="main-container">
      <div class="top-bar">
        <div class="pacman-logo"></div>
        <div class="button-main wd236 button-orange-wired button-text"
      @click="goto('fabrication')">Произвести биоробота</div>
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
        <div class="section__component">
          <CryptoWallet/>
        </div>
      </div>

      <div class="section">
        <div class="section__top-part">
          <div class="section__number number">03</div>
          <div class="section__title section__title-title">Рынок комплектующих</div>
        </div>
        <div class="section__component">
          <PartMarket/>
        </div>
      </div>

      <div class="section">
        <div class="section__top-part">
          <div class="section__number number">04</div>
          <div class="section__title section__title-title">Склад</div>
        </div>
        <div class="section__component">
          <PartStorage/>
        </div>
      </div>

      <div class="section">
        <div class="section__top-part">
          <div class="section__number number">05</div>
          <div class="section__title section__title-title">Производство</div>
        </div>
        <div class="section__component" ref='fabrication'>
          <FabricationModule/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import ModalWindow from './components/ModalWindow.vue';
import CryptoWallet from './components/CryptoWallet.vue';
import PartMarket from './components/PartMarket.vue';
import PartStorage from './components/PartStorage.vue';
import FabricationModule from './components/FabricationModule.vue';

export default {
  name: 'app',
  components: {
    ModalWindow,
    CryptoWallet,
    PartMarket,
    PartStorage,
    FabricationModule,
  },
  methods: {
    goto(refName) {
      console.log('s');
      const element = this.$refs[refName];
      const top = element.offsetTop;
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    },
  },
};
</script>
<style lang="scss" scoped>
  @use '@/style/textstyles';
  @use '@/style/sprites';
  @use '@/style/buttonstyle';
  @use '@/style/universalextenders';
  @import '@/style/universalmixins';
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
    @include mobile {
      justify-content: center;
      margin-bottom: 60px;
    }
  }
  .main-container {
    margin: auto;
    margin-top: 48px ;
    width: 53.4%;
    min-width: 236px;
  }
  .section {
    width: 100%;
    margin-bottom: 100px;
    &__top-part {
      display: flex;
      @include mobile {
        margin: auto;
      }
      @include desktop {
        margin-left: 7px;
      }
    }
    &__main-part {
      display: flex;
      margin-bottom: -16px;
    }
    &__number {
      width: 24px;
      height: 24px;
      text-align: center;
      margin-top: 8px;
      padding-top: 4px;
      user-select: none;
      margin-left: -2px;
      @extend %non-desktop-hider
    }
    &__scroll {
      width: 24px;
      height: 100px;
      user-select: none;
      @extend %non-desktop-hider
    }
    &__main-title {
      width: 45%;
      @extend %mobile-margin;
      @include mobile {
        width: 236px;
      }
      @include desktop {
        margin-left: 106px;
      }
    }
    &__title {
      @extend %mobile-margin;
      @include desktop {
        margin-left: 106px;
      }
    }
    &__component {
      width: 100%;
      @extend %mobile-margin;
    }
    &__undertitle {
      margin-top: 24px;
      @extend %mobile-hider;
      @include desktop {
        margin-left: 106px;
      }
    }
  }
  .robots-wrapper {
    position: absolute;
    right: 0;
    margin-right: 23.5%;
    margin-top: -20px;
    @include mobile {
      position: relative;
      margin: auto;
      margin-bottom: 30px;
    }
    @include tablet-vertical-width {
      position: absolute;
      right: -9%;
    }
    @include tablet-horizontal-width {
      position: absolute;
       @media only screen and (min-width: 1020px) and (max-width: 1320px) {
        right: -5%;
      }
      @media only screen and (min-width: 1321px) and (max-width: 1400px) {
        right: 4%;
      }
      @media only screen and (min-width: 1401px) {
        right: 3%;
      }
    }
  }
  .scroll-arrow-wrapper {
    margin-top: 13px;
    margin-left: 6px;
    user-select: none;
  }
</style>
