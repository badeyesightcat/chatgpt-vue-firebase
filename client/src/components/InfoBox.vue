<template>
  <div class="flex flex-col items-center justify-center mb-5">
    <SunIcon class="h-8 w-8" />
    <h2>{{ title }}</h2>
  </div>
  <div class="space-y-2">
    <p class="info-text" v-for="(item, index) in desc" :key="index">
      {{ item }}
    </p>
  </div>
</template>
<script>
import { SunIcon } from '@heroicons/vue/24/outline';

export default {
  name: 'InfoBox',
  components: {
    SunIcon,
  },
  props: {
    title: {
      type: String,
      default: 'Sample title',
    },
    desc: {
      type: Array,
      default: () => [
        'hello, world',
        'give me some hints on it',
        'nah, dont need your attention',
      ],
    },
  },
};
</script>
<style lang=""></style>
