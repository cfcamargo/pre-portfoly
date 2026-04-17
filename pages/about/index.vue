<script lang="ts" setup>
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

useHead({
    title: 'Cristian Camargo | Sobre Mim',
})

const skillCategories = [
    {
        label: 'Frontend',
        bgClass: 'bg-blue-500/10',
        textClass: 'text-blue-600 dark:text-blue-400',
        borderClass: 'border-blue-200 dark:border-blue-800',
        dotClass: 'bg-blue-500',
        skills: [
            { name: 'React JS', icon: 'https://www.svgrepo.com/show/452092/react.svg' },
            { name: 'TypeScript', icon: 'https://www.svgrepo.com/show/374146/typescript-official.svg' },
            { name: 'Tailwind CSS', icon: 'https://www.svgrepo.com/show/374118/tailwind.svg' },
            { name: 'JavaScript', icon: 'https://www.svgrepo.com/show/353925/javascript.svg' },
            { name: 'Vue.js', icon: 'https://www.svgrepo.com/show/354528/vue.svg' },
            { name: 'Nuxt.js', icon: 'https://upload.vectorlogo.zone/logos/nuxtjs/images/546e1030-a547-4b23-beb1-018e4f093fa6.svg' },
        ],
    },
    {
        label: 'Backend',
        bgClass: 'bg-emerald-500/10',
        textClass: 'text-emerald-600 dark:text-emerald-400',
        borderClass: 'border-emerald-200 dark:border-emerald-800',
        dotClass: 'bg-emerald-500',
        skills: [
            { name: '.NET / C#', icon: 'https://www.svgrepo.com/show/373575/csharp.svg' },
            { name: 'Node.js', icon: 'https://www.svgrepo.com/show/452075/node-js.svg' },
            { name: 'AdonisJS', icon: 'https://cdn.worldvectorlogo.com/logos/adonisjs.svg' },
            { name: 'PostgreSQL', icon: 'https://www.svgrepo.com/show/354200/postgresql.svg' },
            { name: 'Docker', icon: 'https://www.svgrepo.com/show/448221/docker.svg' },
        ],
    },
    {
        label: 'Mobile',
        bgClass: 'bg-violet-500/10',
        textClass: 'text-violet-600 dark:text-violet-400',
        borderClass: 'border-violet-200 dark:border-violet-800',
        dotClass: 'bg-violet-500',
        skills: [
            { name: 'React Native', icon: 'https://www.svgrepo.com/show/452092/react.svg' },
            { name: 'Android', icon: 'https://www.svgrepo.com/show/452156/android.svg' },
            { name: 'Kotlin', icon: 'https://www.svgrepo.com/show/374001/kotlin.svg' },
        ],
    },
    {
        label: 'Ferramentas',
        bgClass: 'bg-amber-500/10',
        textClass: 'text-amber-600 dark:text-amber-400',
        borderClass: 'border-amber-200 dark:border-amber-800',
        dotClass: 'bg-amber-500',
        skills: [
            { name: 'Figma', icon: 'https://www.svgrepo.com/show/354987/figma.svg' },
            { name: 'Git / GitHub', icon: 'https://www.svgrepo.com/show/452210/git.svg' },
            { name: 'Cypress', icon: 'https://www.svgrepo.com/show/353630/cypress.svg' },
        ],
    },
]
</script>

