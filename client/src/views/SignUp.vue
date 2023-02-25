<template>
  <main>
    <header>
      <h1>Create your account</h1>
      <p>
        Please note that phone verification is required for signup. Your number
        will only be used to verify your identity for security purposes.
      </p>
    </header>
    <div>
      <router-link to="./sign-in">Already have an account? Log in</router-link>
      <button type="submit">Continue with Google</button>
    </div>
  </main>
</template>

<script>
export default {
  name: 'SignUp',
};
</script>
