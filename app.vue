<script setup lang="ts">
useSeoMeta({
    title: 'Cristian Camargo | Desenvolvedor de software',
    ogTitle: 'Cristian Camargo | Desenvolvedor de software',
    description: 'Olá, sou o Cristian, desenvolvedor de software com foco no ecossistema Vue.js. Explore meu site para conhecer mais sobre meu trabalho, projetos desenvolvidos e formas de contato. Confira e descubra como posso ajudar em suas soluções digitais.',
    ogDescription: 'Olá, sou o Cristian, desenvolvedor de software com foco no ecossistema Vue.js. Explore meu site para conhecer mais sobre meu trabalho, projetos desenvolvidos e formas de contato. Confira e descubra como posso ajudar em suas soluções digitais.',
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
