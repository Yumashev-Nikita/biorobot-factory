<template>
  <div class="interlayer" v-if="modalCoinsOpened || modalRobotsOpened">
    <div class="modal-window" v-if="modalCoinsOpened">
      <div class="modal-window__cross-modal-wrapper cross-modal" @click="switchCoinsModal"></div>
      <div class="modal-window__coin-modal-wrapper coin-modal"></div>
      <div class="modal-window__content">
        <div class="modal-window__main-text modal-main-text">
          Количество монет ограничено
        </div>
        <div class="modal-secondary-text">
          Вы не можете нацыганить более 100 монет biorobo
        </div>
      </div>
    </div>
    <div class="modal-window" v-if="modalRobotsOpened">
      <div class="modal-window__cross-modal-wrapper cross-modal"
      @click="switchRobotsModal(); reloadPage()"></div>
      <div class="modal-window__content">
        <div class="modal-window__main-text modal-main-text">Биоробот произведён</div>
        <div class="modal-secondary-text">Поздравляем!<br>Вы произвели биоробота</div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'ModalWindow',
  methods: {
    reloadPage() {
      window.location.reload();
    },
  },
  setup() {
    const store = useStore();
    return {
      modalCoinsOpened: computed(() => store.getters['wallet/getCoinsModalState']),
      modalRobotsOpened: computed(() => store.getters['fabrication/getRobotModalState']),
      switchCoinsModal: () => store.commit('wallet/SWITCH_COINS_MODAL'),
      switchRobotsModal: () => store.commit('fabrication/SWITCH_ROBOT_MODAL'),
    };
  },
};
</script>

<style lang="scss" scoped>
  @use '@/style/textpresets';
  @use '@/style/sprites';
  @use '@/style/universalextenders';
  @import '@/style/universalmixins';
  .interlayer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #1a1a1a9f;
    z-index: 100;
  }
  .modal-window {
    z-index: 101;
    background: #FFFFFF;
    border-radius: 10px;
    @include non-mobile {
      width: 496px;
      height: 240px;
      margin: 35vh auto;
      &__content {
        width: 320px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-left: 106px;
        height: 235px;
      }
      &__coin-modal-wrapper {
        position: absolute;
        margin-top: 48px;
        margin-left: 34px;
      }
      &__cross-modal-wrapper {
        float: right;
        margin-top: 8px;
        margin-right: 8px;
        cursor: pointer;
      }
    }
    @include mobile {
      width: 235px;
      min-height: 156px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 35vh auto;
      &__content {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        max-width: 210px;
        min-height: 100%;
        margin-bottom: 30px;
      }
      &__main-text {
        margin-bottom: 5px;
      }
      &__coin-modal-wrapper {
        margin: 10px 0px;
      }
      &__cross-modal-wrapper {
        margin-left: 190px;
        margin-top: 5px;
        margin-bottom: -20px;
      }
    }
  }
.modal-main-text {
  @extend %maintypo;
  @extend %h2semibold;
  @include mobile {
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    text-align: center;
  }
  letter-spacing: 0.02em;
  color: #212529;
}
.modal-secondary-text {
  @extend %maintypo;
  @extend %infotext;
  @include mobile {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
  }
  letter-spacing: 0.02em;
  color: #4C5865;
}
</style>
