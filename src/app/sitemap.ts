import { MetadataRoute } from 'next'
import { getSitemapPostList } from '@/lib/post'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postList = await getSitemapPostList()

  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
    },
    ...postList,
  ]
}
