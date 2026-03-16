import { useIntersectionObserver } from '@vueuse/core'

export function useScrollReveal() {
  onMounted(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal')

    elements.forEach((el) => {
      const { stop } = useIntersectionObserver(
        el as unknown as Parameters<typeof useIntersectionObserver>[0],
        ([entry]) => {
          if (entry?.isIntersecting) {
            el.classList.add('is-visible')
            stop()
          }
        },
        { threshold: 0.12 }
      )
    })
  })
}
