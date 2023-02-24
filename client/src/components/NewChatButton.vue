<template>
  <div class="border-gray-700 border chat-row">
    <PlusIcon class="h-4 w-4" />
    <p>New Chat</p>
  </div>
</template>

<script>
import { PlusIcon } from '@heroicons/vue/24/solid';
export default {
  name: 'NewChatButton',
  components: {
    PlusIcon,
  },
};
</script>
