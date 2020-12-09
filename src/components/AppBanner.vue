<template>
  <div class="banner"></div>
</template>

<script>
export default {
  name: "AppBanner"
};
</script>

<style scoped>
.banner {
  width: 70%;
  height: 100vh;
  background: url("/assets/bg.svg") no-repeat;
  background-size: cover;
  background-position: 50% 30%;
  border-radius: 10rem;
  position: fixed;
  top: 0;
  right: -20%;
}
</style>
