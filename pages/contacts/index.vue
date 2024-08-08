<script lang="ts" setup>
import { Github, Linkedin, Youtube, Instagram, Mail } from 'lucide-vue-next'
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
    <section id="contacts" class="py-8 flex flex-col gap-4">
        <Card class="w-full max-w-[400px] mx-auto">
            <CardHeader>
                <CardTitle>
                    <NuxtImg class="w-12 mx-auto" src="/logo.png"/>
                </CardTitle>
                <CardDescription class="text-center">
                    Aqui você encontra meus links, Redes Sociais, Não deixe de me seguir e acompanhar as atualizões.
                </CardDescription>
            </CardHeader>
            <CardContent class="flex flex-col gap-2">
                <p>Veja meu ultimo video</p>
                <div>
                    <VideoPlayer />
                </div>
                <a target="_blank" href="https://github.com/cfcamargo">
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

                <a target="_blank" href="https://www.instagram.com/sr.fcamargo/">
                    <Button class="w-full flex gap-2">
                        <Mail />
                        <span class="flex-1">Email</span>
                    </Button>
                </a>
            </CardContent>
        </Card>
    </section>
</template>
