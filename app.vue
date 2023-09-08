<template>
  <LazyElConfigProvider :locale="zhCn">
    <LazyNuxtLayout>
      <LazyNuxtPage />
    </LazyNuxtLayout>
  </LazyElConfigProvider>
</template>

<script setup lang="ts">
import zhCn from "element-plus/es/locale/lang/zh-cn";
</script>
