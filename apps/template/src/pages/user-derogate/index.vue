<script setup lang="ts">
  import { useAccessStore } from '@amf/stores';
  const accessStore = useAccessStore();
</script>

<template>
  <div>{{ accessStore.isAccessChecked }}</div>
</template>

<style scoped></style>
