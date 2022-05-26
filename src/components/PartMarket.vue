<template>
  <div class="parts-container">

    <div class="part">
      <div class="part__thumbnail shadow-filter">
        <div class="biohand"></div>
      </div>
      <div class="part__name name">Биорука</div>
      <div class="part__cost cost">Стоимость: 7 монет</div>
      <div class="part__button-wrapper"><div class="button-main wd200 button-text"
      :class="biohandButtonDisable" @click="!biohandBuyState ? buyBiohand() : null">Установить</div>
      </div>
    </div>

    <div class="part">
      <div class="part__thumbnail shadow-filter">
        <div class="microchip"></div>
      </div>
      <div class="part__name name">Микрочип</div>
      <div class="part__cost cost">Стоимость: 5 монет</div>
      <div class="part__button-wrapper"><div class="button-main wd200 button-text"
      :class="microchipButtonDisable" @click="!microchipBuyState ? buyMicrochip() : null">Установить
      </div>
      </div>
    </div>

    <div class="part">
      <div class="part__thumbnail shadow-filter">
        <div class="soul-wrapper">
          <div class="soul"></div>
        </div>
      </div>
      <div class="part__name name">Душа</div>
      <div class="part__cost cost">Стоимость: 25 монет</div>
      <div class="part__button-wrapper"><div class="button-main wd200 button-text"
      :class="soulButtonDisable" @click="!soulBuyState ? buySoul() : null">Установить</div>
      </div>
      </div>
    </div>

</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'PartMarket',
  computed: {
    biohandButtonDisable() {
      return {
        'button-disable-filled': this.biohandBuyState,
        'button-orange': !this.biohandBuyState,
      };
    },
    microchipButtonDisable() {
      return {
        'button-disable-filled': this.microchipBuyState,
        'button-orange': !this.microchipBuyState,
      };
    },
    soulButtonDisable() {
      return {
        'button-disable-filled': this.soulBuyState,
        'button-orange': !this.soulBuyState,
      };
    },
  },
  setup() {
    const store = useStore();
    return {
      biohandBuyState: computed(() => store.getters['biohand/getBuyState']),
      microchipBuyState: computed(() => store.getters['microchip/getBuyState']),
      soulBuyState: computed(() => store.getters['soul/getBuyState']),
      buyBiohand: () => store.dispatch('buyPart', 'biohand'),
      buyMicrochip: () => store.dispatch('buyPart', 'microchip'),
      buySoul: () => store.dispatch('buyPart', 'soul'),
    };
  },
};
</script>

<style lang="scss" scoped>
  @use '../style/textstyles';
  @use '../style/sprites';
  @use '../style/buttonstyle';
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
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 85px;
      margin: 21px auto;
    }
    &__name {
      margin-top: 25px;
      margin-bottom: 5px;
    }
    &__cost {
      margin-bottom: 24px;
    }
    &__button-wrapper {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }
  }
  .soul-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 88px;
    height: 88px;
    border-radius: 100%;
    border: 3px solid #FF7F22;
    box-sizing: border-box;
    margin: 0px auto;
    padding-top: 7px;
  }
  .shadow-filter {
    filter: drop-shadow(0px 8px 40px #FF7F22);
  }
</style>
