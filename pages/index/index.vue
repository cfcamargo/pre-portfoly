<script lang="ts" setup>
import lottie from 'lottie-web'
import { Youtube } from 'lucide-vue-next';
import { Button } from '@/components/ui/button'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const animationContainer = ref(null)

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
            <CardContent class="p-8 grid grid-cols-2 gap-6 items-center">
                <div class="flex flex-col gap-4">
                    <h2 class="font-bold text-2xl mb-4">
                        Olá! Bem Vindo
                    </h2>
                    <p>
                        Sou desenvolvedor Full Stack com ampla experiência em Vue e Node.js.
                    </p>

                    <p>
                        Com mais de dois anos de experiência no mercado de desenvolvimento web, tenho contribuído para diversos projetos, focando sempre em criar soluções robustas e intuitivas. Minha expertise abrange desde o front-end até o back-end, utilizando as melhores práticas e tecnologias de ponta.
                    </p>

                    <p>
                        Sinta-se à vontade para explorar o conteúdo atual e conhecer mais sobre meu trabalho. Estou à disposição para ajudar a transformar suas ideias em realidade.
                    </p>
                </div>

                <div>
                    <div ref="animationContainer"></div>
                </div>
            </CardContent>
        </Card>
        <Card>
            <CardContent class="p-8 grid grid-cols-2 gap-6 items-center">
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
                        <Button>Acessar Canal</Button>
                    </a>
                </div>

                <div class="w-full">
                    <VideoPlayer />
                </div>
            </CardContent>
        </Card>
    </section>
</template>
