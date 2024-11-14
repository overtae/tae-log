import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['next-mdx-remote'],
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/blog',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
