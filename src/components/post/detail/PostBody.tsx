import { Post } from '@/types/post'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'

interface PostBodyProps {
  post: Post
}

const PostBody = ({ post }: PostBodyProps) => {
  return (
    <MDXRemote
      source={post.content}
      options={{
        mdxOptions: {
          rehypePlugins: [rehypeSlug],
        },
      }}
    />
  )
}

export default PostBody
