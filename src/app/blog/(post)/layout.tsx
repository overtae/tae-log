import BlogLayout from '@/components/layout/BlogLayout'
import '@/styles/globals.css'

export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <BlogLayout>{children}</BlogLayout>
}
