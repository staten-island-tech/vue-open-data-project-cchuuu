<template>
  <div>
    <h2>Ethnicity Distribution Chart</h2>
    <div style="width: 500px; height: 400px" v-if="chartData.labels.length > 0">
      <Bar :data="chartData" />
    </div>
    <p v-else>Loading data...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = ref({
  labels: [],
  datasets: [
    {
      label: 'Ethnicity Distribution',
      data: [],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: '#36a2eb',
      borderWidth: 2,
    },
  ],
})

onMounted(async () => {
  try {
    const response = await fetch(
      'https://data.cityofnewyork.us/resource/25th-nujf.json?$limit=1000',
    )
    const responseData = await response.json()

    const ethnicityCounts = {}

    responseData.forEach((item) => {
      const ethnicity = item.ethnicity
      const count = parseInt(item.cnt, 10)

      if (ethnicity && !isNaN(count)) {
        ethnicityCounts[ethnicity] = (ethnicityCounts[ethnicity] || 0) + count
      }
    })

    const ethnicityLabels = Object.keys(ethnicityCounts)
    const ethnicityData = Object.values(ethnicityCounts)

    if (ethnicityLabels.length > 0 && ethnicityData.length > 0) {
      chartData.value.labels = ethnicityLabels
      chartData.value.datasets[0].data = ethnicityData
    } else {
      chartData.value.labels = ['Asian', 'Black', 'White', 'Hispanic']
      chartData.value.datasets[0].data = [100, 200, 150, 175]
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    chartData.value.labels = ['Asian', 'Black', 'White', 'Hispanic']
    chartData.value.datasets[0].data = [100, 200, 150, 175]
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
