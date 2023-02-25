<template>
  <Sidebar />
  <ChatSection />
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import ChatSection from '../components/ChatSection.vue';

export default {
  name: 'Home',
  components: {
    Sidebar,
    ChatSection,
  },
};
</script>
