<script>
import Home from './views/Home.vue';
import SignIn from './views/SignIn.vue';

export default {
  name: 'App',
  components: {
    Home,
    SignIn,
  },
  data() {
    return {
      user: null,
      isSignedIn: true,
    };
  },
};
</script>

<template>
  <div class="flex">
    <template v-if="isSignedIn">
      <Home />
    </template>
    <template v-else>
      <SignIn />
    </template>
  </div>
</template>

<style scoped></style>
