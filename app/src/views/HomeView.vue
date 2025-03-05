<template>
  <div class="container">
    <div v-for="(school, index) in satscore" :key="index" :school="school" :id="index + 1">
      {{ school.school_name }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SATStats from '@/components/SATStats.vue'
const satscore = ref([])

async function getSAT() {
  const response = await fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
  let data = await response.json()
  satscore.value = data
  console.log(data)
}

onMounted(() => {
  getSAT()
})
</script>

<style scoped></style>
