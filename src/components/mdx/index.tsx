/* eslint-disable @typescript-eslint/no-explicit-any */
import Blockquote from '@/components/mdx/Blockquote'
import Callout from '@/components/mdx/Callout'
import HorizontalRule from '@/components/mdx/HorizontalRule'
import Image from '@/components/mdx/Image'
import ExternalLink from '@/components/mdx/Link'
import Toggle from '@/components/mdx/Toggle'
import Quote from '@/components/mdx/Quote'
import Mermaid from '@/components/mdx/Mermaid'
import { MDXComponents } from 'mdx/types'

const MdxComponents: MDXComponents = {
  a: ExternalLink as any,
  img: Image as any,
  hr: HorizontalRule as any,
  blockquote: Blockquote as any,
  mermaid: Mermaid,
  Callout,
  Toggle,
  Quote,
}

export default MdxComponents
