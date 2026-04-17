<script lang="ts" setup>
const tecnologies = [
    'React',
    'TypeScript',
    '.NET / C#',
    'Android',
    'Kotlin',
    'React Native',
    'Tailwind CSS',
    'Vue.js',
    'Nuxt.js',
    'Node.js',
    'Docker',
    'PostgreSQL',
]
</script>

<template>
    <div class="overflow-hidden whitespace-nowrap w-full flex items-center mt-4">
        <div class="flex animate-marquee">
            <div
                v-for="(tech, index) in [...tecnologies, ...tecnologies]"
                :key="index"
                class="flex gap-4 items-center pl-6 text-base font-semibold text-muted-foreground"
            >
                {{ tech }}
                <div class="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
            </div>
        </div>
    </div>
</template>
