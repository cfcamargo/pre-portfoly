<script lang="ts" setup>
useHead({
    title: 'Cristian Camargo | Projetos',
})
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
</script>

<template>
    <section id="projects" class="py-8 flex gap-4">
        <Card>
            <CardHeader>
                <CardTitle class="font-bold text-2xl">
                    Projetos Recentes
                </CardTitle>
                <CardDescription>
                    Essa página lista alguns dos meus projetos. Confira outros projetos em meu <a href="https://github.com/cfcamargo" class="underline">GitHub</a>.
                </CardDescription>
            </CardHeader>
            <CardContent class="grid xs:grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <CardTitle>
                                <NuxtImg src="/covers/modular.png"/>
                            </CardTitle>
                            <CardDescription class="font-bold mt-4 text-xl">
                                    MODULAR PRE MOLDADOS
                            </CardDescription>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p class="text-zinc-700 dark:text-white">
                            Este é um projeto full stack desenvolvido para a Modular Pré Moldados, com o objetivo de substituir o controle de pedidos feito em planilhas por um sistema mais robusto e eficiente. Utilizando Nuxt.js, Vue.js, ChadCN e Tailwind CSS no front-end, e Adonis JS no back-end, o sistema foi projetado para atender às necessidades específicas da empresa, oferecendo um controle abrangente de pedidos, estoque, clientes, e mais.
                        </p>
                    </CardContent>
                    <CardFooter class="flex flex-col gap-2">
                        <a class="w-full" href="gh repo clone cfcamargo/modular-web" target="_blank">
                            <Button class="w-full">
                                Repositório Web
                            </Button>
                        </a>
                        <a class="w-full" href="https://github.com/cfcamargo/modular-api" target="_blank">
                            <Button class="w-full">
                                Repositório API
                            </Button>
                        </a>
                        <span class="text-xs text-red-500">Este projeto está em desenvolvimento</span>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <CardTitle>
                                <NuxtImg src="/covers/rmagro.png"/>
                            </CardTitle>
                            <CardDescription class="font-bold mt-4 text-xl">
                                RM AGRO
                            </CardDescription>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p class="text-zinc-700 dark:text-white">
                            Este projeto visa estabelecer a presença online da RM Agro, uma empresa especializada em gestão de risco em commodities agrícolas e de transportes. O objetivo principal é criar um site informativo e intuitivo, utilizando as tecnologias Nuxt.js, Vue.js e Tailwind CSS. Além disso, foi implementada a funcionalidade de internacionalização (i18n), permitindo que o conteúdo esteja disponível tanto em português quanto em inglês, ampliando o alcance da empresa para um público internacional.
                        </p>
                    </CardContent>
                    <CardFooter class="flex flex-col gap-2">
                        <a class="w-full" href="https://github.com/cfcamargo/rm-group" target="_blank">
                            <Button class="w-full">
                                Repositório
                            </Button>
                        </a>
                        <a class="w-full" href="https://rmgroup.com.br" target="_blank">
                            <Button class="w-full">
                                Produção
                            </Button>
                        </a>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <CardTitle>
                                <NuxtImg src="/covers/cuiaba.png"/>
                            </CardTitle>
                            <CardDescription class="font-bold mt-4 text-xl">
                                CUIABA IMPORTS
                            </CardDescription>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p class="text-zinc-700 dark:text-white">
                            Este projeto foi desenvolvido para uma empresa especializada na venda de produtos eletrônicos. Utilizando Nuxt.js, Vue.js e Tailwind CSS no front-end e Adonis JS no back-end, o objetivo principal foi replicar uma planilha do Google em um site, permitindo a listagem dinâmica dos produtos da loja.
                        </p>
                    </CardContent>
                    <CardFooter class="flex flex-col gap-2">
                        <a class="w-full" href="https://github.com/cfcamargo/cuiaba-imports" target="_blank">
                            <Button class="w-full">
                                Repositório WEB
                            </Button>
                        </a>
                        <a class="w-full" href="https://github.com/cfcamargo/api-cuiabaImports" target="_blank">
                            <Button class="w-full">
                                Repositório API
                            </Button>
                        </a>
                        <a class="w-full" href="https://cuiabaimports.com/" target="_blank">
                            <Button class="w-full">
                                Produção
                            </Button>
                        </a>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <CardTitle>
                                <NuxtImg src="/covers/dr.png"/>
                            </CardTitle>
                            <CardDescription class="font-bold mt-4 text-xl">
                                DR COSTMÉTICOS E ESSENCIAS
                            </CardDescription>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p class="text-zinc-700 dark:text-white">
                            Este projeto foi desenvolvido para a DR Cosméticos, utilizando Nuxt.js, Vue.js e Tailwind CSS, com o objetivo de estabelecer a presença online da loja, permitindo que seus produtos sejam acessíveis na internet. O site foi criado para ser simples, leve e funcional, garantindo uma experiência de usuário agradável e eficiente.
                        </p>
                    </CardContent>
                    <CardFooter class="flex flex-col gap-2">
                        <a class="w-full" href="https://github.com/cfcamargo/dr-cosmetics-new" target="_blank">
                            <Button class="w-full">
                                Repositório
                            </Button>
                        </a>
                        <a class="w-full" href="https://drcosmeticospp.com.br" target="_blank">
                            <Button class="w-full">
                                Produção
                            </Button>
                        </a>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <CardTitle>
                                <NuxtImg src="/covers/giselle-hage.png"/>
                            </CardTitle>
                            <CardDescription class="font-bold mt-4 text-xl">
                                GISELLE HAGE
                            </CardDescription>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p class="text-zinc-700 dark:text-white">
                            Este projeto foi desenvolvido para Giselle Hage, uma profissional especializada em harmonização orofacial. Utilizando Vue.js, Nuxt.js e Tailwind CSS, criamos um site para levar o trabalho dela para a internet, permitindo que seus serviços sejam apresentados de forma clara e acessível aos clientes.
                        </p>
                    </CardContent>
                    <CardFooter class="flex flex-col gap-2">
                        <a class="w-full" href="https://github.com/cfcamargo/giselle-hage" target="_blank">
                            <Button class="w-full">
                                Repositório
                            </Button>
                        </a>
                        <a class="w-full" href="https://www.dragisellehage.com/" target="_blank">
                            <Button class="w-full">
                                Produção
                            </Button>
                        </a>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <CardTitle>
                                <NuxtImg src="/covers/imperial.png"/>
                            </CardTitle>
                            <CardDescription class="font-bold mt-4 text-xl">
                                IMPERIAL CASINO
                            </CardDescription>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p class="text-zinc-700 dark:text-white">
                            Este projeto foi desenvolvido para o Imperial Casino, com o objetivo de estabelecer sua presença online, permitindo que os usuários explorem o casino de maneira virtual. O site foi construído utilizando React, TypeScript e Tailwind CSS, proporcionando uma experiência interativa e envolvente. Além disso, foi implementada a funcionalidade de internacionalização (i18n), oferecendo suporte aos idiomas português, inglês e espanhol.
                        </p>
                    </CardContent>
                    <CardFooter class="flex flex-col gap-2">
                        <a class="w-full" href="https://github.com/cfcamargo/imperial-games" target="_blank">
                            <Button class="w-full">
                                Repositório
                            </Button>
                        </a>
                        <a class="w-full" href="https://imperialcasinopjc.com/es" target="_blank">
                            <Button class="w-full">
                                Produção
                            </Button>
                        </a>
                    </CardFooter>
                </Card>
            </CardContent>
        </Card>
    </section>
</template>
