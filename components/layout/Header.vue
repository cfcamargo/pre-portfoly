<script lang="ts" setup>
import { Moon, Sun, MonitorCog } from 'lucide-vue-next';
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

const toggleMenu = () => {
    showMenu.value = !showMenu.value
}

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'Sobre' },
    { to: '/projects', label: 'Projetos' },
    { to: '/contacts', label: 'Contato' },
]
</script>

<template>
    <header class="fixed top-0 left-0 right-0 z-50 h-16 border-b dark:border-white/[0.04] border-gray-200/60 dark:bg-background/80 bg-white/80 backdrop-blur-xl">
        <Container class="flex items-center justify-between h-full">

            <NuxtLink to="/" class="flex items-center gap-2.5 group">
                <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-violet-500/30 transition-shadow">
                    <span class="text-white font-black text-xs">CC</span>
                </div>
                <span class="font-bold text-sm hidden sm:block">
                    <span class="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">Cristian</span>
                    <span class="text-foreground"> Camargo</span>
                </span>
            </NuxtLink>

  
            <div class="hidden md:flex items-center gap-6">
                <nav class="flex items-center gap-6">
                    <NuxtLink
                        v-for="link in navLinks"
                        :key="link.to"
                        :to="link.to"
                        active-class="!text-foreground"
                        class="relative group text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-1"
                    >
                        {{ link.label }}
                        <span class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-violet-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </NuxtLink>
                </nav>

                <ClientOnly>
                    <DropdownMenu>
                        <DropdownMenuTrigger class="flex items-center justify-center w-8 h-8 rounded-full dark:bg-white/5 bg-gray-100 hover:dark:bg-white/10 hover:bg-gray-200 transition-colors">
                            <Sun v-if="$colorMode.value === 'light'" :size="15" />
                            <Moon v-else :size="15" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Tema</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <ToggleGroup type="single" :model-value="$colorMode.preference">
                                <ToggleGroupItem value="dark" @click="changeTheme('dark')">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger><Moon :size="16" /></TooltipTrigger>
                                            <TooltipContent><p>Dark</p></TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </ToggleGroupItem>
                                <ToggleGroupItem value="light" @click="changeTheme('light')">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger><Sun :size="16" /></TooltipTrigger>
                                            <TooltipContent><p>Light</p></TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </ToggleGroupItem>
                                <ToggleGroupItem value="system" @click="changeTheme('system')">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger><MonitorCog :size="16" /></TooltipTrigger>
                                            <TooltipContent><p>Sistema</p></TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </ToggleGroupItem>
                            </ToggleGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </ClientOnly>
            </div>

  
            <div class="flex md:hidden">
                <button
                    type="button"
                    @click="toggleMenu"
                    class="hamburger text-foreground"
                    :class="showMenu ? 'hamburger--spin-r is-active' : 'hamburger--spin'"
                >
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
                    class="flex flex-col h-[calc(100dvh_-_4rem)] fixed top-16 left-0 right-0 bottom-0 z-50 bg-white dark:bg-zinc-950"
                >
                    <nav class="flex-1 flex flex-col justify-center items-center gap-8">
                        <NuxtLink
                            v-for="link in navLinks"
                            :key="link.to"
                            :to="link.to"
                            @click="toggleMenu"
                            class="text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors"
                            active-class="!text-foreground"
                        >
                            {{ link.label }}
                        </NuxtLink>
                    </nav>
                    <div class="py-8 flex flex-col items-center gap-4">
                        <p class="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Tema</p>
                        <ToggleGroup type="single" :model-value="$colorMode.preference">
                            <ToggleGroupItem value="dark" @click="changeTheme('dark')" class="p-5">
                                <Moon :size="22" />
                            </ToggleGroupItem>
                            <ToggleGroupItem value="light" @click="changeTheme('light')" class="p-5">
                                <Sun :size="22" />
                            </ToggleGroupItem>
                            <ToggleGroupItem value="system" @click="changeTheme('system')" class="p-5">
                                <MonitorCog :size="22" />
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                </div>
            </transition>
        </Container>
    </header>
</template>
