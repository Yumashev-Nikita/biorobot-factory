<template>
  <div class="app-container">
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      coins: 0,
      biobots: [
        {
          id: 0, hand: true, microchip: true, soul: true, gender: 'male',
        },
      ],
    };
  },
};
</script>
<style lang="scss">
  .app-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(82.33% 70.44% at 50% 0%, #26394D 0%, #212529 100%), #FFFFFF;
  }
</style>
