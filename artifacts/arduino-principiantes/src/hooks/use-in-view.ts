import * as React from "react"

export function useInView(options?: IntersectionObserverInit) {
  const [isInView, setIsInView] = React.useState(false)
  const ref = React.useRef<HTMLElement | null>(null)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.unobserve(el)
      }
    }, options)

    observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
    }
  }, [options])

  return { ref, isInView }
}