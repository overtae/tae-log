import PostSummary from '@/components/post/list/PostSummary'
import { getSortedPostList } from '@/lib/post'

interface PostListProps {
  categoryPath?: string
}

const PostSummaryList = async ({ categoryPath }: PostListProps) => {
  const postList = await getSortedPostList(categoryPath)

  return (
    <section>
      <ul className="grid w-full grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:gap-12">
        {postList.map((post) => (
          <PostSummary key={post.url + post.date} post={post} />
        ))}
      </ul>
    </section>
  )
}

export default PostSummaryList
