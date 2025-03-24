<template>
  <p class="text-center">(Only 50 lines of data)</p>
  <div>
    <h2>Female Names Distribution Chart</h2>
    <div style="width: 1000px; height: 700px" v-if="chartData.labels.length > 0">
      <Pie :data="chartData" />
    </div>
    <p v-else>Loading data...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

const chartData = ref({
  labels: [],
  datasets: [
    {
      label: 'Female Names Distribution',
      data: [],
      backgroundColor: [
        'rgba(255, 159, 64, 0.2)', // Orange
        'rgba(54, 162, 235, 0.2)', // Blue
        'rgba(255, 99, 132, 0.2)', // Red
        'rgba(75, 192, 192, 0.2)', // Green
      ],
      borderColor: [
        '#ff9f40', // Orange
        '#36a2eb', // Blue
        '#ff6384', // Red
        '#4bc0c0', // Green
      ],
      borderWidth: 2,
    },
  ],
})

onMounted(async () => {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/25th-nujf.json?$limit=50')
    const responseData = await response.json()

    const nameCounts = {}

    responseData.forEach((item) => {
      const gender = item.gndr
      const name = item.nm
      const count = parseInt(item.cnt, 10)

      if (gender === 'FEMALE' && name && !isNaN(count)) {
        nameCounts[name] = (nameCounts[name] || 0) + count
      }
    })

    const nameLabels = Object.keys(nameCounts)
    const nameData = Object.values(nameCounts)

    if (nameLabels.length > 0 && nameData.length > 0) {
      chartData.value.labels = nameLabels
      chartData.value.datasets[0].data = nameData
    }
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
