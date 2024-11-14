import { BlockquoteHTMLAttributes } from 'react'

const Blockquote = ({
  children,
  cite,
  ...props
}: BlockquoteHTMLAttributes<HTMLQuoteElement>) => {
  return (
    <blockquote
      className="relative border-l-2 border-muted-foreground italic text-gray-800"
      {...props}
    >
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
