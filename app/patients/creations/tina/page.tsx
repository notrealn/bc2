import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex flex-col gap-4 mx-auto my-4 max-w-4xl text-center px-2">
      <div className="font-semibold">
        Tina 康复后的绿手指生活，在拥挤的纽约市，和同是乳癌康复者的妈妈，
        <br />
        亲自用双手栽重出绿意盎然的天地
      </div>
      <div className="flex flex-wrap gap-4 justify-center -z-10">
        <div className="grid grid-rows-3 gap-4 w-sm h-[60rem]">
          <Picture
            src="/patients/creations/1.jpeg"
            alt="image of smiling women"
          />
          <div className="grid grid-cols-2 size-full gap-4">
            <Picture
              src="/patients/creations/2melons.jpeg"
              alt="image of woman holding two melons"
            />
            <Picture
              src="/patients/creations/2.jpeg"
              alt="image of smiling woman holding up a potted plant"
            />
          </div>
          <Picture
            src="/patients/creations/3.jpeg"
            alt="image of plate of melons"
            className="object-[50%_75%]"
          />
        </div>
        <div className="grid grid-rows-2 gap-4 w-sm h-[60rem]">
          <Picture
            src="/patients/creations/4.jpeg"
            alt="image of people gardening"
          />
          <Picture
            src="/patients/creations/5.jpeg"
            alt="image of people climbing trees"
          />
        </div>
      </div>
    </main>
  )
}

function Picture({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div className="relative w-full h-full">
      <Image
        className={`object-cover ${className ? className : ''}`}
        src={src}
        alt={alt}
        fill={true}
      />
    </div>
  )
}
