import { ChevronRight } from 'lucide-react'
import { PropsWithChildren } from 'react'

interface ToggleProps {
  summary: string
}

const Toggle = ({ summary, children }: PropsWithChildren<ToggleProps>) => {
  return (
    <details open className="group my-4">
      <summary className="hover:text-muted-primary relative mb-2 w-fit cursor-pointer list-none py-2 pl-9 pr-4 text-primary">
        <span className="absolute left-0 top-1/2 -translate-y-1/2 rotate-0 text-lg transition-all duration-300 group-open:rotate-90">
          <ChevronRight />
        </span>
        {summary}
        <span className="absolute bottom-2 left-0 h-[3px] w-0 bg-yellow-200 opacity-70 transition-all duration-300 group-open:w-full group-open:bg-gray-300 group-hover:w-full" />
      </summary>
      <div className="text-muted-primary mb-4 ml-3 border-l border-gray-300 px-5 py-2 sm:prose-sm md:prose-base lg:prose-lg prose-headings:my-0.5 prose-p:my-1 prose-pre:my-4">
        {children}
      </div>
    </details>
  )
}

export default Toggle
