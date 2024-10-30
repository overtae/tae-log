import MdxComponents from '@/components/mdx'
import { Post } from '@/types/post'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

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
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeSlug],
        },
      }}
    />
  )
}

export default PostBody
