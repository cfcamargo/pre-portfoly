<script lang="ts" setup>
</script>

<template>
    <div class="min-h-screen relative">
        <!-- Background orbs -->
        <div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
            <div class="absolute -top-[25rem] -left-[15rem] w-[55rem] h-[55rem] rounded-full dark:bg-purple-700/10 bg-purple-100/40 blur-[140px] animate-orb-float"></div>
            <div class="absolute -bottom-[20rem] right-[10%] w-[45rem] h-[45rem] rounded-full dark:bg-violet-800/7 bg-violet-100/20 blur-[120px] animate-orb-float [animation-delay:8s]"></div>
        </div>

        <Header />

        <main class="pt-16">
            <Container>
                <slot />
            </Container>
        </main>
    </div>
</template>
