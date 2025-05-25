<script setup lang="ts">
  import { usePreferencesStore } from '@amf/stores';
  const preferencesStore = usePreferencesStore();
</script>

<template>
  <div>{{ preferencesStore.collapsed }}</div>
</template>

<style scoped></style>
