<template>
  <div v-if="isDisable" class="part" :class="partComputed">
    <div :class="spriteComputed" @click="isActive ? (putPart(), switchActive()) : null"></div>
  </div>
  <div v-if="!isDisable" class="part" :class="partComputed" @click="switchActive">
    <div :class="spriteComputed" @click="isActive ? putPart() : getPart()"></div>
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
        'sprite-soul_active': this.isActive,
        'sprite-soul_inactive': !this.isActive,
        'sprite-soul_disable': this.isDisable && !this.isActive,
      };
    },
  },
  setup() {
    const store = useStore();
    return {
      isDisable: computed(() => store.getters['soul/getSellState']),
      getPart: () => store.dispatch('getPart', 'soul'),
      putPart: () => store.dispatch('putPart', 'soul'),
    };
  },
};
</script>

<style lang="scss" scoped>
  @use '../style/sprites';
  @use '../style/partstyle';
</style>
