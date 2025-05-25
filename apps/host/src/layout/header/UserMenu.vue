<script setup lang="ts">
  import { Avatar, Quit, Handbook } from '@amf/icons';
  import { NIcon } from 'naive-ui';
  import { Component, h } from 'vue';

  function renderIcon(icon: Component) {
    return () => {
      return h(NIcon, null, {
        default: () => h(icon),
      });
    };
  }

  const options = [
    {
      label: '操作手册',
      key: '操作手册',
      icon: renderIcon(Handbook),
    },
    {
      label: () => h('span', { class: 'text-warning' }, '退出账号'),
      key: '退出账号',
      icon: () =>
        h(
          NIcon,
          { class: 'text-warning' },
          {
            default: () => h(Quit),
          },
        ),
    },
  ];

  function handleSelect() {}
</script>

<template>
  <NDropdown :options="options" trigger="click" size="large" @select="handleSelect">
    <div class="h-full flex gap-2 items-center cursor-pointer">
      <NIcon :size="24"><Avatar /></NIcon>
      <div class="flex gap-1 items-center font-medium text-sm">
        <span>Administrator</span>
        <div class="w-0 h-0 border-x-[6px] border-x-transparent border-t-8 border-t-accent"></div>
      </div>
    </div>
  </NDropdown>
</template>

<style scoped></style>
