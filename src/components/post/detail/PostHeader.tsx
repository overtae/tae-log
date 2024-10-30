import Breadcrumb from '@/components/common/Breadcrumb'
import { Post } from '@/types/post'
import { CalendarDays } from 'lucide-react'

interface PostHeaderProps {
  post: Post
}

const PostHeader = ({ post }: PostHeaderProps) => {
  return (
    <section className="w-full text-start">
      <Breadcrumb path={post.categoryPath} />
      <h1 className="mt-5 break-keep text-3xl text-primary">{post.title}</h1>
      <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
        <CalendarDays className="w-4" />
        <span>{post.date}</span>
      </div>
      <hr className="mt-5" />
    </section>
  )
}

export default PostHeader
