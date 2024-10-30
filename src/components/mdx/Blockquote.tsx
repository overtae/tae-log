import { Quote } from 'lucide-react'
import { BlockquoteHTMLAttributes } from 'react'

const Blockquote = ({
  children,
  cite,
  ...props
}: BlockquoteHTMLAttributes<HTMLQuoteElement>) => {
  return (
    <blockquote
      className="relative mx-4 my-8 border-0 p-4 text-center italic text-gray-800"
      {...props}
    >
      <Quote className="absolute left-1/2 top-0 ml-4 mt-2 -translate-x-1/2 fill-muted-foreground stroke-0" />
      <span className="text-muted-foreground [&>p:after]:content-none [&>p:before]:content-none">
        {children}
      </span>
      {cite && (
        <cite className="mt-4 block font-normal not-italic text-gray-600">
          <span className="pr-1">—</span> {cite}
        </cite>
      )}
    </blockquote>
  )
}

export default Blockquote
