<template>
  <div class="coins">
    <div class="coins__coin" v-for="coin in coins" :key="coin"></div>
  </div>
  <div class="balance balance_text">{{ coins }} biorobo {{ textCased }}</div>
  <div class="make-money-button make-money-button_text disable-select"
                  @keyup.enter="submit" @click="farmCoins">
    Нацыганить
  </div>
  <div class="checkbox-wrapper">
    <div class="condition-checkbox" @keyup.enter="submit" @click="setStackMode">
      <div class="checkmark" v-if="stackMode"></div>
    </div>
  </div>
  <div class="condition condition_text">Цыганить по 5 монет</div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'CryptoWallet',
  setup() {
    const store = useStore();
    return {
      coins: computed(() => store.state.cW.coins),
      stackMode: computed(() => store.state.cW.stackedCoinFarm),
      textCased: computed(() => store.state.cW.balanceTextCased),
      farmCoins: () => store.dispatch('farmCoins'),
      setStackMode: () => store.dispatch('setStackMode'),
    };
  },
};
</script>

<style lang="scss" scoped>
  .coins {
    display: flex;
    &__coin {
      width: 20px;
      height: 20px;
      margin-right: -12.4px;
      background: url('../assets/coin.svg');
      background-repeat: no-repeat;
    }
  }
  .balance {
    margin-top: 24px;
  }
  .balance_text {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.01em;
    font-size: 24px;
    line-height: 24px;
    color: #A3B8CC;
  }
  .make-money-button {
    margin-top: 44px;
  }
  .make-money-button_text {
    display: inline-block;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.015em;
    font-size: 16px;
    line-height: 24px;
    color: #FF7F22;
    text-decoration: 1px underline #ff7e229d;
    text-underline-position: under;
    cursor: pointer;
  }
  .checkbox-wrapper {
    display: inline-block;
    margin-bottom: -6px;
    margin-left: 29px;
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
  }
  .condition {
    display: inline-block;
    margin-left: 12px;
  }
  .condition_text {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
  }
  .checkmark {
    width: 14px;
    height: 12px;
    background: url('../assets/checkmark.svg');
    background-repeat: no-repeat;
  }
  .disable-select {
    user-select: none;
  }
</style>
