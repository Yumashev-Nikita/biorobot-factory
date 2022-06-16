<template>
  <div class="parts-container">

    <div class="part">
      <div class="part__name name">Биорука</div>
      <div class="part__cost cost">Стоимость: 5 монет</div>
      <div class="part__amount amount"> {{ biohandAmount }} шт </div>
      <div class="part__button-wrapper"><div class="button-main wd200 button-text"
      :class="biohandButtonDisable" @click="!biohandSellState ? sellBiohand() : null">Продать</div>
      </div>
    </div>

    <div class="part">
      <div class="part__name name">Микрочип</div>
      <div class="part__cost cost">Стоимость: 3 монеты</div>
      <div class="part__amount amount"> {{ microchipAmount }} шт </div>
      <div class="part__button-wrapper"><div class="button-main wd200 button-text"
      :class="microchipButtonDisable" @click="!microchipSellState ? sellMicrochip() : null">Продать
      </div>
      </div>
    </div>

    <div class="part">
      <div class="part__name name">Душа</div>
      <div class="part__cost cost">Стоимость: 15 монет</div>
      <div class="part__amount amount"> {{ soulAmount }} шт </div>
      <div class="part__button-wrapper"><div class="button-main wd200 button-text"
      :class="soulButtonDisable" @click="!soulSellState ? sellSoul() : null">Продать</div>
      </div>
      </div>
    </div>

</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'PartStorage',
  computed: {
    biohandButtonDisable() {
      return {
        'button-disable-wired': this.biohandSellState,
        'button-blue': !this.biohandSellState,
      };
    },
    microchipButtonDisable() {
      return {
        'button-disable-wired': this.microchipSellState,
        'button-blue': !this.microchipSellState,
      };
    },
    soulButtonDisable() {
      return {
        'button-disable-wired': this.soulSellState,
        'button-blue': !this.soulSellState,
      };
    },
  },
  setup() {
    const store = useStore();
    return {
      biohandSellState: computed(() => store.getters['biohand/getSellState']),
      microchipSellState: computed(() => store.getters['microchip/getSellState']),
      soulSellState: computed(() => store.getters['soul/getSellState']),
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
  @use '@/components/part_shop_styles/partshopfront';
</style>
