<script setup lang="ts">
useSeoMeta({
    title: 'Cristian Camargo | Desenvolvedor de Software',
    ogTitle: 'Cristian Camargo | Desenvolvedor de Software',
    description: 'Full Stack Developer com mais de 4 anos de experiência. Sistemas web, automações, apps mobile e APIs — do design ao deploy.',
    ogDescription: 'Full Stack Developer com mais de 4 anos de experiência. Sistemas web, automações, apps mobile e APIs — do design ao deploy.',
    ogImage: '/og-cover.png',
    twitterCard: 'summary_large_image',
})
</script>

<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>
