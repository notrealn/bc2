import { SquareImage } from '@/components/squareImage'

export function AboutTemplate({
  image1src,
  image1alt,
  h1,
  text1,
  image2src,
  image2alt,
  h2,
  text2,
}: {
  image1src: string
  image1alt: string
  h1: string
  text1: string
  image2src: string
  image2alt: string
  h2: string
  text2: string
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 p-8 max-w-4xl gap-8 mx-auto content-center">
      <SquareImage
        className="h-full md:col-span-2 max-w-sm mx-auto"
        src={image1src}
        alt={image1alt}
      />
      <div className="flex flex-col items-center gap-4 m-auto md:col-span-3">
        <h1 className="text-2xl text-primary flex gap-2 text-center">{h1}</h1>
        <div className="">{text1}</div>
      </div>
      <SquareImage
        className="h-full md:col-span-2 max-w-sm mx-auto md:order-last"
        src={image2src}
        alt={image2alt}
      />
      <div className="flex flex-col items-center gap-4 m-auto md:col-span-3">
        <h1 className="text-2xl text-primary flex gap-2 text-center">{h2}</h1>
        <div className="">{text2}</div>
      </div>
    </div>
  )
}
