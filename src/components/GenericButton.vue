<template>
  <button class='generic-button button-text'>
    Произвести биоробота
  </button>
</template>

<script>
export default {
  name: 'GenericButton',
};
</script>

<style lang="scss" scoped>
  .generic-button {
    width: 236px;
    height: 48px;
    border: 2px solid #FF7F22;
    border-radius: 60px;
    background-color: #ff7e2200;
  }
  .button-text {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.012em;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
  }
</style>
