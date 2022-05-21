<template>

  <div class="changer">
    <div class="changer__title changer__title-title">Тип биоробота:</div>
    <div class="changer__switches-container">
      <div class="switch-wrapper">
        <div class="switch" v-if="type === 'frontend'"></div>
      </div>
      <div class="changer__case changer__case-text">FrontEnd</div>
      <div class="switch-wrapper">
        <div class="switch" v-if="type === 'design'"></div>
      </div>
      <div class="changer__case changer__case-text">Design</div>
    </div>
  </div>

  <div class="changer">
    <div class="changer__title changer__title-title">Стабилизатор:</div>
    <div class="changer__switches-container">
      <div class="switch-wrapper">
        <div class="switch" v-if="type === 'male'"></div>
      </div>
      <div class="changer__case changer__case-text">Male</div>
      <div class="switch-wrapper">
        <div class="switch" v-if="type === 'female'"></div>
      </div>
      <div class="changer__case changer__case-text">Female</div>
    </div>
  </div>

  <div class="required-parts">
    <div class="required-parts__biohands">
      .
    </div>
    <div class="required-parts__microchips">

    </div>
    <div class="required-parts__souls">

    </div>
  </div>
  <div class="button-wrapper"></div>
  <div class="functional-text"></div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'FabricationModule',
  setup() {
    const store = useStore();
    return {
      type: computed(() => store.state.fabrication.type),
    };
  },
};
</script>

<style lang="scss" scoped>
  @use '../style/textstyles';
  @use '../style/sprites';
  .changer{
    width: 265px;
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
</style>
