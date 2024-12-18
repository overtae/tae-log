import MdxComponents from '@/components/mdx'
import { Post } from '@/types/post'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import rehypePrettyCode, { type Options } from 'rehype-pretty-code'
import 'katex/dist/katex.min.css'

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
          remarkPlugins: [remarkGfm, remarkMath],
          rehypePlugins: [rehypeSlug, rehypeKatex, [rehypePrettyCode, options]],
        },
      }}
    />
  )
}

export default PostBody
