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
          <div class="section__title title">Кошелёк криптовалют</div>
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
          <div class="section__title title">Рынок комплектующих</div>
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
          <div class="section__title title">Склад</div>
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
          <div class="section__title title">Производство</div>
        </div>
        <div class="section__main-part">
          <div class="section__scroll"></div>
          <div class="section__component">
            <PartStorage/>
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

export default {
  name: 'app',
  components: {
    GenericButton,
    CryptoWallet,
    PartMarket,
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
  .logo {
    width: 78px;
    height: 48px;
    float: left;
    background: url('assets/pacman-logo.svg');
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
  .main-title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.015em;
    font-size: 56px;
    line-height: 72px;
    color: #FFFFFF;
  }
  .undertitle {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.022em;
    font-size: 24px;
    line-height: 32px;
    color: #A3B8CC;
  }
  .number {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    color: #667380;
  }
  .title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.02em;
    font-size: 32px;
    line-height: 40px;
    color: #FFFFFF;
  }
  .scroll {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #667380;
    transform: rotate(-90deg);
  }
  .scroll-arrow {
    width: 24px;
    height: 24px;
    margin-top: 13px;
    margin-left: 6px;
    background: url('./assets/scroll-arrow.svg');
    background-repeat: no-repeat;
  }
  .robots {
    width: 366px;
    margin-left: 662px;
    background-repeat: no-repeat;
  }
</style>
