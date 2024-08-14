<script lang="ts" setup>
import { Github, Linkedin, Youtube, Instagram, Mail, FileText, ChevronsLeftRight, LoaderCircle } from 'lucide-vue-next'
import { useGetChanelLastVideo } from '~/composables/useGetChanelLastVideo';
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

const { fetchLatestVideo } = useGetChanelLastVideo()

const loading = ref(true)
const videoId = ref('')

const getLastVideo = async() => {
    videoId.value = await fetchLatestVideo()
    loading.value = false
}

useHead({
    title: 'Cristian Camargo | Meus Links',
})
onMounted(() => getLastVideo())
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
                    <div v-if="loading" class="w-full flex items-center justify-center aspect-video">
                        <LoaderCircle class="animate-spin" :size="30"/>
                    </div>
                    <VideoPlayer v-else :video-id="videoId"/>
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
                <a target="_blank" href="https://portfolio-old-git-main-cristian-camargos-projects-0c6898b4.vercel.app/">
                    <Button class="w-full flex gap-2">
                        <ChevronsLeftRight />
                        <span class="flex-1">Site Antigo</span>
                    </Button>
                </a>
            </CardContent>
        </Card>
    </section>
</template>
