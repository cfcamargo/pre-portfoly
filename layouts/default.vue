<script lang="ts" setup>
</script>

<template>
    <div class="min-h-screen relative">
        <!-- Background orbs — visible in dark mode -->
        <div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
            <div class="absolute -top-[25rem] -left-[15rem] w-[55rem] h-[55rem] rounded-full dark:bg-violet-700/10 bg-violet-100/40 blur-[130px] animate-orb-float"></div>
            <div class="absolute top-[35%] -right-[20rem] w-[50rem] h-[50rem] rounded-full dark:bg-cyan-600/7 bg-cyan-100/30 blur-[120px] animate-orb-float [animation-delay:5s]"></div>
            <div class="absolute -bottom-[20rem] left-[25%] w-[45rem] h-[45rem] rounded-full dark:bg-purple-800/8 bg-purple-100/20 blur-[110px] animate-orb-float [animation-delay:10s]"></div>
        </div>

        <Header />

        <main class="pt-16">
            <Container>
                <slot />
            </Container>
        </main>
    </div>
</template>
