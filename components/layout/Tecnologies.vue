<script lang="ts" setup>
const tecnologies = [
    'VueJS',
    'Nuxt', 
    'Tailwind CSS',
    'Typescript',
    'Adonis JS',
    'Node JS',
    'JavaScript',
    'ReactJS',
    'C#',
    'Ionic',
    'Postgress',
    'Docker'
]
</script>

<template>
    <div class="overflow-hidden whitespace-nowrap w-full flex items-center mt-8">
        <div class="flex animate-marquee">
            <div v-for="(tech, index) in tecnologies" :key="index" class="flex gap-4 items-center pl-4 text-xl font-bold">
                {{ tech }}
                <div v-if="index !== tecnologies.length-1" class="w-2 h-2 rounded-full bg-zinc-950 dark:bg-zinc-500"/>
            </div>
        </div>
    </div>
</template>
