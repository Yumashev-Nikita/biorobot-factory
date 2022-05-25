<template>
  <div class="part" :class="partComputed" @keyup="S" @click="switchActive">
    <div :class="spriteComputed"></div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'FabricationPart',
  props: {
    name: String,
  },
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
        'part-inactive': !this.isActive || this.isDisable,
      };
    },
    spriteComputed() {
      return {
        'sprite-biohand_active': this.name === 'biohand' && this.isActive,
        'sprite-microchip_active': this.name === 'microchip' && this.isActive,
        'sprite-soul_active': this.name === 'soul' && this.isActive,

        'sprite-biohand_inactive': this.name === 'biohand' && !this.isActive,
        'sprite-microchip_inactive': this.name === 'microchip' && !this.isActive,
        'sprite-soul_inactive': this.name === 'soul' && !this.isActive,

        'sprite-biohand_disable': this.name === 'biohand' && this.isDisableBiohand,
        'sprite-microchip_disable': this.name === 'microchip' && this.isDisableMicrochip,
        'sprite-soul_disable': this.name === 'soul' && this.isDisableSoul,
      };
    },
  },
  setup() {
    const store = useStore();
    return {
      isDisableBiohand: computed(() => store.state.fabrication.isDisableBiohand),
      isDisableMicrochip: computed(() => store.state.fabrication.isDisableMicrochip),
      isDisableSoul: computed(() => store.state.fabrication.isDisableSoul),
    };
  },
};
</script>

<style lang="scss" scoped>
  @use '../style/sprites';
  .part {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
  }
  .part-active {
    border: 2px solid #FF7F22;
    border-radius: 4px;
    box-sizing: border-box;
  }
  .part-inactive {
    border-radius: 4px;
    box-sizing: border-box;
    background: #333940;
  }
</style>
