<template>
  <main
    class="w-full h-screen flex justify-center items-center flex-col bg-gray-50">
    <section class="w-96 flex flex-col justify-center items-center">
      <strong class="mb-2 text-center">Welcome to ChatGPT</strong>
      <p class="mb-4 text-center">
        Log in with your OpenAI account to continue
      </p>
      <div class="flex flex-row gap-3">
        <button
          class="btn flex justify-center gap-2 btn-primary"
          @click="handleSignIn">
          Sign In
        </button>
        <button
          class="btn flex justify-center gap-2 btn-primary"
          @click="handleSignUp">
          Sign Up
        </button>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Gate',
  methods: {
    handleSignUp() {
      this.$router.push('./sign-up');
    },
    handleSignIn() {
      this.$router.push('./sign-in');
    },
  },
};
</script>
