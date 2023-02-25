<script>
import Home from './views/Home.vue';
import Gate from './views/Gate.vue';

export default {
  name: 'App',
  components: {
    Home,
    Gate,
  },
  data() {
    return {
      user: null,
      isSignedIn: false,
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
      <Gate />
    </template>
  </div>
</template>

<style scoped></style>
