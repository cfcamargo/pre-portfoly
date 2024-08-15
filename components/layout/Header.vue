<script lang="ts" setup>
import { Settings, Moon, Sun, MonitorCog } from 'lucide-vue-next';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import 'animate.css';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'


const colorMode = useColorMode()
const showMenu = ref(false)

const changeTheme = (theme: string) => {
    colorMode.preference = theme
}

const toogleMenu = () => {
    showMenu.value = !showMenu.value
}

const defineAnimationToHamburgueMenu = computed(() => {
    if(showMenu.value) {
        return 'hamburger--spin-r is-active'
    } else {
        return 'hamburger--spin'
    }
})
</script>

<template> 
    <header class="w-full h-24 bg-zinc-900">
        <Container class="flex items-center justify-between h-full">
            <NuxtLink to="/" class="flex items-center gap-2 xs:pl-4">
                <div class="w-12">
                    <NuxtImg class="w-full" src="/logo-dark.png"/>
                </div>
                <h2 class="xs:text-lg md:text-2xl font-bold text-white">
                    Cristian Camargo
                </h2>
            </NuxtLink>

            <div class="xs:hidden md:flex items-center gap-8">
                <nav class="flex items-center font-bold gap-4 text-white">
                    <NuxtLink to="/">
                        HOME
                    </NuxtLink>
                    <NuxtLink to="/about">
                        SOBRE
                    </NuxtLink>
                    <NuxtLink to="/projects">
                        PROJETOS
                    </NuxtLink>
                    <NuxtLink to="/contacts">
                        CONTATO
                    </NuxtLink>
                </nav>

                <ClientOnly>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Settings :size="20" color="white"/>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>
                                Tema
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                                <ToggleGroup type="single" :model-value="$colorMode.preference">
                                    <ToggleGroupItem value="dark" @click="changeTheme('dark')">
                                        <TooltipProvider>
                                            <Tooltip>
                                            <TooltipTrigger>
                                                <Moon />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Dark</p>
                                            </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value="light" @click="changeTheme('light')">
                                        <TooltipProvider>
                                            <Tooltip>
                                            <TooltipTrigger>
                                                <Sun />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Ligth</p>
                                            </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value="system" @click="changeTheme('system')">
                                        <TooltipProvider>
                                            <Tooltip>
                                            <TooltipTrigger>
                                                <MonitorCog />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>System</p>
                                            </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </ToggleGroupItem>
                                </ToggleGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </ClientOnly>
            </div>

            <div class="xs:flex md:hidden">
                <button class="hamburger" type="button" @click="toogleMenu" :class="defineAnimationToHamburgueMenu">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>

            <transition 
                enter-active-class="animate__animated animate__fadeInUp" 
                leave-active-class="animate__animated animate__fadeOutDown"
            >
                <div 
                    v-if="showMenu" 
                    class="w-full flex h-[calc(100vh_-_96px)] flex-col fixed bottom-0 left-0 right-0 bg-white z-50 text-black" 
                >
                    <nav class="flex-1 flex flex-col justify-center items-center gap-8">
                        <NuxtLink class="font-bold text-lg" @click="toogleMenu" to="/">
                            HOME
                        </NuxtLink>
                        <NuxtLink class="font-bold text-lg" @click="toogleMenu" to="/about">
                            SOBRE
                        </NuxtLink>
                        <NuxtLink class="font-bold text-lg" @click="toogleMenu" to="/projects">
                            PROJETOS
                        </NuxtLink>
                        <NuxtLink class="font-bold text-lg" @click="toogleMenu" to="/contacts">
                            CONTATO
                        </NuxtLink>
                    </nav>

                    <div class="py-8">
                        <h4 class="py-2 font-bold text-center">Tema</h4>
                        <ToggleGroup type="single" :model-value="$colorMode.preference">
                            <ToggleGroupItem value="dark" @click="changeTheme('dark')" class="p-6">
                                <TooltipProvider>
                                    <Tooltip>
                                    <TooltipTrigger>
                                        <Moon :size="30"/>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Dark</p>
                                    </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </ToggleGroupItem>
                            <ToggleGroupItem value="light" @click="changeTheme('light')" class="p-6">
                                <TooltipProvider>
                                    <Tooltip>
                                    <TooltipTrigger>
                                        <Sun :size="30"/>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Ligth</p>
                                    </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </ToggleGroupItem>
                            <ToggleGroupItem value="system" @click="changeTheme('system')" class="p-6">
                                <TooltipProvider>
                                    <Tooltip>
                                    <TooltipTrigger>
                                        <MonitorCog :size="30"/>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>System</p>
                                    </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                </div>
            </transition>
        </Container>
    </header>
</template>
