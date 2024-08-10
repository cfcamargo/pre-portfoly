<script lang="ts" setup>
useHead({
    title: 'Cristian Camargo | Meus Links',
})
import { Github, Linkedin, Youtube, Instagram, Mail, FileText } from 'lucide-vue-next'
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
    <section id="contacts" class="py-8 flex flex-col gap-4 mt-10">
        <Card class="w-full max-w-[400px] mx-auto">
            <CardHeader>
                <CardTitle>
                    <div class="shadow-md border mx-auto rounded-full bg-white p-6 w-32 h-32 flex justify-center items-center transform -translate-y-[85px]">
                        <NuxtImg class="w-12 mx-auto" src="/logo.png"/>
                    </div>
                </CardTitle>
                <CardDescription class="text-center -mt-16">
                    Aqui você encontra meus links, Redes Sociais, Não deixe de me seguir e acompanhar as atualizões.
                </CardDescription>
            </CardHeader>
            <CardContent class="flex flex-col gap-2">
                <p class="font-bold text-center">
                    Veja meu ultimo video
                </p>
                <div>
                    <VideoPlayer />
                </div>

                <h2 class="font-bold mt-4 text-center">
                    Meus Links
                </h2>
                <a class="mt-4" target="_blank" href="https://github.com/cfcamargo">
                    <Button class="w-full flex gap-2">
                        <Github />
                        <span class="flex-1">Github</span>
                    </Button>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/cristian-camargo-4504291b4/">
                    <Button class="w-full flex gap-2">
                        <Linkedin />
                        <span class="flex-1">Linkedin</span>
                    </Button>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/cristian-camargo-4504291b4/">
                    <Button class="w-full flex gap-2">
                        <Youtube />
                        <span class="flex-1">Youtube</span>
                    </Button>
                </a>

                <a target="_blank" href="https://www.instagram.com/sr.fcamargo/">
                    <Button class="w-full flex gap-2">
                        <Instagram />
                        <span class="flex-1">Instagram</span>
                    </Button>
                </a>

                <a target="_blank" href="mailto:contato@camargodev.com.br">
                    <Button class="w-full flex gap-2">
                        <Mail />
                        <span class="flex-1">Email</span>
                    </Button>
                </a>
                <a target="_blank" href="/cv.pdf">
                    <Button class="w-full flex gap-2">
                        <FileText />
                        <span class="flex-1">Meu CV</span>
                    </Button>
                </a>
            </CardContent>
        </Card>
    </section>
</template>
