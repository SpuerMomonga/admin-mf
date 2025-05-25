<script setup lang="ts">
  import Logo from './Logo.vue';
  import Tabs from './Tabs.vue';
  import UserMenu from './UserMenu.vue';
</script>

<template>
  <NLayoutHeader class="h-14 min-h-14 max-h-14 w-full bg-foreground">
    <div class="h-full w-full flex px-4 gap-1">
      <Logo />
      <Tabs />
      <UserMenu />
    </div>
  </NLayoutHeader>
</template>

<style scope></style>
