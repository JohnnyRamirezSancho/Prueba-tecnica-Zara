<script setup>
import HeadOne from '../components/HeadOne.vue';

const props = defineProps({
  id: {
    type: String,
  },
});

</script>

<template>
  <main>
    <HeadOne></HeadOne>
    <p>{{ id }}</p>
  </main>
</template>
