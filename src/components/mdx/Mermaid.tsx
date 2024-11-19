import dynamic from 'next/dynamic.js'
import type { MermaidProps } from 'mdx-mermaid/lib/Mermaid'

const MdxMermaid = dynamic(
  () => import('mdx-mermaid/lib/Mermaid').then((res) => res.Mermaid),
  { ssr: false },
)

const Mermaid: React.FC<MermaidProps> = ({ ...props }) => {
  return <MdxMermaid {...props} />
}

export default Mermaid
