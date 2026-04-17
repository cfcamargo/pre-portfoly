<script lang="ts" setup>
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps({
    delay: { type: Number, default: 0 },
    direction: { type: String as () => 'up' | 'left' | 'right', default: 'up' },
})

const target = ref<HTMLElement | null>(null)
const isVisible = ref(!process.client)

if (process.client) {
    const { stop } = useIntersectionObserver(
        target,
        ([entry]) => {
            if (entry?.isIntersecting) {
                isVisible.value = true
                stop()
            }
        },
        { threshold: 0.08 }
    )
}

const hiddenClass = computed(() => {
    if (props.direction === 'left') return 'opacity-0 -translate-x-6'
    if (props.direction === 'right') return 'opacity-0 translate-x-6'
    return 'opacity-0 translate-y-6'
})
</script>

<template>
    <div
        ref="target"
        :style="{ transitionDelay: `${delay}ms` }"
        :class="['transition-all duration-700 ease-out', isVisible ? 'opacity-100 translate-x-0 translate-y-0' : hiddenClass]"
    >
        <slot />
    </div>
</template>
