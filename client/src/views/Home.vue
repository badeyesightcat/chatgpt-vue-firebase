<template>
  <div class="flex">
    <Sidebar />
    <ChatSectionDefault />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import ChatSectionDefault from '../components/ChatSectionDefault.vue';

export default {
  name: 'Home',
  components: {
    Sidebar,
    ChatSectionDefault,
  },
};
</script>
