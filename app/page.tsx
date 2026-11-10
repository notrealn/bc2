import { JoinButton } from '@/components/joinButton'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="h-full bg-surface text-on-surface ">
      <div className="text-center flex justify-evenly p-4 object-contain flex-wrap gap-y-15 gap-x-6">
        <div className="flex flex-col justify-evenly text-xl gap-2">
          <div className="flex flex-row flex-wrap justify-center gap-x-2">
            <h1 className="text-4xl font-bold">我們的宗旨 Our mission:</h1>
          </div>
          <p className="max-w-lg">
            我們是一群乳腺癌患者成立的乳腺癌關懷機構，希望我們能在愛裡，彼此陪伴，愛來癌去，一路同行！
          </p>
          <div className="relative">
            <p className="text-xl mx-8">
              在每一個你需要的時刻，希望 我們都能陪你度過。
            </p>
            <Image
              className="absolute -scale-x-75 scale-75 -top-3 -left-2 -rotate-12"
              src="/home/hearts.svg"
              alt=""
              width={100 / 2}
              height={168 / 2}
            />
            <Image
              className="absolute -top-5 -right-2 rotate-12"
              src="/home/hearts.svg"
              alt=""
              width={100 / 2}
              height={168 / 2}
            />
            <div className="absolute -bottom-10 right-20">
              <JoinButton />
            </div>
          </div>
        </div>
        <Image
          className="min-w-0 max-w-sm w-full h-auto p-4 bg-white shadow-lg"
          src="/home/hands-together.png"
          alt="hands-together"
          width={494}
          height={449}
        />
      </div>
      <div className="flex flex-col items-center md:flex-row md:items-stretch justify-evenly p-4 gap-4">
        <Card
          imgsrc="/home/heart2.svg"
          alt="heart"
          title="你不孤單"
          content="當你孤單的時候，請相信，我們也正在找你，希望給你一個溫暖的擁抱"
          buttonText="加入我們"
          href="/contact-us"
        ></Card>
        <Card
          imgsrc="/home/eye.png"
          alt="awareness"
          title="癌友見證"
          content="聽聽乳癌病友如何從主愛粉絲團得到幫助，重拾健康，活出精彩人生"
          buttonText="瞭解更多"
          href="/patients/testimonies"
        ></Card>
        <Card
          imgsrc="/home/social.svg"
          alt="services"
          title="我們的服務"
          content={
            <ul className="list-disc">
              <li>
                <Link
                  href="/services/wechat"
                  className="text-blue-400 underline"
                >
                  癌友互助微信群
                </Link>
              </li>
              <li>
                <Link
                  href="/services/online"
                  className="text-blue-400 underline"
                >
                  每週線上癌友會
                </Link>
              </li>
              <li>
                <Link
                  href="/services/in-person"
                  className="text-blue-400 underline"
                >
                  實體癌友會
                </Link>
              </li>
              <li>
                <Link
                  href="/services/lectures"
                  className="text-blue-400 underline"
                >
                  醫療、心理講座
                </Link>
              </li>
            </ul>
          }
          buttonText="瞭解更多"
          href="/services/wechat"
        ></Card>
      </div>
    </main>
  )
}

function Card({
  imgsrc,
  alt,
  title,
  content,
  buttonText,
  href,
}: {
  imgsrc: string
  alt?: string
  title: string
  content: React.ReactNode
  buttonText: string
  href: string
}) {
  return (
    <div className="flex flex-col items-center max-w-80 w-full p-4 gap-2 bg-surface-container border-2 border-white shadow-md">
      <Image
        className="w-16"
        src={imgsrc}
        alt={alt ?? ''}
        width={50}
        height={40}
      />
      <div className="font-bold">{title}</div>
      <div>{content}</div>
      <a
        className="bg-primary text-on-primary p-2 rounded-xl mt-auto"
        href={href}
      >
        {buttonText}
      </a>
    </div>
  )
}
