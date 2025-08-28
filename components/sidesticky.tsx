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
    <div className="relative size-fit m-auto md:absolute md:top-1/2 md:left-4 md:transform md:-translate-y-1/2">
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
