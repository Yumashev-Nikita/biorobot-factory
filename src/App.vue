<template>
  <div class="app-container">
    <div class="main-container">
      <div class="top-bar">
        <div class="logo"></div>
        <GenericButton text='Произвести биоробота' width='236px'/>
      </div>

      <div class="robots"></div>

      <div class="section">
        <div class="section__top-part">
          <div class="section__number number" style="margin-top: 28px">01</div>
          <div class="section__main-title main-title">Фабрика по производству биороботов</div>
        </div>
        <div class="section__main-part">
          <div class="section__scroll">
            <div class="scroll">скролл</div>
            <div class="scroll-arrow"></div>
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
import GenericButton from './components/GenericButton.vue';
import CryptoWallet from './components/CryptoWallet.vue';
import PartMarket from './components/PartMarket.vue';
import PartStorage from './components/PartStorage.vue';
import FabricationModule from './components/FabricationModule.vue';

export default {
  name: 'app',
  components: {
    GenericButton,
    CryptoWallet,
    PartMarket,
    PartStorage,
    FabricationModule,
  },
  data() {
    return {
      coins: 0,
      h_level: 1,
    };
  },
};
</script>
<style lang="scss" scoped>
  @use './style/textstyles';
  @use './style/sprites';
  .app-container {
    z-index: 0;
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
</style>
