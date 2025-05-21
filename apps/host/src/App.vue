<script setup lang="ts">
import { Component, onMounted, shallowRef } from 'vue';
import { loadRemote } from '@module-federation/runtime';

const component = shallowRef(null);

onMounted(async () => {
  loadRemote<{ default: Component }>('amf_template/TestPage').then(res => {
    component.value = res?.default;
  })
})

</script>

<template>
  <div class="h-12 w-12">
    <component :is="component" />
  </div>
</template>

<style scoped></style>
