import { Post } from '@/types/post'
import { CalendarDays } from 'lucide-react'
import Link from 'next/link'

interface Props {
  post: Post
}

const PostSummary = ({ post }: Props) => {
  return (
    <Link href={post.url}>
      <li className="group flex h-full flex-col gap-3 overflow-hidden rounded-xl border border-muted bg-card transition hover:border-muted-foreground">
        <div className="flex flex-1 flex-col justify-between px-4 py-3">
          <div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <CalendarDays className="w-3" />
              <span>{post.date}</span>
            </div>
            <h2 className="line-clamp-1 w-full text-lg font-bold text-primary sm:text-xl md:text-lg">
              {post.title}
            </h2>
          </div>
          <div className="flex-1 text-sm text-primary">
            <p className="line-clamp-2">{post.description}</p>
          </div>
          <ul className="mt-1 flex gap-2 text-xs font-light text-primary">
            {post.tags.slice(0, 3).map((tag) => (
              <li key={tag} className="text-nowrap">
                #{tag}
              </li>
            ))}
            {post.tags.length > 3 && <li>+{post.tags.length - 2}</li>}
          </ul>
        </div>
      </li>
    </Link>
  )
}

export default PostSummary
