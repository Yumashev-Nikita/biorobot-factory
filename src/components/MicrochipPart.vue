<template>
  <div v-if="isDisable" class="part" :class="partComputed"
  @click="isActive ? (putPart(), switchActive()) : null"
  :style="{ 'cursor': !isActive ? 'default' : null }">
    <div :class="spriteComputed"></div>
  </div>
  <div v-if="!isDisable" class="part" :class="partComputed"
  @click="isActive ? putPart() : (getPart(), switchActive())">
    <div :class="spriteComputed"></div>
  </div>
</template>

<script>
/* eslint-disable prefer-template */

import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'microchipPart',
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    switchActive() {
      this.isActive = !this.isActive;
    },
  },
  computed: {
    partComputed() {
      return {
        'part-active': this.isActive,
        'part-inactive': !this.isActive,
      };
    },
    spriteComputed() {
      return {
        'microchip-active': this.isActive,
        'microchip-inactive': !this.isActive,
        'microchip-disable': this.isDisable && !this.isActive,
      };
    },
  },
  setup() {
    const store = useStore();
    return {
      isDisable: computed(() => store.getters['microchip/getSellState']),
      isGlobalDeactivate: computed(() => store.getters['fabrication/getGlobaDeactivate']),
      getPart: () => store.dispatch('getPart', 'microchip'),
      putPart: () => store.dispatch('putPart', 'microchip'),
    };
  },
};
</script>

<style lang="scss" scoped>
  @use '@/style/sprites';
  @use '@/style/partstyle';
</style>
