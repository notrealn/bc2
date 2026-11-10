import Image from 'next/image'
import Link from 'next/link'

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
        這裡展示的是乳癌姐妹在治療過程或康復後的藝術作品、詩詞、生活興趣、文章等等，治療過程雖辛苦仍能找到喜樂的源泉，康復後的與癌共舞讓人生愈加精彩。歡迎主愛粉絲團的乳癌姐妹們踴躍投稿，分享你的精彩人生。若你要投稿，請聯絡你所屬的區域關懷組長或義工。
      </p>
      <TCard
        title="Lu Lin 病友在治療期間的創作畫作"
        body="不被拘禁的心，用畫筆陪伴每一次化療"
        href="/patients/creations/lulin"
        imgsrc="/patients/creations/bird.jpeg"
      />
      <TCard
        title="Tina 康復後的綠手指生活"
        body="和同是乳癌康復者的媽媽，親自用雙手栽重出綠意盎然的天地。"
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
        <Link href={href} className="underline">
          閱讀全文
        </Link>
      </div>
    </div>
  )
}
