import { Post } from '@/types/post'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface PostBodyProps {
  post: Post
}

const PostBody = ({ post }: PostBodyProps) => {
  return <MDXRemote source={post.content} />
}

export default PostBody
