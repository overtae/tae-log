import Banner from '@/components/layout/Banner'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import AuthorProfile from '@/components/layout/sidebar/AuthorProfile'
import Category from '@/components/layout/sidebar/Category'
import { PropsWithChildren } from 'react'

const BlogLayout = ({
  children,
  banner = false,
}: PropsWithChildren<{ banner?: boolean }>) => {
  return (
    <div className="flex h-fit min-h-screen w-full cursor-default flex-col items-center justify-start font-pretendard">
      <section className="sticky top-0 z-50 h-fit w-full max-w-7xl">
        <Header />
      </section>
      {banner && <Banner />}
      <section className="max-w-7xl flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="[&::-webkit-scrollbar-track]:none fixed top-20 z-30 hidden h-[calc(100vh-6rem)] w-full shrink-0 md:sticky md:block md:overflow-y-scroll [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-transparent [&::-webkit-scrollbar]:w-1 [&:hover::-webkit-scrollbar-thumb]:bg-yellow-600">
          <AuthorProfile />
          <Category />
        </aside>
        <main className="relative py-6">{children}</main>
      </section>
      <section className="h-fit w-full max-w-7xl">
        <Footer />
      </section>
    </div>
  )
}

export default BlogLayout
