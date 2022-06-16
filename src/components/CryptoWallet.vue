<template>
  <div class="wallet-container">
    <div class="balance-wrapper">
      <div class="coins">
        <div class="coins__coin coin" v-for="coin in coins" :key="coin"></div>
      </div>
      <div class="balance balance_text">{{ coins }} biorobo {{ textCased }}</div>
    </div>
    <div class="farm-container">
      <div class="farm-button-wrapper">
        <div class="make-money-button make-money-button_text disable-select" @click="farmCoins">
          Нацыганить
        </div>
      </div>
      <div class="farm-condition-wrapper">
        <div class="checkbox-wrapper">
          <div class="condition-checkbox" @click="switchStackMode">
            <div class="checkmark" v-if="stackMode"></div>
          </div>
        </div>
        <div class="condition condition_text">Цыганить по 5 монет</div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'CryptoWallet',
  setup() {
    const store = useStore();
    return {
      coins: computed(() => store.getters['wallet/getCoins']),
      stackMode: computed(() => store.getters['wallet/getStackMode']),
      textCased: computed(() => store.getters['wallet/getTextCased']),
      farmCoins: () => store.commit('wallet/ADD_COINS_FIXED'),
      switchStackMode: () => store.commit('wallet/SWITCH_STACK_MODE'),
    };
  },
};
</script>

<style lang="scss" scoped>
  @use '@/style/textpresets';
  @use '@/style/sprites';
  @import '@/style/universalmixins';

  .wallet-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-top: 60px;
    @include non-desktop {
      align-self: center;
      width: 100%;
    }
    @include desktop {
      margin-left: 135px;
    }
  }
  .balance-wrapper {
    display: flex;
    flex-direction: column;
  }
  .farm-container {
    margin-top: 34px;
    display: flex;
    flex-direction: row;
    @include mobile {
      flex-direction: column;
    }
  }
  .farm-button-wrapper {
    display: flex;
    margin-right: 29px;
  }
  .farm-condition-wrapper {
    display: flex;
    @include mobile {
      margin-top: 24px;
    }
  }
  .coins {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    &__coin {
      margin-right: -12.4px;
    }
  }
  .balance {
    margin-top: 24px;
  }
  .make-money-button {
    display: inline-block;
    cursor: pointer;
  }
  .checkbox-wrapper {
    display: inline-block;
  }
  .condition-checkbox {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border: 2px solid #A3B8CC;
    box-sizing: border-box;
    margin-right: 12px;
  }
  .disable-select {
    user-select: none;
  }
  .balance_text {
    @extend %maintypo;
    @extend %h3semibold;
    letter-spacing: 0.01em;
    color: #A3B8CC;
  }
  .make-money-button_text {
    @extend %maintypo;
    @extend %text;
    letter-spacing: 0.015em;
    color: #FF7F22;
    text-decoration: 1px underline #ff7e229d;
    text-underline-position: under;
  }
  .condition_text {
    @extend %maintypo;
    @extend %text;
    color: #FFFFFF;
  }
</style>
