import BlogLayout from '@/components/layout/BlogLayout'
import '@/styles/globals.css'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <BlogLayout banner>{children}</BlogLayout>
}
