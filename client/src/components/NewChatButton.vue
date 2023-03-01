<template>
  <div class="border-gray-700 border chat-row" @click="addNewChat">
    <PlusIcon class="h-4 w-4" />
    <p>New Chat</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { addDoc, collection, serverTimestamp } from '@firebase/firestore';
import { PlusIcon } from '@heroicons/vue/24/solid';
import { db } from '@/firebase';

export default {
  name: 'NewChatButton',
  components: {
    PlusIcon,
  },
  data() {
    return {
      chats: [],
    };
  },
  computed: {
    ...mapState({
      userEmailSignedIn: (state) => state.user.email,
    }),
  },
  // firestore: {
  //   chats: collection(db, 'chats'),
  // },
  mounted() {
    console.log(this.userEmailSignedIn);
  },
  methods: {
    async addNewChat() {
      const doc = await addDoc(
        collection(db, 'users', this.userEmailSignedIn, 'chats'),
        {
          userId: this.userEmailSignedIn,
          createdAt: serverTimestamp(),
        },
      );

      this.$router.push(`/chat/${doc.id}`);
    },
  },
};
</script>
