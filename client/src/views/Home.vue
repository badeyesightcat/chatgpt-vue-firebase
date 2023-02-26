<template>
  <div class="flex">
    <Sidebar />
    <ChatSection />
  </div>
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
