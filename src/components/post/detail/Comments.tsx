'use client'

import { useTheme } from 'next-themes'
import { useEffect, useRef } from 'react'

const repoName = process.env.NEXT_PUBLIC_GISCUS_REPO_NAME || ''
const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID || ''
const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || ''

const Comments = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()
  const theme = resolvedTheme === 'dark' ? 'dark' : 'light'

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return

    const scriptElem = document.createElement('script')
    scriptElem.src = 'https://giscus.app/client.js'
    scriptElem.async = true
    scriptElem.crossOrigin = 'anonymous'

    scriptElem.setAttribute('data-repo', repoName)
    scriptElem.setAttribute('data-repo-id', repoId)
    scriptElem.setAttribute('data-category', 'Comments')
    scriptElem.setAttribute('data-category-id', categoryId)
    scriptElem.setAttribute('data-mapping', 'og:title')
    scriptElem.setAttribute('data-strict', '0')
    scriptElem.setAttribute('data-reactions-enabled', '1')
    scriptElem.setAttribute('data-emit-metadata', '0')
    scriptElem.setAttribute('data-input-position', 'top')
    scriptElem.setAttribute('data-theme', theme)
    scriptElem.setAttribute('data-lang', 'ko')
    scriptElem.setAttribute('data-loading', 'lazy')

    ref.current.appendChild(scriptElem)
  }, [theme])

  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      'iframe.giscus-frame',
    )
    iframe?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme } } },
      'https://giscus.app',
    )
  }, [theme])

  return <section ref={ref} />
}

export default Comments
