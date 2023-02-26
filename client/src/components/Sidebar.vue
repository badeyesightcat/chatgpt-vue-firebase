<template>
  <aside
    class="flex flex-col h-screen p-2 bg-[#202123] max-w-xs overflow-y-auto md:min-w-[20rem]">
    <NewChatButton />
    <!-- <nav>
      <ul>
        <li><a href=""></a></li>
      </ul>
    </nav> -->
    <button @click="signOut">Sign Out</button>
  </aside>
</template>
<script>
import { mapActions } from 'vuex';
import NewChatButton from './NewChatButton.vue';

export default {
  name: 'Sidebar',
  components: { NewChatButton },
  methods: {
    ...mapActions({
      signOut: 'signOutAction',
    }),
  },
};
</script>
