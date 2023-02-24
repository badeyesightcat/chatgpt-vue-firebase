<template>
  <main
    class="flex-1 flex flex-col h-screen items-center justify-center text-white bg-[#343541] px-2">
    <h1 class="text-5xl font-bold mb-20">Chat GPT</h1>
    <div class="flex space-x-2 text-center">
      <InfoBox
        v-for="(item, index) in descriptions"
        :key="index"
        v-bind="item" />
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
    return {
      descriptions: [
        {
          icon: 'sun',
          title: 'Examples',
          desc: [
            'Explain quantum computing in simple terms',
            'Got any creative ideas for a 10 year old’s birthday?',
            'How do I make an HTTP request in Javascript?',
          ],
        },
        {
          icon: 'bolt',
          title: 'Capabilities',
          desc: [
            'Remembers what user said earlier in the conversation',
            'Allows user to provide follow-up corrections',
            'Trained to decline inappropriate requests',
          ],
        },
        {
          icon: 'exclamationTriangle',
          title: 'Limitations',
          desc: [
            'May occasionally generate incorrect information',
            'May occasionally produce harmful instructions or biased content',
            'Limited knowledge of world and events after 2021',
          ],
        },
      ],
    };
  },
};
</script>
