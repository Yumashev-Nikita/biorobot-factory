<template>
  <div class="part" :class="partComputed" @click="switchActive">
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
  setup() {
    const store = useStore();
    return {
      isDisable: computed(() => store.getters['soul/getZeroState']),
    };
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
        'sprite-soul_disable': this.isDisable,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
  @use '../style/sprites';
  @use '../style/partstyle';
</style>
