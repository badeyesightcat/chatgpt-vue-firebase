<template>
  <main
    class="flex-1 flex flex-col h-screen items-center justify-center text-white bg-[#343541] px-2">
    <h1 class="text-5xl font-bold mb-20">Chat GPT</h1>
    <div>
      <InfoBox v-for="(item, index) in descriptions" :key="index" />
    </div>
  </main>
</template>
<script>
import InfoBox from './InfoBox.vue';

export default {
  name: 'ChatSection',
  components: {
    InfoBox,
  },
  data() {
    return () {
      descriptions:
    };
  },
};
</script>
<style></style>
