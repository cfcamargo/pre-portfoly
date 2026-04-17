export function useTypewriter(phrases: string[], speed = 90) {
    const text = ref('')
    let phraseIdx = 0
    let charIdx = 0
    let deleting = false
    let timer: ReturnType<typeof setTimeout>

    const tick = () => {
        const current = phrases[phraseIdx]
        if (!deleting) {
            text.value = current.slice(0, ++charIdx)
            if (charIdx === current.length) {
                timer = setTimeout(() => { deleting = true; tick() }, 2200)
                return
            }
        } else {
            text.value = current.slice(0, --charIdx)
            if (charIdx === 0) {
                deleting = false
                phraseIdx = (phraseIdx + 1) % phrases.length
            }
        }
        timer = setTimeout(tick, deleting ? Math.floor(speed * 0.4) : speed)
    }

    onMounted(() => { timer = setTimeout(tick, 600) })
    onUnmounted(() => clearTimeout(timer))

    return { text }
}
