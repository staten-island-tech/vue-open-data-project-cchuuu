<template>
  <div class="container">
    <h2>{{ school.name }}</h2>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BabyNames from '@/components/BabyNames.vue'
const names = ref([])

async function getSAT() {
  const response = await fetch('https://data.cityofnewyork.us/resource/25th-nujf.json?$limit=10000')
  let data = await response.json()
  names.value = data
}

onMounted(() => {
  getSAT()
})
</script>

<style scoped></style>
