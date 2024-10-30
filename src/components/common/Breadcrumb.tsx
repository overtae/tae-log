import { ChevronRight, House } from 'lucide-react'

interface BreadcrumbProps {
  path: string
}

const Breadcrumb = ({ path }: BreadcrumbProps) => {
  const paths = path.split('/').filter(Boolean)
  const lastIndex = paths.length - 1

  return (
    <ul className="flex cursor-default select-none items-center gap-1">
      <li>
        <a href={'/blog'}>
          <House className="w-4 stroke-1 text-muted-foreground transition-all duration-200 ease-in hover:stroke-[1.5] hover:text-primary" />
        </a>
      </li>
      {paths?.map((p, i) => {
        const href = `/blog/${paths.slice(0, i + 1).join('/')}`
        return (
          <li key={p} className="flex items-center gap-1">
            <ChevronRight className="w-4 stroke-1 text-muted-foreground" />
            <a
              href={href}
              className={`cursor-pointer transition-all duration-200 ease-in hover:text-primary ${i === lastIndex ? 'text-primary' : 'font-light text-muted-foreground'}`}
            >
              {p}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Breadcrumb
