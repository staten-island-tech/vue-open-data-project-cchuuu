<template>
  <div
    class="card w-1/6 h-[17vw] bg-gray-300 rounded-3xl flex flex-col items-center justify-evenly m-6 border-2 border-black"
  >
    <h2 class="text-center font-bold text-2xl">{{ name.nm }}</h2>
    <h3 class="text-center text-xl">{{ name.gndr }}</h3>
    <h3 class="text-center text-xl">{{ name.ethcty }}</h3>
    <h3 class="text-center text-xl"># of Babies: {{ name.cnt }}</h3>
  </div>
</template>

<script setup>
defineProps({
  name: Object,
})
</script>

<style scoped></style>
