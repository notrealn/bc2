import Image from 'next/image'
import { ReactNode } from 'react'

export default function Home() {
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
      <div className="flex flex-row justify-around gap-x-2 m-6 flex-wrap">
        <div>二维码联系我们的义工</div>
        <div>邮件发送给我们的义工</div>
        <div>每周四的时间，我们在Zoom等你来</div>
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
