<template>
  <aside
    class="flex flex-col h-screen p-2 bg-[#202123] max-w-xs overflow-y-auto md:min-w-[20rem]">
    <NewChatButton />
    <!-- <nav>
      <ul>
        <li><a href=""></a></li>
      </ul>
    </nav> -->
  </aside>
</template>
<script>
import NewChatButton from './NewChatButton.vue';

export default {
  name: 'Sidebar',
  components: { NewChatButton },
};
</script>
