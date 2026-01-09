import Image from 'next/image'

export function SideSticky({
  src,
  children,
  size,
}: {
  src: string
  children: React.ReactNode
  size?: number
}) {
  return (
    <div className="relative size-fit m-auto lg:absolute lg:top-1/2 lg:left-4 lg:transform lg:-translate-y-1/2">
      <Image
        src={src}
        alt="stickynote"
        width={size ?? 180}
        height={size ?? 180}
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-black text-center">
        {children}
      </div>
    </div>
  )
}
