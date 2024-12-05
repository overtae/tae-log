import PostSummaryList from '@/components/post/list/PostSummaryList'
import { blog } from '@/constants/blog'
import { getCategoryPublicName, getMainCategoryList } from '@/lib/post'
import { Metadata } from 'next'

type Props = {
  params: Promise<{ mainCategory: string }>
}

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export const dynamicParams = false

export function generateStaticParams() {
  const categoryList = getMainCategoryList()
  const paramList = categoryList.map((category) => ({ mainCategory: category }))
  return paramList
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { mainCategory } = await params
  const cg = getCategoryPublicName(mainCategory)
  const title = `${cg}`
  const url = `${baseURL}/${mainCategory}`

  return {
    title,
    openGraph: {
      title,
      url,
      images: [blog.thumbnailURL],
    },
  }
}

const MainCategoryPage = async ({ params }: Props) => {
  const { mainCategory } = await params
  return (
    <div className="w-full">
      <h1 className="px-4 text-3xl font-semibold">
        {getCategoryPublicName(mainCategory)}
      </h1>
      <section className="mt-4 w-full">
        <PostSummaryList categoryPath={mainCategory} />
      </section>
    </div>
  )
}

export default MainCategoryPage
