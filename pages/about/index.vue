<script lang="ts" setup>
import { useTecnologiesIcons } from '~/composables/useTecnologiesItems';
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

const { tecnologies } = useTecnologiesIcons()

</script>

<template>
    <section id="contacts" class="py-8 flex flex-col gap-4 mt-10">
        <Card>
            <CardContent>
                <div class="grid xs:grid-cols-1 md:grid-cols-2 gap-4 py-4">
                    <div>
                        <NuxtImg src="/about.png" loading="lazy" :quality="50" class="w-full h-full object-cover" />
                    </div>

                    <div class="flex flex-col gap-2">
                        <h2 class="font-bold text-2xl mb-6">Sobre Mim</h2>
                        <p>
                            Olá, sou Cristian Camargo, um desenvolvedor de software de 28 anos, especializado em Vue.js. Ao longo dos últimos dois anos, mergulhei profundamente no ecossistema Vue, trabalhando com tecnologias como Nuxt, Pinia, Vuetify, Quasar, e Tailwind CSS. Minha paixão por Vue cresceu à medida que explorei suas capacidades e, hoje, me considero um entusiasta da tecnologia.
                        </p>
                        <p>
                            Minha abordagem proativa me leva a estar sempre em busca de novos conhecimentos e ferramentas, o que me ajudou a desenvolver uma base sólida também em design. Tenho experiência com Figma, Corel, e Photoshop, o que me permite criar layouts atraentes e funcionais.
                        </p>
                        <p>
                            Minha jornada no desenvolvimento começou com React e Styled Components, tecnologias que usei para criar meu primeiro site pessoal. Com o tempo, ampliei minhas habilidades para incluir backend com Node.js, utilizando AdonisJS em meus projetos. Recentemente, estou explorando o ecossistema .NET, que tem sido uma adição valiosa à minha stack de desenvolvimento.
                        </p>
                        <p>
                            Ao longo da minha carreira, tive a oportunidade de criar diversos sites, desde o design inicial até o código final e deploy, sempre buscando a melhor experiência para o usuário.
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>
                    Minhas Tecnologias
                </CardTitle>
            </CardHeader>
            <CardContent class="xs:grid flex-wrap md:flex grid-cols-2 gap-4">
                <Card v-for="tecnology in tecnologies" class="xs:w-full md:w-[140px] h-[140px] flex justify-center items-center">
                    <CardContent class="p-4">
                        <div class="w-full flex flex-col gap-2 items-center justify-center">
                            <NuxtImg class="w-10" :src="tecnology.icon"/>
                            <p>{{ tecnology.name }}</p>
                        </div>
                    </CardContent>
                </Card>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>
                    Experiência Profissional
                </CardTitle>
            </CardHeader>
            <CardContent class="space-y-4">
                <div class="flex xs:items-start md:items-center gap-8">
                    <div class="w-2 h-2 xs:mt-10 md:mt-0 rounded-full bg-zinc-900 dark:bg-white"/>
                    <Card class="w-full">
                        <CardHeader>
                            <CardTitle>
                                Desenvolvedor Front End
                            </CardTitle>
                            <CardDescription>
                                <a href="https://www.kognit.com.br/" target="_blank">Kognit</a>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Sou desenvolvedor front-end, atuando no desenvolvimento de aplicações web com React e Styled Components, e mobile com React Native. No dia a dia, implemento novas features, corrijo bugs e aprimoro a experiência do usuário, sempre em colaboração com os times de design e back-end. Meu foco está em entregar soluções performáticas, escaláveis e bem estruturadas, garantindo um código limpo, reutilizável e alinhado com as melhores práticas do mercado.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <div class="flex items-center gap-4 text-xs text-gray-700 dark:text-gray-200">
                                <span>Janeiro de 2025</span>
                                <div class="w-1 h-1 rounded-full bg-zinc-900 dark:bg-white"/>
                                <span>Atualmente</span>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
                <div class="flex xs:items-start md:items-center gap-8">
                    <div class="w-2 h-2 xs:mt-10 md:mt-0 rounded-full bg-zinc-900 dark:bg-white"/>
                    <Card class="w-full">
                        <CardHeader>
                            <CardTitle>
                                Desenvolvedor Front End
                            </CardTitle>
                            <CardDescription>
                                <a href="https://cygniagroscience.com/home" target="_blank">Cygni Agroscience</a>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Atuo como Desenvolvedor Front-End na equipe do software CygniAG, uma plataforma inovadora no setor agrícola que utiliza imagens de satélite para orientar as tomadas de decisão dos produtores. Minhas responsabilidades incluem o desenvolvimento de novas funcionalidades, implementação de correções e melhorias contínuas no sistema. Utilizando principalmente Vue.js e Tailwind CSS, e integrando a API do Google Maps, estou sempre em busca de aprimorar a experiência do usuário e otimizar a eficiência do software.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <div class="flex items-center gap-4 text-xs text-gray-700 dark:text-gray-200">
                                <span>Agosto de 2022</span>
                                <div class="w-1 h-1 rounded-full bg-zinc-900 dark:bg-white"/>
                                <span>Setembro de 2024</span>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
                <div class="flex xs:items-start md:items-center gap-8">
                    <div class="w-2 h-2 xs:mt-10 md:mt-0 rounded-full bg-zinc-900 dark:bg-white"/>
                    <Card class="w-full">
                        <CardHeader>
                            <CardTitle>
                                Desenvolvedor Web
                            </CardTitle>
                            <CardDescription>
                                Freelancer
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Desenvolvi uma variedade de projetos para empresas locais, variando de sites completos a landing pages especificamente projetadas. Cada projeto era uma oportunidade para aplicar e aprofundar meu conhecimento nas tecnologias que estava estudando. Foi um período de rápido crescimento e aprendizado, que solidificou minha paixão pelo desenvolvimento front-end e me preparou para os desafios da minha posição atual
                            </p>
                        </CardContent>
                        <CardFooter>
                            <div class="flex items-center gap-4 text-xs text-gray-700 dark:text-gray-200">
                                <span>Junho de 2021</span>
                                <div class="w-1 h-1 rounded-full bg-zinc-900 dark:bg-white"/>
                                <span>Atualmente</span>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
                <div class="flex xs:items-start md:items-center gap-8">
                    <div class="w-2 h-2 xs:mt-10 md:mt-0 rounded-full bg-zinc-900 dark:bg-white"/>
                    <Card class="w-full">
                        <CardHeader>
                            <CardTitle>
                                Coordenador de Tecnologia E Inovação
                            </CardTitle>
                            <CardDescription>
                                <a href="https://geofarmagro.com.br/" target="_blank">Geofarm Agricultura de Precisão</a>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Em minha posição como Coordenador de Tecnologia e Inovação, tive a oportunidade de liderar um setor fundamental, focado na agricultura de precisão. Era responsável pela gestão de todos os equipamentos, desde a assistência técnica até a instalação e atualização de sistemas como piloto automático, taxa variável em plantadeiras,  calcareadeiras, e GPS agrícola. Esta experiência me permitiu aprimorar minhas habilidades de gerenciamento e resolução de problemas, enquanto trabalhava na vanguarda da inovação agrícola.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <div class="flex items-center gap-4 text-xs text-gray-700 dark:text-gray-200">
                                <span>Agosto de 2018</span>
                                <div class="w-1 h-1 rounded-full bg-zinc-900 dark:bg-white"/>
                                <span>Julho de 2022</span>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </CardContent>
        </Card>
    </section>
</template>
