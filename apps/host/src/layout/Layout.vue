<script setup lang="ts">
  import Header from './header/index.vue';
  import Content from './Content.vue';
  import sidebar from './sidebar/index.vue';
</script>

<template>
  <NLayout class="h-screen w-screen">
    <Header />
    <div className="h-px w-full bg-outline"></div>
    <NLayout position="absolute" style="top: 57px" has-sider>
      <sidebar />
      <div className="w-px h-full bg-outline"></div>
      <Content />
    </NLayout>
  </NLayout>
</template>

<style scoped></style>
