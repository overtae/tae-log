'use client'

import { useHeadingsObserver } from '@/hooks/useHeadingObserver'
import { cn } from '@/lib/utils'
import { HeadingItem } from '@/types/mdx'
import Link from 'next/link'

interface TableOfContentsProps {
  toc: HeadingItem[]
}

const TableOfContents = ({ toc }: TableOfContentsProps) => {
  const activeId = useHeadingsObserver('h2, h3')

  return (
    <div className="relative z-10 md:sticky md:bottom-0 md:top-[200px] md:ml-4">
      <div className="md:mb-4 md:px-4 md:py-2">
        <div className="mb-1 font-bold">목차</div>
        <ul className="text-xs font-normal text-muted-foreground">
          {toc.map((item) => {
            const isH3 = item.indent === 1
            const isIntersecting = activeId === item.link

            return (
              <li
                key={item.link}
                className={cn(
                  isH3 && 'ml-2',
                  isIntersecting && 'md:font-semibold md:text-primary',
                  'py-1 transition hover:underline md:hover:no-underline',
                )}
              >
                <Link href={item.link}>{item.text}</Link>
              </li>
            )
          })}
        </ul>
      </div>
      <hr className="mt-2 block md:mt-0 md:hidden" />
    </div>
  )
}

export default TableOfContents
