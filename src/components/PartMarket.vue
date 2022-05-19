<template>
  <div class="parts-container">

    <div class="part">
      <div class="part__thumbnail shadow-filter biohand"></div>
      <div class="part__name name">Биорука</div>
      <div class="part__cost cost">Стоимость: 7 монет</div>
      <div class="part__button-wrapper"><GenericButton text='Установить' width='200px'/></div>
    </div>

    <div class="part">
      <div class="part__thumbnail shadow-filter microchip"></div>
      <div class="part__name name">Микрочип</div>
      <div class="part__cost cost">Стоимость: 5 монет</div>
      <div class="part__button-wrapper"><GenericButton text='Установить' width='200px'/></div>
    </div>

    <div class="part">
      <div class="shadow-filter">
        <div class="soul-wrapper soul-border">
          <div class="part__thumbnail soul"></div>
        </div>
      </div>
      <div class="part__name name">Душа</div>
      <div class="part__cost cost">Стоимость: 25 монет</div>
      <div class="part__button-wrapper"><GenericButton text='Установить' width='200px'/></div>
    </div>
  </div>

</template>

<script>
import GenericButton from './GenericButton.vue';

export default {
  name: 'PartMarket',
  components: {
    GenericButton,
  },
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
  .parts-container {
    display: flex;
    flex-direction: row;
  }
  .part {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 236px;
    margin-right: 25px;
    &__thumbnail {
      margin: auto;
      width: 236px;
      height: 128px;
      margin-top: 25px;
    }
    &__name {
      margin-top: 25px;
      margin-bottom: 5px;
    }
    &__cost {
      margin-bottom: 24px;
    }
    &__button-wrapper {
      margin-bottom: 20px;
    }
  }
  .cost {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #A3B8CC;
  }
  .name {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    color: #FFFFFF;
  }
  .biohand {
    width: 101px;
    height: 67px;
    background: url('../assets/biohand.svg');
  }
  .microchip {
    width: 80px;
    height: 80px;
    background: url('../assets/microchip.svg');
  }
  .soul-wrapper {
    margin: 20px auto;
  }
  .soul-border {
    width: 88px;
    height: 88px;
    border-radius: 100%;
    border: 3px solid #FF7F22;
    box-sizing: border-box;
  }
  .soul {
    width: 55.88px;
    height: 54px;
    margin-top: 18px;
    background: url('../assets/soul.svg');
  }
  .shadow-filter {
    filter: drop-shadow(0px 8px 40px #FF7F22);
  }
</style>
