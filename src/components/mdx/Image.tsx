import NextImage from 'next/image'

interface ImageProps {
  src: string
  alt: string
}

const Image = ({ src, alt }: ImageProps) => {
  return (
    <>
      <NextImage
        src={src}
        alt={alt}
        width={500}
        height={300}
        className="mx-auto mb-0 mt-8 aspect-auto w-fit rounded-md"
      />
      {alt !== '' && (
        <span className="mb-8 mt-2 block w-full text-center text-sm text-gray-500 dark:text-gray-400">
          {alt}
        </span>
      )}
    </>
  )
}

export default Image
