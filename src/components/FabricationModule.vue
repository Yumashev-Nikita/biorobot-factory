<template>
  <div class="top-part-container">
    <div class="changers-container">
      <div class="changer">
        <div class="changer__title changer__title-title">Тип биоробота:</div>
        <div class="changer__switches-container">
          <div class="switch-wrapper">
            <div :class='{ switch: type }'></div>
          </div>
          <div class="changer__case changer__case-text">FrontEnd</div>
          <div class="switch-wrapper">
            <div :class='{ switch: !type }'></div>
          </div>
          <div class="changer__case changer__case-text">Design</div>
        </div>
      </div>
      <div class="changer">
        <div class="changer__title changer__title-title">Стабилизатор:</div>
        <div class="changer__switches-container">
          <div class="switch-wrapper">
            <div :class='{ switch: gender }'></div>
          </div>
          <div class="changer__case changer__case-text">Male</div>
          <div class="switch-wrapper" >
            <div :class='{ switch: !gender }'></div>
          </div>
          <div class="changer__case changer__case-text">Female</div>
        </div>
      </div>
    </div>
    <div class="required-parts">
      <div class="required-parts__parts-container">
        <div class="required-parts__part-wrapper"><BiohandPart/></div>
        <div class="required-parts__part-wrapper"><BiohandPart/></div>
        <div class="required-parts__part-wrapper"><BiohandPart/></div>
        <div class="required-parts__part-wrapper"><BiohandPart/></div>
      </div>
      <div class="required-parts__parts-container">
        <div class="required-parts__part-wrapper"><MicrochipPart/></div>
        <div class="required-parts__part-wrapper"><MicrochipPart/></div>
        <div class="required-parts__part-wrapper"><MicrochipPart/></div>
        <div class="required-parts__part-wrapper"><MicrochipPart/></div>
      </div>
      <div class="required-parts__parts-container">
        <div class="required-parts__part-wrapper"><SoulPart/></div>
      </div>
    </div>
  </div>
  <div class="bottom-part-container">
    <div class="button-wrapper">
      <div class="button-main wd236 button-orange-wired button-text">Произвести за 10 монет
      </div>
    </div>
    <div class="func-text-wrapper">
      <div class="functional-text">{{ funcText }}</div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import BiohandPart from './BiohandPart.vue';
import MicrochipPart from './MicrochipPart.vue';
import SoulPart from './SoulPart.vue';

export default {
  name: 'FabricationModule',
  components: {
    BiohandPart,
    MicrochipPart,
    SoulPart,
  },
  setup() {
    const store = useStore();
    return {
      type: computed(() => store.getters['fabrication/getType']),
      gender: computed(() => store.getters['fabrication/getGender']),
      funcText: computed(() => store.getters['fabrication/getFuncText']),
      switchType: () => store.commit('fabrication/SWITCH_TYPE'),
      switchGender: () => store.commit('fabrication/SWITCH_GENDER'),
    };
  },
};
</script>

<style lang="scss" scoped>
  @use '../style/textstyles';
  @use '../style/sprites';
  @use '../style/buttonstyle';
  .changer{
    width: 270px;
    margin-top: 15px;
    &__title {
      margin-bottom: 20px;
    }
    &__switches-container {
      display: flex;
      flex-direction: row;
      margin-bottom: 34px;
    }
    &__case {
      display: flex;
      align-items: center;
      margin-left: 12px;
      margin-right: 22px;
      min-width: 70px;
    }
  }
  .switch-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border: 2px solid #A3B8CC;
    border-radius: 100%;
    box-sizing: border-box;
    margin-left: 4px;
  }
  .switch {
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background: #FF7F22;
  }
  .required-parts {
    &__parts-container {
      display: flex;
      flex-direction: row;
      margin-bottom: 16px;
      margin-top: 18px;
      margin-left: -5px;
    }
    &__part-wrapper {
      width: 48px;
      height: 48px;
      margin-right: 10px;
    }
  }
  .top-part-container {
    display: flex;
    flex-direction: row;
  }
  .button-wrapper {
    margin-left: -40px;
  }
  .bottom-part-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    margin-top: 40px;
  }
  .func-text-wrapper {
    display: flex;
    justify-content: center;
    max-width: 195px;
    margin-left: 30px;
  }
</style>
