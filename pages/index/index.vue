<script lang="ts" setup>
import lottie from 'lottie-web'
import { Youtube, FileText, Mail } from 'lucide-vue-next';
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useTypewriter } from '~/composables/useTypewriter'

const animationContainer = ref()

const { text: typedText } = useTypewriter([
    'React & React Native',
    'Full Stack .NET / C#',
    'Android Developer',
])

onMounted(() => {
    lottie.loadAnimation({
        container: animationContainer.value,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/home.json'
    })
})
</script>

<template>
    <section id="home" class="py-8 flex flex-col gap-6">

        <!-- Hero -->
        <Card class="overflow-hidden">
            <CardContent class="p-8 grid xs:grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div class="flex flex-col gap-5 animate-fade-in-up">
                    <div class="flex flex-col gap-2">
                        <p class="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                            Olá, eu sou
                        </p>
                        <h1 class="font-bold text-4xl md:text-5xl leading-tight">
                            Cristian Camargo
                        </h1>
                        <div class="h-8 flex items-center gap-1 mt-1">
                            <span class="text-lg font-semibold text-muted-foreground">
                                {{ typedText }}
                            </span>
                            <span class="animate-blink-cursor font-light text-2xl leading-none text-muted-foreground">|</span>
                        </div>
                    </div>

                    <p class="text-muted-foreground leading-relaxed max-w-md">
                        Desenvolvedor de Software focado em React, .NET e Android. Construo interfaces modernas, APIs robustas e apps mobile — do design ao deploy.
                    </p>

                    <div class="flex flex-wrap gap-3">
                        <a href="/cv.pdf" target="_blank">
                            <Button class="flex gap-2 items-center">
                                <FileText :size="15" />
                                Meu CV
                            </Button>
                        </a>
                        <NuxtLink to="/contacts">
                            <Button variant="outline" class="flex gap-2 items-center">
                                <Mail :size="15" />
                                Contato
                            </Button>
                        </NuxtLink>
                    </div>

                    <div>
                        <p class="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Stack</p>
                        <Tecnologies />
                    </div>
                </div>

                <div class="flex justify-center">
                    <div ref="animationContainer" class="w-full max-w-xs"></div>
                </div>
            </CardContent>
        </Card>

        <!-- Stats -->
        <RevealItem>
            <div class="grid grid-cols-3 gap-4">
                <Card class="text-center hover:shadow-md transition-shadow duration-300">
                    <CardContent class="py-6 px-2">
                        <p class="text-3xl font-bold">5+</p>
                        <p class="text-xs text-muted-foreground mt-1 leading-snug">Anos de<br/>experiência</p>
                    </CardContent>
                </Card>
                <Card class="text-center hover:shadow-md transition-shadow duration-300">
                    <CardContent class="py-6 px-2">
                        <p class="text-3xl font-bold">10+</p>
                        <p class="text-xs text-muted-foreground mt-1 leading-snug">Projetos<br/>entregues</p>
                    </CardContent>
                </Card>
                <Card class="text-center hover:shadow-md transition-shadow duration-300">
                    <CardContent class="py-6 px-2">
                        <p class="text-3xl font-bold">3</p>
                        <p class="text-xs text-muted-foreground mt-1 leading-snug">Plataformas<br/>Web · API · Mobile</p>
                    </CardContent>
                </Card>
            </div>
        </RevealItem>

        <!-- YouTube -->
        <RevealItem :delay="100">
            <Card>
                <CardContent class="p-8 grid xs:grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div class="flex flex-col gap-4">
                        <div class="flex items-center gap-2">
                            <Youtube />
                            <h4 class="font-bold">
                                Me Acompanhe no YouTube
                            </h4>
                        </div>
                        <p class="text-muted-foreground">
                            Este portfólio é temporário, pois estou trabalhando em uma versão nova e ainda mais completa, disponível em breve.
                        </p>
                        <p class="text-muted-foreground">
                            Todo o processo de criação está sendo documentado no meu canal do YouTube.
                        </p>
                        <a href="https://www.youtube.com/@camargodev" target="_blank">
                            <Button class="xs:w-full md:w-auto">
                                Acessar Canal
                            </Button>
                        </a>
                    </div>
                    <div class="w-full">
                        <VideoPlayer video-id="p9gZsFAiSAc&t=2021s" />
                    </div>
                </CardContent>
            </Card>
        </RevealItem>

    </section>
</template>
