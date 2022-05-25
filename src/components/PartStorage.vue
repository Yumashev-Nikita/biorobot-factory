<template>
  <div class="parts-container">

    <div class="part">
      <div class="part__name name">Биорука</div>
      <div class="part__cost cost">Стоимость: 5 монет</div>
      <div class="part__amount amount"> {{ biohandAmount }} шт </div>
      <div class="part__button-wrapper"><div class="button-main wd200 button-blue button-text"
      @click="sellBiohand">Установить</div>
      </div>
    </div>

    <div class="part">
      <div class="part__name name">Микрочип</div>
      <div class="part__cost cost">Стоимость: 3 монеты</div>
      <div class="part__amount amount"> {{ microchipAmount }} шт </div>
      <div class="part__button-wrapper"><div class="button-main wd200 button-blue button-text"
      @click="sellMicrochip">Установить</div>
      </div>
    </div>

    <div class="part">
      <div class="part__name name">Душа</div>
      <div class="part__cost cost">Стоимость: 15 монет</div>
      <div class="part__amount amount"> {{ soulAmount }} шт </div>
      <div class="part__button-wrapper"><div class="button-main wd200 button-blue button-text"
      @click="sellSoul">Установить</div>
      </div>
      </div>
    </div>

</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'PartStorage',
  setup() {
    const store = useStore();
    return {
      biohandAmount: computed(() => store.getters['biohand/getAmount']),
      microchipAmount: computed(() => store.getters['microchip/getAmount']),
      soulAmount: computed(() => store.getters['soul/getAmount']),
      sellBiohand: () => store.dispatch('sellPart', 'biohand'),
      sellMicrochip: () => store.dispatch('sellPart', 'microchip'),
      sellSoul: () => store.dispatch('sellPart', 'soul'),
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
      margin-bottom: 5px;
    }
    &__cost {
      margin-bottom: 10px;
    }
    &__amount {
      margin-bottom: 22px;
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
</style>
