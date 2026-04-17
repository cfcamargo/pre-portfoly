<script lang="ts" setup>
import lottie from 'lottie-web'
import { Youtube, FileText, ArrowRight, Download } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { useTypewriter } from '~/composables/useTypewriter'

const animationContainer = ref()
const { text: typedText } = useTypewriter([
    'React Developer',
    'Full Stack .NET',
    'Android & Mobile',
    'Bots & Automação',
])

const stats = [
    { value: '4+', label: 'Anos' },
    { value: '10+', label: 'Projetos' },
    { value: '3', label: 'Plataformas' },
]

onMounted(() => {
    lottie.loadAnimation({
        container: animationContainer.value,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/home.json',
    })
})
</script>

<template>
    <div>
        <!-- ─── HERO ─── -->
        <section class="min-h-[calc(100vh-4rem)] flex flex-col justify-center py-16 md:py-24">
            <div class="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

                <!-- Left content -->
                <div class="flex flex-col gap-6 animate-fade-in-up">

                    <!-- Eyebrow -->
                    <div class="flex items-center gap-3">
                        <div class="h-px w-8 bg-gradient-to-r from-violet-500 to-cyan-500"></div>
                        <span class="section-label">Full Stack Developer</span>
                    </div>

                    <!-- Name -->
                    <div>
                        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none">
                            Cristian<br />
                            <span class="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                Camargo
                            </span>
                        </h1>

                        <!-- Typewriter -->
                        <div class="flex items-center gap-2 mt-4 h-7">
                            <span class="w-px h-5 bg-violet-500 rounded-full animate-pulse"></span>
                            <span class="text-base md:text-lg text-muted-foreground font-medium">
                                {{ typedText }}<span class="animate-blink-cursor text-violet-400">|</span>
                            </span>
                        </div>
                    </div>

                    <!-- Bio -->
                    <p class="text-muted-foreground leading-relaxed max-w-md">
                        Transformo ideias em software. Já ajudei empresas a sair das planilhas, automatizar tarefas repetitivas e levar seus produtos para o celular — e estou pronto para o próximo desafio.
                    </p>

                    <!-- CTAs -->
                    <div class="flex flex-wrap gap-3">
                        <NuxtLink to="/projects">
                            <button class="gradient-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white">
                                Ver Projetos
                                <ArrowRight :size="15" />
                            </button>
                        </NuxtLink>
                        <a href="/cv.pdf" target="_blank">
                            <Button variant="outline" class="gap-2 dark:border-white/10 dark:hover:bg-white/5 dark:text-foreground">
                                <Download :size="15" />
                                Baixar CV
                            </Button>
                        </a>
                    </div>

                    <!-- Stats -->
                    <div class="flex items-center gap-6 pt-2">
                        <template v-for="(stat, i) in stats" :key="stat.label">
                            <div class="text-center">
                                <p class="text-2xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent leading-none">
                                    {{ stat.value }}
                                </p>
                                <p class="text-xs text-muted-foreground mt-0.5">{{ stat.label }}</p>
                            </div>
                            <div v-if="i < stats.length - 1" class="h-8 w-px dark:bg-white/8 bg-gray-200"></div>
                        </template>
                    </div>
                </div>

                <!-- Right — Lottie -->
                <div class="hidden md:flex justify-center items-center">
                    <div ref="animationContainer" class="w-full max-w-xs lg:max-w-sm animate-float"></div>
                </div>
            </div>

            <!-- Tech marquee -->
            <div class="mt-16 pt-8 border-t dark:border-white/[0.04] border-gray-100">
                <p class="section-label mb-3">Stack</p>
                <Tecnologies />
            </div>
        </section>

        <!-- ─── YOUTUBE ─── -->
        <RevealItem>
            <section class="py-16 border-t dark:border-white/[0.04] border-gray-100">
                <div class="grid md:grid-cols-2 gap-10 items-center">
                    <div class="flex flex-col gap-5">
                        <div class="flex items-center gap-3">
                            <div class="w-9 h-9 rounded-xl bg-red-500/10 flex items-center justify-center">
                                <Youtube :size="18" class="text-red-400" />
                            </div>
                            <h2 class="font-bold text-xl">Me acompanhe no YouTube</h2>
                        </div>
                        <p class="text-muted-foreground leading-relaxed">
                            Este portfólio é temporário — estou construindo uma versão nova e mais completa, documentando tudo no meu canal.
                        </p>
                        <a href="https://www.youtube.com/@camargodev" target="_blank" class="w-fit">
                            <button class="gradient-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white">
                                Acessar Canal
                                <ArrowRight :size="15" />
                            </button>
                        </a>
                    </div>
                    <div class="w-full rounded-xl overflow-hidden dark:ring-1 dark:ring-white/[0.06]">
                        <VideoPlayer video-id="p9gZsFAiSAc&t=2021s" />
                    </div>
                </div>
            </section>
        </RevealItem>
    </div>
</template>
