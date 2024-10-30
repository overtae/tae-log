import ThemeToggle from '@/components/layout/theme/ThemeToggle'
import { blog } from '@/constants/blog'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex w-full select-none justify-between px-6 py-4 backdrop-blur-xl">
      <section className="flex items-center gap-2">
        <Image src={'/icons/logo.png'} alt="logo" width={32} height={32} />
        <Link href={'/blog'} className="text-lg font-semibold">
          {blog.subTitle}
        </Link>
      </section>
      <section>
        <ThemeToggle />
      </section>
    </header>
  )
}

export default Header
