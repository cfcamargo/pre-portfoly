<script lang="ts" setup>
import { Github, Linkedin, Youtube, Instagram, Mail, FileText, ChevronsLeftRight, LoaderCircle, ExternalLink } from 'lucide-vue-next'
import { useGetChanelLastVideo } from '~/composables/useGetChanelLastVideo'

useHead({ title: 'Cristian Camargo | Contato' })

const { fetchLatestVideo } = useGetChanelLastVideo()
const loading = ref(true)
const videoId = ref('')

onMounted(async () => {
    videoId.value = await fetchLatestVideo()
    loading.value = false
})

const socialLinks = [
    {
        label: 'GitHub',
        handle: '@cfcamargo',
        href: 'https://github.com/cfcamargo',
        icon: Github,
        color: 'dark:hover:border-gray-400/30 hover:border-gray-400/50',
        bg: 'dark:group-hover:bg-gray-400/5 group-hover:bg-gray-50',
    },
    {
        label: 'LinkedIn',
        handle: 'cristian-camargo',
        href: 'https://www.linkedin.com/in/cristian-camargo-4504291b4/',
        icon: Linkedin,
        color: 'dark:hover:border-blue-400/30 hover:border-blue-400/50',
        bg: 'dark:group-hover:bg-blue-400/5 group-hover:bg-blue-50',
    },
    {
        label: 'YouTube',
        handle: '@camargodev',
        href: 'https://www.youtube.com/@camargodev',
        icon: Youtube,
        color: 'dark:hover:border-red-400/30 hover:border-red-400/50',
        bg: 'dark:group-hover:bg-red-400/5 group-hover:bg-red-50',
    },
    {
        label: 'Instagram',
        handle: '@sr.fcamargo',
        href: 'https://www.instagram.com/sr.fcamargo/',
        icon: Instagram,
        color: 'dark:hover:border-pink-400/30 hover:border-pink-400/50',
        bg: 'dark:group-hover:bg-pink-400/5 group-hover:bg-pink-50',
    },
    {
        label: 'Email',
        handle: 'contato@camargodev.com.br',
        href: 'mailto:contato@camargodev.com.br',
        icon: Mail,
        color: 'dark:hover:border-violet-400/30 hover:border-violet-400/50',
        bg: 'dark:group-hover:bg-violet-400/5 group-hover:bg-violet-50',
    },
    {
        label: 'Currículo',
        handle: 'Download PDF',
        href: '/cv.pdf',
        icon: FileText,
        color: 'dark:hover:border-cyan-400/30 hover:border-cyan-400/50',
        bg: 'dark:group-hover:bg-cyan-400/5 group-hover:bg-cyan-50',
    },
]
</script>

<template>
    <div class="py-12 max-w-2xl mx-auto flex flex-col gap-12">

        <!-- Header -->
        <RevealItem>
            <div class="text-center flex flex-col gap-4">
                <div class="flex items-center justify-center gap-3">
                    <div class="h-px w-8 bg-gradient-to-r from-violet-500 to-cyan-500"></div>
                    <span class="section-label">Contato</span>
                    <div class="h-px w-8 bg-gradient-to-r from-cyan-500 to-violet-500"></div>
                </div>
                <h1 class="text-3xl md:text-4xl font-black">
                    Vamos
                    <span class="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                        conversar?
                    </span>
                </h1>
                <p class="text-muted-foreground max-w-sm mx-auto">
                    Aberto a novas oportunidades, projetos e colaborações. Me encontre em qualquer uma das redes abaixo.
                </p>
            </div>
        </RevealItem>

        <!-- Social links grid -->
        <RevealItem :delay="80">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                    v-for="link in socialLinks"
                    :key="link.label"
                    :href="link.href"
                    target="_blank"
                    :class="[
                        'group flex items-center gap-4 p-4 rounded-2xl border dark:border-white/[0.06] border-gray-100 transition-all duration-200',
                        'dark:bg-white/[0.02] bg-white hover:-translate-y-0.5',
                        link.color, link.bg
                    ]"
                >
                    <div class="w-10 h-10 rounded-xl dark:bg-white/[0.05] bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <component :is="link.icon" :size="18" />
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="font-semibold text-sm">{{ link.label }}</p>
                        <p class="text-xs text-muted-foreground truncate">{{ link.handle }}</p>
                    </div>
                    <ExternalLink :size="14" class="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </a>
            </div>
        </RevealItem>

        <!-- Last video -->
        <RevealItem :delay="160">
            <div class="flex flex-col gap-4">
                <div class="flex items-center gap-3">
                    <Youtube :size="18" class="text-red-400" />
                    <h2 class="font-bold">Último vídeo no canal</h2>
                </div>
                <div class="w-full rounded-2xl overflow-hidden dark:ring-1 dark:ring-white/[0.06]">
                    <div v-if="loading" class="aspect-video flex items-center justify-center dark:bg-white/[0.02] bg-gray-100">
                        <LoaderCircle class="animate-spin text-muted-foreground" :size="28" />
                    </div>
                    <VideoPlayer v-else :video-id="videoId" />
                </div>
            </div>
        </RevealItem>

    </div>
</template>
