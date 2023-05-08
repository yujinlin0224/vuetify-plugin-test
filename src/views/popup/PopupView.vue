<template>
  <VCard>
    <VCardItem>
      <VIcon>mdi-monitor</VIcon>
      Popup view is mounted at {{ mountedTime }}
    </VCardItem>
    <VCardActions>
      <VBtn @click="click()">Click it</VBtn>
    </VCardActions>
  </VCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mountedTime = ref(new Date().toLocaleTimeString())

function click() {
  console.log('click from popup')
}
</script>

<style lang="scss">
@import url('vuetify/styles');

$vuetify-classes: '', '.display-4', '.display-3', '.display-2', '.display-1', '.headline', '.title',
  '.subtitle-2', '.subtitle-1', '.body-2', '.body-1', '.caption', '.overline', '.text-h1',
  '.text-h2', '.text-h3', '.text-h4', '.text-h5', '.text-h6', '.text-subtitle-1', '.text-subtitle-2',
  '.text-body-1', '.text-body-2', '.text-button', '.text-caption', '.text-overline', '.text-sm-h1',
  '.text-sm-h2', '.text-sm-h3', '.text-sm-h4', '.text-sm-h5', '.text-sm-h6', '.text-sm-subtitle-1',
  '.text-sm-subtitle-2', '.text-sm-body-1', '.text-sm-body-2', '.text-sm-button', '.text-sm-caption',
  '.text-sm-overline', '.text-md-h1', '.text-md-h2', '.text-md-h3', '.text-md-h4', '.text-md-h5',
  '.text-md-h6', '.text-md-subtitle-1', '.text-md-subtitle-2', '.text-md-body-1', '.text-md-body-2',
  '.text-md-button', '.text-md-caption', '.text-md-overline', '.text-lg-h1', '.text-lg-h2',
  '.text-lg-h3', '.text-lg-h4', '.text-lg-h5', '.text-lg-h6', '.text-lg-subtitle-1',
  '.text-lg-subtitle-2', '.text-lg-body-1', '.text-lg-body-2', '.text-lg-button', '.text-lg-caption',
  '.text-lg-overline', '.text-xl-h1', '.text-xl-h2', '.text-xl-h3', '.text-xl-h4', '.text-xl-h5',
  '.text-xl-h6', '.text-xl-subtitle-1', '.text-xl-subtitle-2', '.text-xl-body-1', '.text-xl-body-2',
  '.text-xl-button', '.text-xl-caption', '.text-xl-overline';

@each $class in $vuetify-classes {
  #plugin-popup #{$class} {
    font-family: 'Roboto', 'Noto Sans', 'Noto Sans TC', sans-serif !important;
  }
}

code,
kbd,
pre,
samp {
  font-family: 'Roboto Mono', 'Noto Sans Mono', 'Noto Sans', 'Noto Sans TC', monospace !important;
}
</style>
