<script>
import Sidebar from './components/Sidebar.vue';
import ChatSection from './components/ChatSection.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    ChatSection,
  },
};
</script>

<template>
  <div class="flex">
    <Sidebar />
    <ChatSection />
  </div>
</template>

<style scoped></style>
