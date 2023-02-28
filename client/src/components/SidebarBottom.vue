<template>
  <div class="flex flex-col items-center mt-auto">
    <!-- <strong class="chat-row">{{ userSignedIn }}</strong> -->
    <button @click="signOut" class="chat-row">Sign Out</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'SidebarBottom',
  computed: {
    ...mapState({
      // userSignedIn: (state) => state.user?.email,
    }),
  },
};
</script>
