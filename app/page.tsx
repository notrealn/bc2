'use client'

import { mail } from '@/util/mail'
import Form from 'next/form'
import Image from 'next/image'
import { ReactNode, useOptimistic } from 'react'

export default function Home() {
  const [sending, setSending] = useOptimistic(false, () => true)

  return (
    <main>
      <div className="bg-gradient-to-r from-black to-red-700 text-white text-center flex justify-evenly p-4 object-contain flex-wrap  gap-y-4">
        <div className="flex flex-col justify-evenly text-xl gap-2">
          <div className="flex flex-row flex-wrap justify-center gap-x-2">
            <h1 className="text-4xl font-bold">我们的宗旨</h1>
            <h1 className="text-4xl font-bold">Our mission:</h1>
          </div>
          <p className="max-w-lg">
            我们是一群乳腺癌患者成立的乳腺癌关怀机构，希望我们能在爱里，彼此陪伴，爱来癌去，一路同行！
          </p>
          <div className="relative">
            <p className="text-pink-400">
              在每一个你需要的时刻，希望我们都能陪你度过。
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
          </div>
        </div>
        <Image
          className="min-w-0 max-w-sm w-full h-auto"
          src="/home/hands-together.png"
          alt="hands-together"
          width={494}
          height={449}
        />
      </div>
      <LinkContainer>
        <CircleLink text="关怀疗愈" svgPath="/home/heart2.svg" href="todo" />
        <CircleLink text="区域小组" svgPath="/home/map.svg" href="todo" />
        <CircleLink text="饮食健康" svgPath="/home/fruits.svg" href="todo" />
        <CircleLink text="运动康复" svgPath="/home/dumbell.svg" href="todo" />
      </LinkContainer>
      <div className="text-center underline text-xl">最新活动更新</div>
      <LinkContainer>
        <RectLink text="周四活动" svgPath="/home/network.svg" href="todo" />
        <RectLink text="区域活动" svgPath="/home/world.svg" href="todo" />
        <RectLink text="病友探访" svgPath="/home/health.svg" href="todo" />
        <RectLink text="特殊活动" svgPath="/home/people.svg" href="todo" />
      </LinkContainer>
      <div className="bg-gradient-to-r from-black to-red-700 text-white text-center text-xl p-2">
        当你孤单的时候，请相信，我们也正在找你，希望给你一个温暖的拥抱......
      </div>
      <div className="flex flex-row justify-around gap-4 m-6 flex-wrap lg:flex-nowrap">
        <Form
          className="flex gap-2"
          action={async (formdata) => {
            setSending(true)
            console.log('sending', Object.fromEntries(formdata.entries()))
            await mail(formdata)
          }}
        >
          <input
            className="col-span-2 border bg-pink-400 m-auto p-1 rounded-md"
            type="submit"
            value={sending ? '...' : '给我们留言'}
          />
          <input
            className="border rounded-md p-1 text-black min-h-16"
            type="text"
            name="feedback"
            id="feedback"
            required
          />
        </Form>
        <div className="m-auto text-center">
          每周四（中国星期五）的时间，我们都有网络会议，分享经验，科普信息，姐妹聊天。请联系我们获取ZOOM信息
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            <a href="/about" className="bg-pink-500 p-2 rounded-full m-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width={24}
                height={24}
              >
                {/*<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->*/}
                <path
                  fill="#fff"
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                />
              </svg>
            </a>
            <p className="mt-auto mb-auto">联系我们：gigforever777@gmail.com</p>
          </div>
          <div className="flex flex-row gap-2">
            <a href="/about" className="bg-blue-400 p-2 rounded-full m-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                width={24}
                height={24}
              >
                {/* <!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                <path
                  fill="#fff"
                  d="M160 64C124.7 64 96 92.7 96 128L96 512C96 547.3 124.7 576 160 576L448 576C483.3 576 512 547.3 512 512L512 128C512 92.7 483.3 64 448 64L160 64zM272 352L336 352C380.2 352 416 387.8 416 432C416 440.8 408.8 448 400 448L208 448C199.2 448 192 440.8 192 432C192 387.8 227.8 352 272 352zM248 256C248 225.1 273.1 200 304 200C334.9 200 360 225.1 360 256C360 286.9 334.9 312 304 312C273.1 312 248 286.9 248 256zM576 144C576 135.2 568.8 128 560 128C551.2 128 544 135.2 544 144L544 208C544 216.8 551.2 224 560 224C568.8 224 576 216.8 576 208L576 144zM576 272C576 263.2 568.8 256 560 256C551.2 256 544 263.2 544 272L544 336C544 344.8 551.2 352 560 352C568.8 352 576 344.8 576 336L576 272zM560 384C551.2 384 544 391.2 544 400L544 464C544 472.8 551.2 480 560 480C568.8 480 576 472.8 576 464L576 400C576 391.2 568.8 384 560 384z"
                />
              </svg>
            </a>
            <p className="mt-auto mb-auto">填写联系表，让我们了解你的需要 </p>
          </div>
        </div>
      </div>
    </main>
  )
}

function LinkContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-row justify-evenly w-screen sm:w-[95vw] max-w-5xl overflow-x-auto m-4 ml-auto mr-auto">
      {children}
    </div>
  )
}

function CircleLink({
  text,
  svgPath,
  href,
}: {
  text: string
  svgPath: string
  href: string
}): ReactNode {
  return (
    <a
      className="bg-amber-100 rounded-xl p-10 relative text-xs md:p-14 md:text-base"
      href={href}
    >
      <div className="absolute flex flex-col top-0 bottom-0 left-0 right-0 m-auto w-fit h-fit items-center">
        {text}
        <Image
          className="w-8 md:w-16"
          src={svgPath}
          alt="hearts"
          width={50}
          height={40}
        />
      </div>
    </a>
  )
}

function RectLink({
  text,
  svgPath,
  href,
}: {
  text: string
  svgPath: string
  href: string
}): ReactNode {
  return (
    <a
      className="border-4 border-[#FDD1A3] rounded-xl p-9 relative box-border text-xs md:text-base md:p-14"
      href={href}
    >
      <div className="absolute flex flex-col top-0 bottom-0 left-0 right-0 m-auto w-fit h-fit items-center">
        {text}
        <Image
          className="w-8 md:w-16"
          src={svgPath}
          alt="hearts"
          width={50}
          height={40}
        />
      </div>
    </a>
  )
}
