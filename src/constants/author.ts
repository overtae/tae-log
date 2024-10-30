import { Author } from '@/types/author'

export const author: Author = {
  name: '태영이',
  introduce: '안녕하세요 :)',
  location: 'Seoul, Korea',
  thumbnailURL: '/images/author_thumbnail.png',
  socialLinks: [
    {
      label: 'Email',
      icon: 'at-sign',
      url: 'mailto:rlaxodud911@gmail.com',
    },
    {
      label: 'GitHub',
      icon: 'github',
      url: 'https://github.com/overtae',
    },
    {
      label: 'Instagram',
      icon: 'instagram',
      url: 'https://instagram.com/ttaaaaeeeeeeee',
    },
  ],
} as const
