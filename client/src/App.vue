<script>
export default {
  name: 'App',
  data() {
    return {
      user: null,
      isSignedIn: false,
    };
  },
};
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
