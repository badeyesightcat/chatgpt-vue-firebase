<template>
  <aside
    class="flex flex-col h-screen p-2 bg-[#202123] max-w-xs overflow-y-auto md:min-w-[20rem]">
    <NewChatButton />
    <nav>
      <ul>
        <li v-for="item in chats">
          <a href="">{{ item.chatId }}</a>
        </li>
      </ul>
    </nav>
    <SidebarBottom />
  </aside>
</template>
<script>
import { db } from '@/firebase';
import { collection, onSnapshot } from '@firebase/firestore';
import { mapState } from 'vuex';
import NewChatButton from './NewChatButton.vue';
import SidebarBottom from './SidebarBottom.vue';

export default {
  name: 'Sidebar',
  components: { NewChatButton, SidebarBottom },
  data() {
    return {
      chats: [],
      unsubscribe: null,
    };
  },
  computed: {
    ...mapState({
      userEmail: (state) => state.user.email,
    }),
  },
  mounted() {
    this.unsubscribe = onSnapshot(
      collection(db, 'users', this.userEmail, 'chats'),
      (querySnapshot) => {
        const chats = [];

        querySnapshot.forEach((doc) => {
          const chat = {
            chatId: doc.id,
            createdAt: doc.data().createdAt,
          };
          chats.push(chat);
        });

        this.chats = [...chats];
      },
    );
  },
  destroyed() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  },
};
</script>
