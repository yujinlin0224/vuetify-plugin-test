<template>
  <VCard>
    <VIcon>mdi-monitor</VIcon>
    Popup view is mounted at {{ mountedTime }}
    <VBtn>Click it</VBtn>
  </VCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mountedTime = ref(new Date().toLocaleTimeString())
</script>

<style lang="scss">
@import url('vuetify/styles');
</style>
