import { mainCategories, subCategories } from '@/constants/categories'
import { CategoryDetail, MainCategoryDetail } from '@/types/category'
import { HeadingItem } from '@/types/mdx'
import { Post, PostMatter } from '@/types/post'
import dayjs from 'dayjs'
import fs from 'fs'
import { sync } from 'glob'
import matter from 'gray-matter'
import path from 'path'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const BASE_PATH = 'src/posts'
const POSTS_PATH = path.join(process.cwd(), BASE_PATH)

// 모든 MDX 파일 조회
export const getPostPaths = (categoryPath?: string) => {
  const folder = categoryPath || '**'
  const path = categoryPath?.includes('/') ? folder : `${folder}/**`
  const postPaths: string[] = sync(`${POSTS_PATH}/${path}/*.mdx`)
  return postPaths
}

// MDX 파일 파싱 : abstract / detail 구분
const parsePost = async (postPath: string): Promise<Post> => {
  const postAbstract = parsePostAbstract(postPath)
  const postDetail = await parsePostDetail(postPath)
  return {
    ...postAbstract,
    ...postDetail,
  }
}

// MDX의 개요 파싱
// url, category path, slug
export const parsePostAbstract = (postPath: string) => {
  const formattedPostPath = postPath.replaceAll('\\', '/')
  const filePath = formattedPostPath
    .slice(formattedPostPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, '')
    .replace('.mdx', '')
  const paths = filePath.split('/')
  const slug = paths.pop() || ''
  const categoryPath = paths.slice(0, 2).join('/')
  const url = `/blog/${categoryPath}/${slug}`
  return { url, categoryPath, slug }
}

// MDX detail
const parsePostDetail = async (postPath: string) => {
  const file = fs.readFileSync(postPath, 'utf8')
  const { data, content } = matter(file)
  const grayMatter = data as PostMatter
  const date = dayjs(grayMatter.date).locale('ko').format('YYYY년 MM월 DD일')
  return { ...grayMatter, date, content }
}

// category path을 category name으로 변경 : main/sub -> subname, main -> mainname
export const getCategoryPublicName = (dirPath: string) => {
  if (dirPath.includes('/')) {
    const sub = dirPath.split('/')[1]
    return subCategories[sub] || sub
  }
  return mainCategories[dirPath] || dirPath
}

// post를 날짜 최신순으로 정렬
const sortPostList = (PostList: Post[]) => {
  return PostList.sort((a, b) => (a.date > b.date ? -1 : 1))
}

// 모든/특정 카테고리 포스트 목록 조회
export const getPostList = async (categoryPath?: string): Promise<Post[]> => {
  const postPaths = getPostPaths(categoryPath)
  const postList = await Promise.all(
    postPaths.map((postPath) => parsePost(postPath)),
  )
  return postList
}

// 최신순으로 정렬된 포스트 목록 조회
export const getSortedPostList = async (categoryPath?: string) => {
  const postList = await getPostList(categoryPath)
  return sortPostList(postList)
}

export const getSitemapPostList = async () => {
  const postList = await getPostList()
  const baseUrl = BASE_URL
  const sitemapPostList = postList.map(({ url }) => ({
    lastModified: new Date(),
    url: `${baseUrl}${url}`,
  }))
  return sitemapPostList
}

export const getAllPostCount = async () => (await getPostList()).length

// 모든 메인 카테고리 목록 조회
export const getMainCategoryList = () => {
  const categoryPaths: string[] = sync(`${POSTS_PATH}/*`)
  const categoryList = categoryPaths.map(
    (path) => path.split('/').slice(-1)?.[0],
  )
  return categoryList
}

// 특정 메인 카테고리의 서브 카테고리 목록 조회
export const getSubCategoryList = (category: string) => {
  const folder = category || '**'
  const categoryPaths: string[] = sync(`${POSTS_PATH}/${folder}/*`)
  const categoryList = categoryPaths.map(
    (path) => path.split('/').slice(-1)?.[0],
  )
  return categoryList
}

// 카테고리별 포스트 개수 조회
export const getCategoryDetailList = async () => {
  const postList = await getPostList()
  const result: { [key: string]: number } = {}
  for (const post of postList) {
    const category = post.categoryPath
    if (result[category]) {
      result[category] += 1
    } else {
      result[category] = 1
    }
  }
  const detailList: CategoryDetail[] = Object.entries(result).map(
    ([category, count]) => ({
      dirName: category,
      publicName: getCategoryPublicName(category),
      count,
    }),
  )
  return groupByMainCategory(detailList)
}

// mainCategory 기준 그룹화
const groupByMainCategory = (categories: CategoryDetail[]) => {
  const detailList = categories.reduce<{ [key: string]: MainCategoryDetail }>(
    (acc, category) => {
      const mainCategory = category.dirName.split('/')[0]

      // 해당 mainCategory가 이미 acc에 있다면 해당 배열에 category detail을 추가하고,
      // 그렇지 않으면 새로운 객체를 만들어서 category detail을 추가
      if (!acc[mainCategory]) {
        acc[mainCategory] = {
          dirName: mainCategory,
          publicName: getCategoryPublicName(mainCategory),
          count: 0,
          subCategoryList: [],
        }
      }
      acc[mainCategory].count += category.count
      acc[mainCategory].subCategoryList.push(category)
      return acc
    },
    {},
  )
  return Object.values(detailList)
}

// post 상세 페이지 내용 조회
export const getPostDetail = async (categoryPath: string, slug: string) => {
  const filePath = `${POSTS_PATH}/${categoryPath}/${slug}.mdx`
  const detail = await parsePost(filePath)
  return detail
}

// 목차 생성
export const parseToc = (content: string): HeadingItem[] => {
  const regex = /^(##|###) (.*$)/gim
  const headingList = content.match(regex)

  return (
    headingList?.map((heading: string) => ({
      text: heading.replace('##', '').replace('#', ''),
      link:
        '#' +
        heading
          .replace('# ', '')
          .replace('#', '')
          .replace(/[\[\]:!@#$/%^&*()+=,.]/g, '')
          .replace(/ /g, '-')
          .toLowerCase()
          .replace('?', ''),
      indent: (heading.match(/#/g)?.length || 2) - 2,
    })) || []
  )
}
