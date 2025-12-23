import { SquareImage } from '@/components/squareImage'

export default function Page() {
  return (
    <div className="grid md:grid-cols-5 p-8 max-w-4xl gap-8 mx-auto">
      <SquareImage
        className="h-full hidden md:block col-span-2"
        src="/about/compass.jpeg"
        alt="image of compass"
      />
      <div className="flex flex-col items-center gap-4 m-auto col-span-3">
        <h1 className="text-2xl text-primary flex gap-2 text-center">
          我们的使命
        </h1>
        <div className="">
          我们是一群经历过乳腺癌的姐妹，愿意用从主而来的爱、安慰与盼望
          去陪伴全球的華人乳腺癌患者。我们盼望：让每位姐妹在身体、心灵、信仰上
          被支持；让她们在恐惧中找到力量，在低谷中重新站起，在爱里活
          出更自由、更丰盛的生命。
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 m-auto col-span-3">
        <h1 className="text-2xl text-primary flex gap-2 text-center">
          我们的团队
        </h1>
        <div className="">
          我们拥有40位关怀义工，她们全部是乳腺癌康复者，并完成「信望爱关
          怀课程」训练她们愿意以自己的经历、生命故事与
          陪伴技巧，支持正在经历治疗的姐妹，帮助大家在身体、心理与灵性上
          重建力量。如果你也想为乳腺癌姐妹奉献一份爱，欢迎加入义工团队或支
          持我们。
        </div>
      </div>
      <SquareImage
        className="h-full hidden md:block col-span-2"
        src="/about/puzzle.jpeg"
        alt="image of puzzle pieces coming together"
      />
    </div>
  )
}
