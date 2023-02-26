<template>
  <main
    class="w-full h-screen flex justify-center items-center flex-col bg-gray-50 dark:bg-gray-800">
    <section class="w-96 flex flex-col justify-center items-center">
      <strong class="text-center text-3xl px-10 pt-10 pb-8"
        >Create your account</strong
      >
      <form
        @submit.prevent="signUp(user)"
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
          @submit.prevent="signUp(user)">
          Sign Up
        </button>
      </form>
      <!-- <button class="btn flex justify-center gap-2 btn-primary" type="submit">
        Continue with Google
      </button> -->
      <p class="mt-4">
        Already have an account?
        <router-link class="link" to="./sign-in">Sign in</router-link>
      </p>
    </section>
  </main>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SignUp',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  updated() {
    console.log(this.user);
  },
  methods: {
    ...mapActions({ signUp: 'signUpAction' }),
  },
};
</script>
