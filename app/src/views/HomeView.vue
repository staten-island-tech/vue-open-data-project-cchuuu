<template>
  <div class="container flex flex-wrap items-center justify-around m-auto">
    <displayCards
      v-for="(name, index) in names"
      :key="index"
      :name="name"
      :id="index + 1"
    ></displayCards>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import displayCards from '@/components/displayCards.vue'
const names = ref([])

async function getNames() {
  const response = await fetch('https://data.cityofnewyork.us/resource/25th-nujf.json?')
  let data = await response.json()
  names.value = data
}

onMounted(() => {
  getNames()
})
</script>

<style scoped></style>
