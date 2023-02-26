<template>
  <main
    class="w-full h-screen flex justify-center items-center flex-col bg-gray-50 dark:bg-gray-800">
    <section class="w-96 flex flex-col justify-center items-center">
      <strong class="text-center text-3xl px-10 pt-10 pb-8"
        >Create your account</strong
      >
      <button class="btn flex justify-center gap-2 btn-primary" type="submit">
        Continue with Google
      </button>
      <p class="mt-4">
        Already have an account?
        <router-link class="link" to="./sign-in"> Log in</router-link>
      </p>
    </section>
  </main>
</template>

<script>
export default {
  name: 'SignUp',
};
</script>
