<template>
  <div>
    <WebsiteBase></WebsiteBase>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import WebsiteBase from './components/WebsiteBase.vue'
</script>

<style lang="scss" scoped></style>
