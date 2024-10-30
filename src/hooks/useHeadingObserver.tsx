import { useEffect, useRef, useState } from 'react'

const observerOption = {
  threshold: 1,
  rootMargin: '-80px 0px -50% 0px',
}

export const useHeadingsObserver = (query: string) => {
  const observer = useRef<IntersectionObserver>()
  const [activeId, setActiveId] = useState<string>('')

  let direction = ''
  let prevYposition = 0

  const checkScrollDirection = (prevY: number) => {
    if (window.scrollY === 0 && prevY === 0) return
    else if (window.scrollY > prevY) direction = 'down'
    else direction = 'up'
    prevYposition = window.scrollY
  }

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        checkScrollDirection(prevYposition)

        if (
          (direction === 'down' && !entry.isIntersecting) ||
          (direction === 'up' && entry.isIntersecting)
        ) {
          setActiveId(`#${entry.target.id}`)
        }
      })
    }

    observer.current = new IntersectionObserver(
      observerCallback,
      observerOption,
    )

    const elements = document.querySelectorAll(query)
    elements.forEach((elem) => observer.current?.observe(elem))

    return () => observer.current?.disconnect()
  }, [query])

  return activeId
}
