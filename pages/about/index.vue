<script lang="ts" setup>
useHead({ title: 'Cristian Camargo | Sobre Mim' })

const skillCategories = [
    {
        label: 'Frontend',
        icon: '🖥',
        borderClass: 'dark:border-blue-500/20 border-blue-200',
        bgClass: 'dark:bg-blue-500/5 bg-blue-50/50',
        textClass: 'text-blue-500 dark:text-blue-400',
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
        icon: '⚙️',
        borderClass: 'dark:border-emerald-500/20 border-emerald-200',
        bgClass: 'dark:bg-emerald-500/5 bg-emerald-50/50',
        textClass: 'text-emerald-600 dark:text-emerald-400',
        dotClass: 'bg-emerald-500',
        skills: [
            { name: '.NET / C#', icon: 'https://www.svgrepo.com/show/376369/dotnet.svg' },
            { name: 'Node.js', icon: 'https://www.svgrepo.com/show/452075/node-js.svg' },
            { name: 'AdonisJS', icon: 'https://cdn.worldvectorlogo.com/logos/adonisjs.svg' },
            { name: 'PostgreSQL', icon: 'https://www.svgrepo.com/show/354200/postgresql.svg' },
            { name: 'Docker', icon: 'https://www.svgrepo.com/show/448221/docker.svg' },
        ],
    },
    {
        label: 'Mobile',
        icon: '📱',
        borderClass: 'dark:border-violet-500/20 border-violet-200',
        bgClass: 'dark:bg-violet-500/5 bg-violet-50/50',
        textClass: 'text-violet-600 dark:text-violet-400',
        dotClass: 'bg-violet-500',
        skills: [
            { name: 'React Native', icon: 'https://www.svgrepo.com/show/452092/react.svg' },
            { name: 'Android', icon: 'https://www.svgrepo.com/show/349588/android.svg' },
            { name: 'Kotlin', icon: 'https://www.svgrepo.com/show/373728/kotlin.svg' },
        ],
    },

    
    {
        label: 'Ferramentas',
        icon: '🛠',
        borderClass: 'dark:border-amber-500/20 border-amber-200',
        bgClass: 'dark:bg-amber-500/5 bg-amber-50/50',
        textClass: 'text-amber-600 dark:text-amber-400',
        dotClass: 'bg-amber-500',
        skills: [
            { name: 'Figma', icon: 'https://www.svgrepo.com/show/354987/figma.svg' },
            { name: 'Git / GitHub', icon: 'https://www.svgrepo.com/show/452210/git.svg' },
            { name: 'Cypress', icon: 'https://www.svgrepo.com/show/353630/cypress.svg' },
        ],
    },
    {
        label: 'IA & Produtividade',
        icon: '🤖',
        borderClass: 'dark:border-fuchsia-500/20 border-fuchsia-200',
        bgClass: 'dark:bg-fuchsia-500/5 bg-fuchsia-50/50',
        textClass: 'text-fuchsia-600 dark:text-fuchsia-400',
        dotClass: 'bg-fuchsia-500',
        skills: [
            { name: 'Claude Code', icon: 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/claude.svg' },
            { name: 'Gemini', icon: 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/gemini.svg' },
            { name: 'ChatGPT', icon: 'https://www.svgrepo.com/show/306500/openai.svg' },
        ],
    },
]

const experiences = [
    {
        role: 'Desenvolvedor Front End',
        company: 'Kognit',
        href: 'https://www.kognit.com.br/',
        period: 'Jan 2025 – Atual',
        current: true,
        description: 'Atuo principalmente no front-end com React e no mobile com React Native, mas também mergulho no back-end com .NET quando o projeto pede — o que me dá uma visão completa da solução do começo ao fim. Hoje estou à frente de um dos projetos mais desafiadores da minha carreira: um sistema completo para o ramo de seguros, com regras de negócio complexas e alto nível de exigência técnica.',
        tags: ['React', 'React Native', 'TypeScript', 'Styled Components', '.NET'],
    },
    {
        role: 'Desenvolvedor Front End',
        company: 'Cygni Agroscience',
        href: 'https://cygniagroscience.com/home',
        period: 'Ago 2022 – Set 2024',
        current: false,
        description: 'Fiz parte do time que desenvolve o CygniAG, uma plataforma que usa imagens de satélite para ajudar produtores rurais a tomarem decisões melhores no campo. Trabalhei com Vue.js, Tailwind CSS e integração da API do Google Maps — aprendendo muito sobre UX de mapas e sistemas de alta complexidade.',
        tags: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Google Maps API'],
    },
    {
        role: 'Desenvolvedor Web',
        company: 'Freelancer',
        href: null,
        period: 'Jun 2021 – Atual',
        current: false,
        description: 'Trabalhei para diversas empresas locais desenvolvendo sites, sistemas de gestão e landing pages do zero. Foi o período em que mais aprendi — cada projeto trazia um problema diferente e uma tecnologia nova pra dominar.',
        tags: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Node.js'],
    },
    {
        role: 'Coordenador de Tecnologia e Inovação',
        company: 'Geofarm Agricultura de Precisão',
        href: 'https://geofarmagro.com.br/',
        period: 'Ago 2018 – Jul 2022',
        current: false,
        description: 'Coordenei a área de tecnologia numa empresa de agricultura de precisão, cuidando de equipamentos como piloto automático, GPS agrícola e sistemas de taxa variável. Foi aí que nasceu meu interesse pela interseção entre tecnologia e agronegócio — algo que carrego até hoje.',
        tags: ['Gestão', 'Agro Tech', 'Liderança'],
    },
]
</script>

<template>
    <div class="py-12 flex flex-col gap-20">

        <!-- ─── SOBRE MIM ─── -->
        <RevealItem>
            <section>
                <div class="flex items-center gap-3 mb-10">
                    <div class="h-px flex-1 max-w-[2rem] bg-gradient-to-r from-violet-500 to-cyan-500"></div>
                    <span class="section-label">Sobre Mim</span>
                </div>
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="relative">
                        <div class="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 rounded-2xl blur-2xl -z-10 scale-95"></div>
                        <NuxtImg
                            src="/about.png"
                            loading="lazy"
                            format="webp"
                            :quality="65"
                            sizes="100vw md:50vw lg:560px"
                            placeholder
                            class="w-full rounded-2xl object-cover dark:ring-1 dark:ring-white/[0.06] transition-opacity duration-500"
                        />
                    </div>
                    <div class="flex flex-col gap-5">
                        <h2 class="text-3xl font-black">
                            Prazer, eu sou o
                            <span class="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                                Cristian.
                            </span>
                        </h2>
                        <p class="text-muted-foreground leading-relaxed">
                            Desenvolvedor Full Stack com foco em front-end e mais de 4 anos de experiência. Hoje faço parte do time da <strong class="text-foreground font-semibold">Kognit</strong>, onde trabalho com React e React Native no dia a dia — mas minha trajetória vai muito além disso.
                        </p>
                        <p class="text-muted-foreground leading-relaxed">
                            Ao longo da carreira, trabalhei em projetos bastante variados: sistemas de controle de estoque, plataformas financeiras, software de análise de mapas agrícolas com integração do Google Maps, e bots de automação para WhatsApp e Telegram que ajudam empresas a conectar seus sistemas e eliminar horas de trabalho manual.
                        </p>
                        <p class="text-muted-foreground leading-relaxed">
                            Hoje estou expandindo para .NET no back-end e desenvolvendo um app de GPS agrícola para Android com Kotlin. Também trabalho com produtos SaaS — ajudando empresas a modernizarem seus processos com tecnologia feita sob medida.
                        </p>
                        <div class="flex gap-3 pt-2">
                            <a href="/cv.pdf" target="_blank">
                                <button class="gradient-btn inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white">
                                    Baixar CV
                                </button>
                            </a>
                            <NuxtLink to="/contacts">
                                <button class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium dark:bg-white/5 bg-gray-100 hover:dark:bg-white/8 hover:bg-gray-200 transition-colors border dark:border-white/[0.06] border-gray-200">
                                    Entrar em contato
                                </button>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </section>
        </RevealItem>

        <!-- ─── SKILLS ─── -->
        <RevealItem :delay="80">
            <section>
                <div class="flex items-center gap-3 mb-10">
                    <div class="h-px flex-1 max-w-[2rem] bg-gradient-to-r from-violet-500 to-cyan-500"></div>
                    <span class="section-label">Skills & Tecnologias</span>
                </div>
                <div class="grid xs:grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                        v-for="category in skillCategories"
                        :key="category.label"
                        :class="['rounded-2xl border p-5 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-0.5', category.borderClass, category.bgClass]"
                    >
                        <div class="flex items-center gap-2">
                            <span class="text-lg">{{ category.icon }}</span>
                            <h3 :class="['font-bold text-sm uppercase tracking-wider', category.textClass]">
                                {{ category.label }}
                            </h3>
                        </div>
                        <div class="flex flex-wrap gap-2">
                            <div
                                v-for="skill in category.skills"
                                :key="skill.name"
                                class="flex items-center gap-1.5 dark:bg-black/20 bg-white rounded-lg px-2.5 py-1.5 text-sm font-medium dark:border-white/[0.06] border-gray-200/80 border hover:scale-105 transition-transform cursor-default"
                            >
                                <NuxtImg :src="skill.icon" class="w-4 h-4 object-contain flex-shrink-0" />
                                {{ skill.name }}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </RevealItem>

        <!-- ─── EXPERIÊNCIA ─── -->
        <section>
            <RevealItem>
                <div class="flex items-center gap-3 mb-10">
                    <div class="h-px flex-1 max-w-[2rem] bg-gradient-to-r from-violet-500 to-cyan-500"></div>
                    <span class="section-label">Experiência Profissional</span>
                </div>
            </RevealItem>

            <div class="flex flex-col">
                <template v-for="(exp, idx) in experiences" :key="exp.company">
                    <RevealItem direction="left" :delay="idx * 80">
                        <div class="flex gap-5">
                            <!-- Timeline line -->
                            <div class="xs:hidden md:flex flex-col items-center flex-shrink-0 w-4">
                                <div class="w-3 h-3 rounded-full mt-5 ring-4 dark:ring-background ring-white flex-shrink-0"
                                    :class="exp.current ? 'bg-gradient-to-br from-violet-500 to-cyan-500 animate-pulse' : 'dark:bg-white/20 bg-gray-300'"
                                ></div>
                                <div v-if="idx < experiences.length - 1" class="flex-1 w-px dark:bg-white/[0.06] bg-gray-200 mt-1"></div>
                            </div>

                            <!-- Card -->
                            <div :class="['flex-1 min-w-0 pb-6', idx === experiences.length - 1 ? 'pb-0' : '']">
                                <div class="glow-card dark:bg-white/[0.02] bg-white rounded-2xl border dark:border-white/[0.06] border-gray-100 p-5">
                                    <div class="flex items-start justify-between flex-wrap gap-2 mb-3">
                                        <div>
                                            <h3 class="font-bold">{{ exp.role }}</h3>
                                            <a
                                                v-if="exp.href"
                                                :href="exp.href"
                                                target="_blank"
                                                class="text-sm text-muted-foreground hover:text-violet-400 transition-colors"
                                            >
                                                {{ exp.company }}
                                            </a>
                                            <p v-else class="text-sm text-muted-foreground">{{ exp.company }}</p>
                                        </div>
                                        <div class="flex items-center gap-2 flex-shrink-0">
                                            <span v-if="exp.current" class="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                                Atual
                                            </span>
                                            <span class="text-xs text-muted-foreground">{{ exp.period }}</span>
                                        </div>
                                    </div>
                                    <p class="text-sm text-muted-foreground leading-relaxed mb-3">{{ exp.description }}</p>
                                    <div class="flex flex-wrap gap-1.5">
                                        <span
                                            v-for="tag in exp.tags"
                                            :key="tag"
                                            class="text-xs px-2 py-0.5 rounded-full dark:bg-white/[0.05] bg-gray-100 dark:text-gray-300 text-gray-600 border dark:border-white/[0.06] border-gray-200"
                                        >
                                            {{ tag }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealItem>
                </template>
            </div>
        </section>

    </div>
</template>
