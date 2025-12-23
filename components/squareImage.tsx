import Image from 'next/image'

// import { clock } from './'

export function SquareImage({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div
      className={
        'relative size-full aspect-square bg-white shadow-md -z-10 ' +
        (className ?? '')
      }
    >
      <Image className="p-4" src={src} alt={alt} fill={true} />
    </div>
  )
}
