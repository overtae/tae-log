import Icon from '@/components/common/Icon'
import { author } from '@/constants/author'
import Image from 'next/image'

const AuthorProfile = () => {
  return (
    <section className="px-6 pb-6 pt-12">
      <section className="flex flex-row items-center gap-4 md:flex-col md:items-start">
        <div className="relative mx-0 aspect-square h-12 w-12 overflow-hidden rounded-full outline outline-offset-2 outline-ring md:mx-auto md:h-24 md:w-24">
          <Image
            src={author.thumbnailURL}
            alt="profile"
            sizes="100px"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <ul className="flex-1">
          <li className="text-lg font-semibold">{author.name}</li>
          <li className="text-base font-light">{author.introduce}</li>
        </ul>
      </section>

      <ul className="mt-6 flex flex-row items-center gap-2 text-sm md:mt-4 md:flex-col md:items-start">
        <li className="flex items-center gap-1 rounded-full border border-primary px-2 py-1 md:border-0 md:p-0">
          <Icon name="map-pin" size={16} className="text-primary" />
          <span>{author.location}</span>
        </li>
        {author.socialLinks.map((link) => (
          <li
            key={link.url}
            className="rounded-full border border-primary p-1.5 sm:px-2 sm:py-1 md:border-0 md:p-0"
          >
            <a href={link.url} className="flex items-center gap-1">
              <Icon name={link.icon} size={16} className="text-primary" />
              <span className="hidden sm:inline-block">{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default AuthorProfile
