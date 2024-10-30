import { getCategoryDetailList } from '@/lib/post'
import { ChevronDown } from 'lucide-react'

const Category = async () => {
  const categories = await getCategoryDetailList()

  return (
    <nav className="h-fit select-none px-4 pb-6">
      {categories.map((cg) => {
        return (
          <details key={cg.dirName} className="group" open>
            <summary className="hover:bg-sidebar-accent flex w-full cursor-pointer list-none items-center justify-between gap-1 rounded-md bg-background px-2 py-1">
              {cg.publicName}
              <ChevronDown
                size={16}
                className="rotate-0 transition duration-300 ease-in-out group-open:-rotate-180"
              />
            </summary>
            <ul className="mx-2 border-l border-primary px-3">
              {cg.subCategoryList.map((sub) => (
                <li
                  key={sub.dirName}
                  className="mt-1 cursor-pointer hover:underline"
                >
                  <a href={`/blog/${sub.dirName}`}>
                    {sub.publicName} ({sub.count})
                  </a>
                </li>
              ))}
            </ul>
          </details>
        )
      })}
    </nav>
  )
}

export default Category
