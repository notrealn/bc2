import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex flex-col gap-4 mx-auto my-4 max-w-2xl">
      <h1 className="flex justify-center items-center gap-4 text-2xl text-primary">
        精彩人生
        <Image
          className="w-24"
          src="/patients/fireworks.webp"
          alt="fireworks"
          height={200}
          width={164}
        />
      </h1>
      <p>
        这里展示的是乳癌姐妹在治疗过程或康复后的艺术作品、诗词、生活兴趣、文章等等，治疗过程虽辛苦仍能找到喜乐的源泉，康复后的与癌共舞让人生愈加精彩。欢迎主爱粉丝团的乳癌姐妹们踊跃投稿，分享你的精彩人生。若你要投稿，请联络你所属的区域关怀组长或义工。
      </p>
      <TCard
        title="Lu Lin 病友在治療期間的創作畫作"
        body="不被拘禁的心，用画笔陪伴每一次化疗"
        href="/patients/creations/lulin"
        imgsrc="/patients/creations/bird.jpeg"
      />
      <TCard
        title="Tina 康复后的绿手指生活"
        body="和同是乳癌康复者的妈妈，亲自用双手栽重出绿意盎然的天地。"
        href="/patients/creations/tina"
        imgsrc="/patients/creations/2melons.jpeg"
      />
    </main>
  )
}

function TCard({
  title,
  body,
  href,
  imgsrc,
}: {
  title: string
  body: string
  href: string
  imgsrc: string
}) {
  return (
    <div className="border border-on-surface-container w-md p-8 rounded-3xl flex gap-4 items-center justify-center">
      <div className="aspect-square size-28 relative">
        <Image
          className="object-cover"
          src={imgsrc}
          alt="art preview image"
          fill={true}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-primary font-semibold">{title}</h1>
        <div className="font-semibold">{body}</div>
        <a href={href} className="underline">
          阅读全文
        </a>
      </div>
    </div>
  )
}
