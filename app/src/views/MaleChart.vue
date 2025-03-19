<template>
  <div>
    <h2>Male Names Chart</h2>
    <div style="width: 400px; height: 400px">
      <Pie :data="chartData" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement, // Import ArcElement for pie chart
  CategoryScale,
  LinearScale,
} from 'chart.js'

// Register chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)

// Chart data configuration
const chartData = ref({
  labels: [],
  datasets: [
    {
      label: 'Male Names',
      data: [],
      backgroundColor: 'rgba(66, 185, 131, 0.2)', // Background color for the pie chart
      borderColor: '#42b983', // Border color for slices
      borderWidth: 2,
    },
  ],
})

// Fetch the data
onMounted(async () => {
  try {
    const response = await fetch(
      'https://data.cityofnewyork.us/resource/25th-nujf.json?$limit=1000',
    )
    const responseData = await response.json()

    // Log the data to inspect the structure
    console.log(responseData)

    const filteredData = responseData.filter((item) => item.gndr === 'MALE')

    // Log filtered data to verify the structure after filtering
    console.log(filteredData)

    // Process and set chart data only if the filtered data is valid
    if (filteredData.length > 0) {
      const names = filteredData.map((item) => item.nm)
      const counts = filteredData.map((item) => item.cnt)

      // Ensure that the names and counts arrays are not empty
      if (names.length > 0 && counts.length > 0) {
        chartData.value.labels = names
        chartData.value.datasets[0].data = counts
      } else {
        console.warn('No valid names or counts available for the chart')
      }
    } else {
      console.warn('No male data available after filtering')
    }
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})
</script>

<style scoped>
/* Ensure the container has a specific size */
div {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
