<template>
  <div class="coins">
    <div class="coins__coin" v-for="coin in balance" :key="coin"></div>
  </div>
  <div class="balance balance_text">{{ balance }} biorobo {{ text_cased }}</div>
  <div class="make-money-button make-money-button_text">Нацыганить</div>
  <div class="condition-checkbox"></div>
  <div class="condition condition_text">Цыганить по 5 монет</div>
</template>

<script>
export default {
  name: 'CryptoWallet',
  data() {
    return {
      balance: 45,
      text_cased: 'монет',
    };
  },
  mounted() {
    if (this.balance >= 11 && this.balance <= 19) {
      this.text_cased = 'монет';
    } else if (this.balance % 10 >= 2 && this.balance % 10 <= 4) {
      this.text_cased = 'монеты';
    } else if (this.balance % 10 === 1) {
      this.text_cased = 'монета';
    }
  },
};
</script>

<style lang="scss" scoped>
  .coins {
    display: flex;
    margin-left: 247px;
    width: 100%;
    &__coin {
      width: 20px;
      height: 20px;
      margin-right: -25.6px;
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
    letter-spacing: 0.035em;
    font-size: 16px;
    line-height: 24px;
    color: #FF7F22;
    text-decoration: 1px underline #ff7e229d;
    text-underline-position: under
  }
  .condition-checkbox {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-bottom: -8px;
    margin-left: 29px;
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
</style>
