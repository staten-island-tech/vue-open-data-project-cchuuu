<template>
  <div class="container">
    <div v-for="(name, index) in names" :key="index" :name="name" :id="index + 1">
      {{ name.nm }}
      {{ name.ethcty }}
      {{ name.cnt }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BabyNames from '@/components/WebsiteBase.vue'
const names = ref([])

async function getSAT() {
  const response = await fetch('https://data.cityofnewyork.us/resource/25th-nujf.json?$limit=2000')
  let data = await response.json()
  names.value = data
  console.log(data)
}

onMounted(() => {
  getSAT()
})
</script>

<style scoped></style>
