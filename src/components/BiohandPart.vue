<template>
  <div v-if="isDisable" class="part" :class="partComputed"
  @click="isActive ? (putPart(), switchActive()) : null">
    <div :class="spriteComputed"></div>
  </div>
  <div v-if="!isDisable" class="part" :class="partComputed"
  @click="isActive ? putPart() : getPart();switchActive()">
    <div :class="spriteComputed"></div>
  </div>
</template>

<script>
/* eslint-disable prefer-template */

import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'BiohandPart',
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
        'biohand-active': this.isActive,
        'biohand-inactive': !this.isActive,
        'biohand-disable': this.isDisable && !this.isActive,
      };
    },
  },
  setup() {
    const store = useStore();
    return {
      isDisable: computed(() => store.getters['biohand/getSellState']),
      getPart: () => store.dispatch('getPart', 'biohand'),
      putPart: () => store.dispatch('putPart', 'biohand'),
    };
  },
};
</script>

<style lang="scss" scoped>
  @use '../style/sprites';
  @use '../style/partstyle';
</style>
