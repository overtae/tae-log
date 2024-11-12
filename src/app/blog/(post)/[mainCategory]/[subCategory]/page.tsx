import PostSummaryList from '@/components/post/list/PostSummaryList'
import { blog } from '@/constants/blog'
import { subCategories } from '@/constants/categories'
import {
  getCategoryPublicName,
  getMainCategoryList,
  getSubCategoryList,
} from '@/lib/post'
import { Metadata } from 'next'

type Props = {
  params: Promise<{ mainCategory: string; subCategory: string }>
}

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export const dynamicParams = false

export function generateStaticParams() {
  const mainCategoryList = getMainCategoryList()
  const paramList = mainCategoryList.flatMap((mainCategory) => {
    const subCategoryList = getSubCategoryList(mainCategory)
    return subCategoryList.map((subCategory) => ({ mainCategory, subCategory }))
  })
  return paramList
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { mainCategory, subCategory } = await params
  const cg = subCategories[subCategory]
  const title = `${cg} | ${blog.title}`
  const url = `${baseURL}/${mainCategory}/${subCategory}`

  return {
    title,
    openGraph: {
      title,
      url,
      images: [blog.thumbnailURL],
    },
  }
}

const SubCategoryPage = async ({ params }: Props) => {
  const { mainCategory, subCategory } = await params
  return (
    <div className="w-full">
      <h1 className="px-4 text-3xl font-semibold">
        {getCategoryPublicName(`${mainCategory}/${subCategory}`)}
      </h1>
      <section className="mt-4 w-full">
        <PostSummaryList categoryPath={`${mainCategory}/${subCategory}`} />
      </section>
    </div>
  )
}

export default SubCategoryPage
