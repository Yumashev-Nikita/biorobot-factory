<template>
  <div v-if="isDisable" class="part" :class="partComputed"
  @click="isActive ? (putPart(), switchActive()) : null"
  :style="{ 'cursor': !isActive ? 'default' : null }">
    <div :class="spriteComputed"></div>
  </div>
  <div v-if="!isDisable" class="part" :class="partComputed"
  @click="isActive ? putPart() : getPart(); switchActive()">
    <div :class="spriteComputed"></div>
  </div>
</template>

<script>
/* eslint-disable prefer-template */

import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'soulPart',
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
        'soul-active': this.isActive,
        'soul-inactive': !this.isActive,
        'soul-disable': this.isDisable && !this.isActive,
      };
    },
  },
  setup() {
    const store = useStore();
    return {
      isDisable: computed(() => store.getters['soul/getSellState']),
      isGlobalDeactivate: computed(() => store.getters['fabrication/getGlobaDeactivate']),
      getPart: () => store.dispatch('getPart', 'soul'),
      putPart: () => store.dispatch('putPart', 'soul'),
    };
  },
};
</script>

<style lang="scss" scoped>
  @use '@/style/sprites';
  @use '@/style/partstyle';
</style>
