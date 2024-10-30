import PostBody from '@/components/post/detail/PostBody'
import PostHeader from '@/components/post/detail/PostHeader'
import { getPostDetail, getPostPaths, parsePostAbstract } from '@/lib/post'
import { Metadata } from 'next'

type Props = {
  params: { mainCategory: string; subCategory: string; slug: string }
}

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { mainCategory, subCategory, slug } = await params
  const post = await getPostDetail(`${mainCategory}/${subCategory}`, slug)
  const title = `${post.title}`

  return {
    title,
    description: post.description,
    openGraph: {
      title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `${baseURL}${post.url}`,
    },
  }
}

export function generateStaticParams() {
  const postPaths: string[] = getPostPaths()
  const paramList = postPaths
    .map((path) => parsePostAbstract(path))
    .map((item) => ({
      mainCategory: item.categoryPath.split('/')[0],
      subCategory: item.categoryPath.split('/')[1],
      slug: item.slug,
    }))
  return paramList
}

const PostDetail = async ({ params }: Props) => {
  const { mainCategory, subCategory, slug } = await params
  const post = await getPostDetail(`${mainCategory}/${subCategory}`, slug)

  return (
    <div className="grid w-full grid-cols-1 gap-4 px-4 md:grid-cols-4">
      <header className="w-full md:col-span-3">
        <PostHeader post={post} />
      </header>
      <article className="prose prose-stone relative dark:prose-invert sm:prose-base md:prose-lg lg:prose-xl md:col-span-3">
        <PostBody post={post} />
      </article>
    </div>
  )
}

export default PostDetail