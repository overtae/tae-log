'use client'

import { useIsMounted } from '@/hooks/useIsMounted'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const Banner = () => {
  const isMounted = useIsMounted()
  const { resolvedTheme } = useTheme()
  const bannerImage = resolvedTheme === 'dark' ? 'banner-dark' : 'banner-light'
  const background = resolvedTheme === 'dark' ? 'bg-[#1E1E1E]' : 'bg-[#F3F3F3]'

  if (!isMounted) return null
  return (
    <section
      className={`relative h-[20vh] min-h-40 w-full sm:h-[24vh] md:h-[28vh] md:min-h-52 lg:h-[30vh] lg:min-h-60 ${background}`}
    >
      <Image
        src={`/images/${bannerImage}.gif`}
        alt="banner image"
        sizes="100vw"
        priority
        fill
        style={{ objectFit: 'contain' }}
      />
    </section>
  )
}

export default Banner
