<script>
export default {
  name: 'App',
  beforeMount() {
    this.$store.dispatch('fetchUserAction');
  },
};
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
