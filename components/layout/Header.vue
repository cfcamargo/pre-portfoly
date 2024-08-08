<script lang="ts" setup>
import { Settings, Moon, Sun, MonitorCog } from 'lucide-vue-next';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'


const colorMode = useColorMode()

const changeTheme = (theme: string) => {
    colorMode.preference = theme
}

</script>

<template> 
    <header class="w-full h-24 bg-black">
       <Container class="flex items-center justify-between h-full">
            <div class="flex items-center gap-2">
                <div class="w-12">
                    <NuxtImg class="w-full" src="/logo-dark.png"/>
                </div>
                <h2 class="text-2xl font-bold text-white">
                    Cristian Camargo
                </h2>
            </div>

            <div class="flex items-center gap-8">
                <nav class="flex items-center font-bold gap-4 text-white">
                    <NuxtLink to="/">
                        HOME
                    </NuxtLink>
                    <NuxtLink>
                        CONTATO
                    </NuxtLink>
                    <NuxtLink>
                        PROJETOS
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
       </Container>
    </header>
</template>