<template>
    <section id="about" class="py-8 flex flex-col gap-6 mt-4">

        <!-- Sobre Mim -->
        <RevealItem>
            <Card>
                <CardContent>
                    <div class="grid xs:grid-cols-1 md:grid-cols-2 gap-8 py-6">
                        <div class="flex items-start justify-center">
                            <NuxtImg
                                src="/about.png"
                                loading="lazy"
                                :quality="60"
                                class="w-full max-w-sm rounded-lg object-cover"
                            />
                        </div>
                        <div class="flex flex-col gap-4">
                            <h2 class="font-bold text-2xl">Sobre Mim</h2>
                            <p class="text-muted-foreground leading-relaxed">
                                Olá, sou Cristian Camargo, desenvolvedor de software com foco em React, .NET e desenvolvimento mobile para Android. Atualmente trabalho na <strong class="text-foreground">Kognit</strong> como Desenvolvedor Front-End, construindo interfaces com React e aplicações mobile com React Native.
                            </p>
                            <p class="text-muted-foreground leading-relaxed">
                                Minha trajetória começou no ecossistema Vue.js, onde desenvolvi aplicações robustas como a plataforma CygniAG (Cygni Agroscience). Com o tempo, ampliei minha stack para back-end com <strong class="text-foreground">.NET / C#</strong> e estou desenvolvendo aplicativos nativos para Android com <strong class="text-foreground">Kotlin e Jetpack Compose</strong>.
                            </p>
                            <p class="text-muted-foreground leading-relaxed">
                                Além do código, tenho experiência em design com Figma — o que me permite pensar nas soluções do início ao fim, do layout ao deploy.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </RevealItem>

        <!-- Skills por Categoria -->
        <RevealItem :delay="80">
            <Card>
                <CardHeader>
                    <CardTitle>Skills & Tecnologias</CardTitle>
                    <CardDescription>Organizado por área de atuação</CardDescription>
                </CardHeader>
                <CardContent>
                    <div class="grid xs:grid-cols-1 md:grid-cols-2 gap-4">
                        <div
                            v-for="category in skillCategories"
                            :key="category.label"
                            :class="['rounded-lg border p-4 flex flex-col gap-3', category.borderClass, category.bgClass]"
                        >
                            <div class="flex items-center gap-2">
                                <div :class="['w-2.5 h-2.5 rounded-full flex-shrink-0', category.dotClass]" />
                                <h3 :class="['font-bold text-xs uppercase tracking-wider', category.textClass]">
                                    {{ category.label }}
                                </h3>
                            </div>
                            <div class="flex flex-wrap gap-2">
                                <div
                                    v-for="skill in category.skills"
                                    :key="skill.name"
                                    class="flex items-center gap-1.5 bg-background rounded-md px-2.5 py-1.5 text-sm font-medium border border-border/50 hover:shadow-sm transition-shadow"
                                >
                                    <NuxtImg :src="skill.icon" class="w-4 h-4 object-contain flex-shrink-0" />
                                    {{ skill.name }}
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </RevealItem>

        <!-- Experiência Profissional -->
        <Card>
            <CardHeader>
                <CardTitle>Experiência Profissional</CardTitle>
            </CardHeader>
            <CardContent>
                <div class="flex flex-col">

                    <!-- Kognit -->
                    <RevealItem direction="left">
                        <div class="flex gap-5">
                            <div class="xs:hidden md:flex flex-col items-center flex-shrink-0">
                                <div class="w-3 h-3 rounded-full bg-foreground mt-1.5 ring-4 ring-background flex-shrink-0" />
                                <div class="flex-1 w-px bg-border mt-1" />
                            </div>
                            <div class="pb-6 flex-1 min-w-0">
                                <Card class="hover:shadow-md transition-shadow duration-300">
                                    <CardHeader>
                                        <div class="flex items-start justify-between flex-wrap gap-2">
                                            <div>
                                                <CardTitle>Desenvolvedor Front End</CardTitle>
                                                <CardDescription>
                                                    <a href="https://www.kognit.com.br/" target="_blank" class="hover:underline">Kognit</a>
                                                </CardDescription>
                                            </div>
                                            <span class="text-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 rounded-full px-2.5 py-1 font-medium flex-shrink-0">
                                                Atual
                                            </span>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p class="text-muted-foreground text-sm leading-relaxed">
                                            Desenvolvimento de aplicações web com React e Styled Components, e mobile com React Native. Implemento features, corrijo bugs e aprimoro a UX, colaborando com design e back-end para entregar soluções performáticas e bem estruturadas.
                                        </p>
                                    </CardContent>
                                    <CardFooter>
                                        <div class="flex items-center gap-2 text-xs text-muted-foreground">
                                            <span>Jan 2025</span>
                                            <div class="w-1 h-1 rounded-full bg-muted-foreground" />
                                            <span>Atualmente</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </RevealItem>

                    <!-- Cygni -->
                    <RevealItem direction="left" :delay="100">
                        <div class="flex gap-5">
                            <div class="xs:hidden md:flex flex-col items-center flex-shrink-0">
                                <div class="w-3 h-3 rounded-full bg-foreground mt-1.5 ring-4 ring-background flex-shrink-0" />
                                <div class="flex-1 w-px bg-border mt-1" />
                            </div>
                            <div class="pb-6 flex-1 min-w-0">
                                <Card class="hover:shadow-md transition-shadow duration-300">
                                    <CardHeader>
                                        <CardTitle>Desenvolvedor Front End</CardTitle>
                                        <CardDescription>
                                            <a href="https://cygniagroscience.com/home" target="_blank" class="hover:underline">Cygni Agroscience</a>
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p class="text-muted-foreground text-sm leading-relaxed">
                                            Desenvolvimento front-end na plataforma CygniAG — software agrícola de análise de imagens de satélite para tomada de decisão. Vue.js e Tailwind CSS com integração da API do Google Maps, focado em melhorar UX e performance.
                                        </p>
                                    </CardContent>
                                    <CardFooter>
                                        <div class="flex items-center gap-2 text-xs text-muted-foreground">
                                            <span>Ago 2022</span>
                                            <div class="w-1 h-1 rounded-full bg-muted-foreground" />
                                            <span>Set 2024</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </RevealItem>

                    <!-- Freelancer -->
                    <RevealItem direction="left" :delay="200">
                        <div class="flex gap-5">
                            <div class="xs:hidden md:flex flex-col items-center flex-shrink-0">
                                <div class="w-3 h-3 rounded-full bg-foreground mt-1.5 ring-4 ring-background flex-shrink-0" />
                                <div class="flex-1 w-px bg-border mt-1" />
                            </div>
                            <div class="pb-6 flex-1 min-w-0">
                                <Card class="hover:shadow-md transition-shadow duration-300">
                                    <CardHeader>
                                        <CardTitle>Desenvolvedor Web</CardTitle>
                                        <CardDescription>Freelancer</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p class="text-muted-foreground text-sm leading-relaxed">
                                            Desenvolvimento de sites completos e landing pages para empresas locais. Período de crescimento acelerado aplicando e aprofundando habilidades em diferentes stacks e clientes.
                                        </p>
                                    </CardContent>
                                    <CardFooter>
                                        <div class="flex items-center gap-2 text-xs text-muted-foreground">
                                            <span>Jun 2021</span>
                                            <div class="w-1 h-1 rounded-full bg-muted-foreground" />
                                            <span>Atualmente</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </RevealItem>

                    <!-- Geofarm -->
                    <RevealItem direction="left" :delay="300">
                        <div class="flex gap-5">
                            <div class="xs:hidden md:flex flex-col items-center flex-shrink-0">
                                <div class="w-3 h-3 rounded-full bg-foreground mt-1.5 ring-4 ring-background flex-shrink-0" />
                            </div>
                            <div class="flex-1 min-w-0">
                                <Card class="hover:shadow-md transition-shadow duration-300">
                                    <CardHeader>
                                        <CardTitle>Coordenador de Tecnologia e Inovação</CardTitle>
                                        <CardDescription>
                                            <a href="https://geofarmagro.com.br/" target="_blank" class="hover:underline">Geofarm Agricultura de Precisão</a>
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p class="text-muted-foreground text-sm leading-relaxed">
                                            Liderança no setor de agricultura de precisão — gestão de equipamentos como piloto automático, taxa variável em plantadeiras e GPS agrícola. Experiência com gestão de equipes e resolução de problemas técnicos de campo.
                                        </p>
                                    </CardContent>
                                    <CardFooter>
                                        <div class="flex items-center gap-2 text-xs text-muted-foreground">
                                            <span>Ago 2018</span>
                                            <div class="w-1 h-1 rounded-full bg-muted-foreground" />
                                            <span>Jul 2022</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </RevealItem>

                </div>
            </CardContent>
        </Card>

    </section>
</template>
