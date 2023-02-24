<template>
  <div>
    <div class="flex flex-col items-center justify-center mb-5">
      <SunIcon class="h-8 w-8" v-if="icon === 'sun'" />
      <BoltIcon class="h-8 w-8" v-if="icon === 'bolt'" />
      <ExclamationTriangleIcon
        class="h-8 w-8"
        v-if="icon === 'exclamationTriangle'" />
      <h2>{{ title }}</h2>
    </div>
    <div class="space-y-2">
      <p class="info-text" v-for="(item, index) in desc" :key="index">
        {{ item }}
      </p>
    </div>
  </div>
</template>
<script>
import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from '@heroicons/vue/24/outline';

export default {
  name: 'InfoBox',
  components: {
    SunIcon,
    BoltIcon,
    ExclamationTriangleIcon,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: Array,
      default: () => [],
    },
    icon: {
      type: String,
      default: '',
    },
  },
};
</script>
