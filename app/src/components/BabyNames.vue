<template>
  <router-link :to="namesPath" class="card">
    <h2>{{ school.name }}</h2>
    <h3>{{ id }}</h3>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  name: Object,
  id: Number,
})
const schoolPath = computed(() => {
  return `/Pokemon/${props.id}`
})
</script>

<style scoped></style>
