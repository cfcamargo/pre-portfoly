<script lang="ts" setup>
import lottie from 'lottie-web'
import { Youtube } from 'lucide-vue-next';
import { Button } from '@/components/ui/button'

import {
    Card,
    CardContent,
} from '@/components/ui/card'

const animationContainer = ref()

onMounted(() => {
  lottie.loadAnimation({
    container: animationContainer.value, // use `.value` with `ref()`
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/home.json' // Caminho para o arquivo de animação
  })
})

</script>

<template>
    <section id="home" class="py-8 flex flex-col gap-4">
        <Card>
            <CardContent class="p-8 grid xs:grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div class="flex flex-col gap-4">
                    <h2 class="font-bold text-2xl mb-4">
                        Olá! Bem Vindo
                    </h2>
                    <p>
                        Eu sou o Cristian Camargo
                    </p>

                    <p>
                        Desenvolvedor de Software com stack principal no ecossistema Vue, incluindo Vue.js, Nuxt, Tailwind CSS, e AdonisJS no back-end. Vamos criar algo juntos?
                    </p>

                    <div class="pt-4">
                        <h4 class="font-bold">Tecnologias</h4>
                        <Tecnologies />
                    </div>
                </div>

                <div>
                    <div ref="animationContainer"></div>
                </div>
            </CardContent>
        </Card>
        <Card>
            <CardContent class="p-8 grid xs:grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div class="flex flex-col gap-4">
                    <div class="flex items-center gap-2">
                        <Youtube />
                        <h4 class="font-bold">
                            Me Acompanhe no YouTube
                        </h4>
                    </div>
                    <p>
                        Este portfólio é temporário, pois estou trabalhando em uma versão nova e ainda mais completa, que estará disponível em breve. 
                    </p>
                    <p>
                        Todo o processo de criação do novo portfólio está sendo documentado e compartilhado no meu canal do YouTube.
                    </p>
                    <p>
                        Acompanhe para ver de perto como tudo está sendo desenvolvido!
                    </p>
                    <a href="https://www.youtube.com/@camargodev" target="_blank">
                        <Button class="xs:w-full md:w-auto">
                            Acessar Canal
                        </Button>
                    </a>
                </div>

                <div class="w-full">
                    <VideoPlayer />
                </div>
            </CardContent>
        </Card>
    </section>
</template>
