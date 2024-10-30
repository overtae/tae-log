export interface PostMatter {
  title: string
  description: string
  tags: string[]
  date: string
}

export interface Post extends PostMatter {
  url: string
  slug: string
  content: string
  categoryPath: string
}
