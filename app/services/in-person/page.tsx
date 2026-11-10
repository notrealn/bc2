import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex flex-col gap-8 p-8 items-center max-w-4xl mx-auto">
      <h1 className="flex justify-center items-center gap-4 text-2xl text-primary">
        实体癌友会
        <Image
          className="w-20"
          src="/services/camera.webp"
          alt="icon of camera"
          width={200}
          height={168}
        />
      </h1>
      <p>
        每个关怀区域会不定期举行各式活动，例如郊游、聚餐、一起探访癌友等活动，彼此支持联络感情，抗癌路上不孤单。
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6">
        <ImageWithCaption
          image="/services/collage/1.jpeg"
          caption="美东南区新春聚餐，满桌子的爱"
        />
        <ImageWithCaption
          image="/services/collage/2.jpeg"
          caption="美西区聚会，治疗期间的幕后英雄-配偶，一起来相見"
        />
        <ImageWithCaption
          image="/services/collage/3.jpeg"
          caption="加拿大区一起出游，享受大自然"
        />
        <ImageWithCaption
          image={
            <div className="grid grid-rows-2 grid-cols-[2fr_1fr] gap-2">
              <div className="relative aspect-video">
                <Image
                  className="object-cover col-start-1"
                  src="/services/collage/4-1.jpeg"
                  alt="image of people wrapping dumplings"
                  fill={true}
                />
              </div>
              <div className="relative aspect-video">
                <Image
                  className="object-cover"
                  src="/services/collage/4-2.jpeg"
                  alt="image of dumpling filling ingredients"
                  fill={true}
                />
              </div>
              <div className="relative aspect-8/18 row-span-2 row-start-1 col-start-2">
                <Image
                  className="object-cover"
                  src="/services/collage/4-3.jpeg"
                  alt="image of raw dumplings"
                  fill={true}
                />
              </div>
            </div>
          }
          caption="加拿大区一起聚聚包饺子"
        />
      </div>
    </main>
  )
}

function ImageWithCaption({
  caption,
  image,
}: {
  caption: string
  image: string | React.ReactNode
}) {
  return (
    <div className="font-semibold">
      {typeof image == 'string' ? (
        <div className="relative aspect-4/3 w-full mb-1">
          <Image
            className="object-cover"
            src={image}
            alt="collage image"
            fill={true}
          />
        </div>
      ) : (
        image
      )}
      {caption}
    </div>
  )
}
