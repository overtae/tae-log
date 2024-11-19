import MdxComponents from '@/components/mdx'
import { Post } from '@/types/post'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode, { type Options } from 'rehype-pretty-code'
import mdxMermaid from 'mdx-mermaid'

/** @type {import('rehype-pretty-code').Options} */
const options: Options = {
  theme: {
    dark: 'material-theme-darker',
    light: 'material-theme-lighter',
  },
  defaultLang: 'plaintext',
  tokensMap: {
    fn: 'entity.name.function',
  },
}

interface PostBodyProps {
  post: Post
}

const PostBody = ({ post }: PostBodyProps) => {
  return (
    <MDXRemote
      source={post.content}
      components={MdxComponents}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, [mdxMermaid, { output: 'svg' }]],
          rehypePlugins: [rehypeSlug, [rehypePrettyCode, options]],
        },
      }}
    />
  )
}

export default PostBody
