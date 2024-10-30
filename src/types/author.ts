import dynamicIconImports from 'lucide-react/dynamicIconImports'

export type SocialLink = {
  label: string
  icon: keyof typeof dynamicIconImports
  url: string
}

export interface Author {
  name: string
  introduce: string
  location: string
  thumbnailURL: string
  socialLinks: SocialLink[]
}
