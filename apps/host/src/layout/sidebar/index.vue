<script setup lang="ts">
  import { usePreferencesStore, useAccessStore } from '@amf/stores';
  import { CollapsedOff, CollapsedOn } from '@amf/icons';

  const preferencesStore = usePreferencesStore();
  const accessStore = useAccessStore();

  function toggleCollapsed() {
    preferencesStore.setCollapsed(!preferencesStore.collapsed);
  }
</script>

<template>
  <NLayoutSider
    collapse-mode="width"
    :collapsed="preferencesStore.collapsed"
    :collapsed-width="64"
    :width="220"
    :native-scrollbar="false"
  >
    <div class="w-full mb-14">
      <n-menu
        :indent="12"
        :collapsed="preferencesStore.collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="accessStore.accessMenus"
      />
    </div>
    <div class="absolute bottom-0 left-0 w-full h-16 flex flex-col cursor-pointer" @click="toggleCollapsed">
      <div className="h-px w-full bg-outline"></div>
      <div v-if="!preferencesStore.collapsed" class="flex-auto flex items-center gap-3 px-3">
        <NIcon :size="20">
          <CollapsedOff />
        </NIcon>
        <span>收起导航</span>
      </div>
      <n-tooltip v-else :delay="300" placement="right" trigger="hover">
        <template #trigger>
          <div class="flex-auto flex items-center justify-center">
            <NIcon :size="20">
              <CollapsedOn />
            </NIcon>
          </div>
        </template>
        <span>展开导航</span>
      </n-tooltip>
    </div>
  </NLayoutSider>
</template>

<style scoped></style>
