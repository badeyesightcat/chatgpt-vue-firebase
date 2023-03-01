<template>
  <div class="flex">
    <Sidebar />
    <ChatLog />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import ChatLog from '../components/ChatLog.vue';

export default {
  name: 'Chat',
  components: {
    Sidebar,
    ChatLog,
  },
};
</script>
