<template>
  <div v-if="isDisable" class="part" :class="partComputed"
  @click="isActive ? (putPart(), switchActive({ name: name, id: id })) : null"
  :style="{ 'cursor': !isActive ? 'default' : null }">
    <div :class="spriteComputed"></div>
  </div>
  <div v-if="!isDisable" class="part" :class="partComputed"
  @click="isActive ? putPart() : getPart(); switchActive({ name: name, id: id })">
    <div :class="spriteComputed"></div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'partComponent',
  props: {
    name: String,
    id: Number,
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
        'biohand-active': this.isActive && this.name === 'biohand',
        'biohand-inactive': !this.isActive && this.name === 'biohand',
        'biohand-disable': this.isDisable && !this.isActive && this.name === 'biohand',
        'microchip-active': this.isActive && this.name === 'microchip',
        'microchip-inactive': !this.isActive && this.name === 'microchip',
        'microchip-disable': this.isDisable && !this.isActive && this.name === 'microchip',
        'soul-active': this.isActive && this.name === 'soul',
        'soul-inactive': !this.isActive && this.name === 'soul',
        'soul-disable': this.isDisable && !this.isActive && this.name === 'soul',
      };
    },
  },
  setup(props) {
    const store = useStore();
    switch (props.name) {
      case 'biohand': {
        store.state.fabrication.part_comps.biohands.push({ isActive: false });
        break;
      }
      case 'microchip': {
        store.state.fabrication.part_comps.microchips.push({ isActive: false });
        break;
      }
      case 'soul': {
        store.state.fabrication.part_comps.souls.push({ isActive: false });
        break;
      }
      default: {
        break;
      }
    }
    return {
      switchActive: (payload) => store.dispatch('switchActiveById', payload),
      isDisable: computed(() => store.getters[`${props.name}/getSellState`]),
      getPart: () => store.dispatch('getPart', props.name),
      putPart: () => store.dispatch('putPart', props.name),
      isActive: computed(() => {
        let stA;
        switch (props.name) {
          case 'biohand': {
            stA = store.state.fabrication.part_comps.biohands;
            break;
          }
          case 'microchip': {
            stA = store.state.fabrication.part_comps.microchips;
            break;
          }
          case 'soul': {
            stA = store.state.fabrication.part_comps.souls;
            break;
          }
          default: {
            break;
          }
        }
        return stA[props.id].isActive;
      }),
    };
  },
};
</script>

<style lang="scss" scoped>
@use '@/style/sprites';
  .part {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    cursor: pointer;
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
