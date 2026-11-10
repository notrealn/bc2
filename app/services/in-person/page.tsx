import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex flex-col gap-8 p-8 items-center max-w-4xl mx-auto">
      <h1 className="flex justify-center items-center gap-4 text-2xl text-primary">
        實體癌友會
        <Image
          className="w-20"
          src="/services/camera.webp"
          alt="icon of camera"
          width={200}
          height={168}
        />
      </h1>
      <p>
        每個關懷區域會不定期舉行各式活動，例如郊遊、聚餐、一起探訪癌友等活動，彼此支持聯絡感情，抗癌路上不孤單。
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6">
        <ImageWithCaption
          image="/services/collage/1.jpeg"
          caption="美東南區新春聚餐，滿桌子的愛"
        />
        <ImageWithCaption
          image="/services/collage/2.jpeg"
          caption="美西區聚會，治療期間的幕後英雄-配偶，一起來相見"
        />
        <ImageWithCaption
          image="/services/collage/3.jpeg"
          caption="加拿大區一起出遊，享受大自然"
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
          caption="加拿大區一起聚聚包餃子"
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
