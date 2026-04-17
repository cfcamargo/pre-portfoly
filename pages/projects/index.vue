<script lang="ts" setup>
import { Github, ExternalLink } from 'lucide-vue-next'

useHead({ title: 'Cristian Camargo | Projetos' })

const projects = [
    {
        title: 'Modular Pré Moldados',
        description: 'A empresa controlava tudo em planilhas. Desenvolvi um sistema completo para substituir isso — com controle de pedidos, estoque e clientes num só lugar.',
        cover: '/covers/modular.png',
        tags: ['React', 'shadcn/ui', 'NestJS', 'Prisma', 'PostgreSQL'],
        links: [
            { label: 'Web', href: 'https://github.com/cfcamargo/modular-web', type: 'github' },
            { label: 'API', href: 'https://github.com/cfcamargo/modular-api', type: 'github' },
        ],
    },
    {
        title: 'RM Agro',
        description: 'Site institucional para empresa de gestão de risco no agronegócio. Construído em duas línguas (PT/EN) para alcançar o mercado internacional.',
        cover: '/covers/rmagro.png',
        tags: ['Nuxt.js', 'Vue.js', 'Tailwind CSS', 'i18n'],
        links: [
            { label: 'Código', href: 'https://github.com/cfcamargo/rm-group', type: 'github' },
            { label: 'Produção', href: 'https://rmgroup.com.br', type: 'external' },
        ],
    },
    {
        title: 'Cuiabá Imports',
        description: 'O catálogo de produtos vivia numa planilha do Google. Transformei isso num site dinâmico, onde qualquer atualização na planilha reflete automaticamente no site.',
        cover: '/covers/cuiaba.png',
        tags: ['Nuxt.js', 'Vue.js', 'AdonisJS', 'Tailwind CSS'],
        links: [
            { label: 'Web', href: 'https://github.com/cfcamargo/cuiaba-imports', type: 'github' },
            { label: 'API', href: 'https://github.com/cfcamargo/api-cuiabaImports', type: 'github' },
            { label: 'Produção', href: 'https://cuiabaimports.com/', type: 'external' },
        ],
    },
    {
        title: 'Imperial Casino',
        description: 'Site para cassino virtual com suporte a três idiomas (PT, EN e ES), pensado para alcançar diferentes públicos de forma simples e envolvente.',
        cover: '/covers/imperial.png',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'i18n'],
        links: [
            { label: 'Código', href: 'https://github.com/cfcamargo/imperial-games', type: 'github' },
            { label: 'Produção', href: 'https://imperialcasinopjc.com/es', type: 'external' },
        ],
    },
]
</script>

<template>
    <div class="py-12 flex flex-col gap-12">

        <!-- Header -->
        <RevealItem>
            <div class="flex items-start justify-between flex-wrap gap-4">
                <div>
                    <div class="flex items-center gap-3 mb-3">
                        <div class="h-px w-8 bg-gradient-to-r from-violet-500 to-cyan-500"></div>
                        <span class="section-label">Portfólio</span>
                    </div>
                    <h1 class="text-3xl md:text-4xl font-black">
                        Projetos
                        <span class="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Recentes</span>
                    </h1>
                    <p class="text-muted-foreground mt-2 text-sm">
                        Confira mais projetos no meu
                        <a href="https://github.com/cfcamargo" target="_blank" class="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">GitHub</a>.
                    </p>
                </div>
            </div>
        </RevealItem>

        <!-- Grid -->
        <div class="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <RevealItem
                v-for="(project, idx) in projects"
                :key="project.title"
                :delay="(idx % 3) * 80"
            >
                <div class="glow-card flex flex-col h-full dark:bg-white/[0.02] bg-white rounded-2xl border dark:border-white/[0.06] border-gray-100 overflow-hidden group">

                    <!-- Cover image -->
                    <div class="relative overflow-hidden aspect-video bg-gray-100 dark:bg-white/[0.03]">
                        <NuxtImg
                            :src="project.cover"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                        />
                        <!-- Gradient overlay -->
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <!-- Status badge -->
                        <div v-if="project.status" class="absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full bg-amber-500/90 text-white backdrop-blur-sm">
                            {{ project.status }}
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="flex flex-col flex-1 p-5 gap-3">
                        <h2 class="font-bold text-base leading-snug">{{ project.title }}</h2>
                        <p class="text-sm text-muted-foreground leading-relaxed flex-1">{{ project.description }}</p>

                        <!-- Tags -->
                        <div class="flex flex-wrap gap-1.5">
                            <span
                                v-for="tag in project.tags"
                                :key="tag"
                                class="text-xs px-2 py-0.5 rounded-full dark:bg-white/[0.05] bg-gray-100 dark:text-gray-300 text-gray-600 border dark:border-white/[0.06] border-gray-200"
                            >
                                {{ tag }}
                            </span>
                        </div>

                        <!-- Links -->
                        <div class="flex flex-wrap gap-2 pt-1">
                            <a
                                v-for="link in project.links"
                                :key="link.label"
                                :href="link.href"
                                target="_blank"
                                class="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg dark:bg-white/[0.05] bg-gray-100 hover:dark:bg-white/10 hover:bg-gray-200 transition-colors border dark:border-white/[0.06] border-gray-200"
                            >
                                <Github v-if="link.type === 'github'" :size="12" />
                                <ExternalLink v-else :size="12" />
                                {{ link.label }}
                            </a>
                        </div>
                    </div>
                </div>
            </RevealItem>
        </div>

    </div>
</template>
