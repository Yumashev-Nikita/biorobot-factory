<template>
  <div class="coins">
    <div class="coins__coin coin" v-for="coin in coins" :key="coin"></div>
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
      coins: computed(() => store.state.cryptowallet.coins),
      stackMode: computed(() => store.state.cryptowallet.stackedCoinFarm),
      textCased: computed(() => store.state.cryptowallet.balanceTextCased),
      farmCoins: () => store.dispatch('farmCoins'),
      setStackMode: () => store.dispatch('setStackMode'),
    };
  },
};
</script>

<style lang="scss" scoped>
  @use '../style/textstyles';
  @use '../style/sprites';
  .coins {
    display: flex;
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
    margin-top: 44px;
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
  .disable-select {
    user-select: none;
  }
</style>
