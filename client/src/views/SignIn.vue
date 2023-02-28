<template>
  <main
    class="w-full h-screen flex justify-center items-center flex-col bg-gray-50">
    <section class="w-96 flex flex-col justify-center items-center">
      <strong class="text-center text-3xl px-10 pt-10 pb-8"
        >Welcome back</strong
      >
      <form
        @submit.prevent="signIn(user)"
        class="flex flex-col gap-3 mb-8 w-full">
        <input
          type="email"
          v-model="user.email"
          class="input"
          placeholder="Enter your email" />
        <input
          type="password"
          v-model="user.password"
          class="input"
          placeholder="password" />
        <button
          class="btn flex justify-center gap-2 btn-primary"
          type="submit"
          @submit.prevent="signIn(user)">
          Sign In
        </button>
      </form>
      <!-- <button class="btn flex justify-center gap-2 btn-primary" type="submit">
        Continue with Google
      </button> -->
      <p class="mt-4">
        Don't have an account?
        <router-link class="link" to="./sign-up">Sign Up</router-link>
      </p>
    </section>
  </main>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SignIn',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions({
      signIn: 'signInAction',
    }),
  },
};
</script>
