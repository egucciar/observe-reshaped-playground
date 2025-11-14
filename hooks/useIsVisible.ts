import { useEffect, useState } from 'react'

/**
 * Hook that uses IntersectionObserver to detect if an element is visible in the viewport
 * @param ref - React ref to the element to observe
 * @param options - IntersectionObserver options
 * @returns boolean indicating if the element is visible
 */
export function useIsVisible(
  ref: React.RefObject<HTMLElement>,
  options?: IntersectionObserverInit
): boolean {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return
        }
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0, ...options }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [ref, options])

  return isVisible
}
