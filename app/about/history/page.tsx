import { SquareImage } from '@/components/squareImage'

export default function Page() {
  return (
    <div className="grid md:grid-cols-5 p-8 max-w-4xl gap-y-8 gap-x-4 mx-auto">
      <SquareImage
        className="h-full hidden md:block col-span-2"
        src="/about/clock.jpg"
        alt="image of clock"
      />
      <div className="flex flex-col items-center gap-4 m-auto col-span-3">
        <h1 className="text-2xl text-primary flex gap-2 text-center">
          我们的历史
        </h1>
        <div className="p-4">
          主爱粉丝团成立于 2020年8月，由 几位基督徒姐妹在小爱手术前的祷告
          开始。这个小小的爱心行动，被彼此 的陪伴延续下来，逐渐发展成一个跨
          越美国、加拿大、中国、日本、欧 洲、澳洲等地的全球性华人乳腺癌支
          持组织。 五年来，我们以祷告、陪伴与专业资
          讯陪伴超过一千位乳腺癌姐妹，让每 一个经历疾病的人都不再孤单。
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 m-auto col-span-3">
        <h1 className="text-2xl text-primary flex gap-2 text-center">
          我们的缘起
        </h1>
        <div className="p-4">
          最初，只是几位姐妹之间彼此加油与 祷告；后来，越来越多处在治疗中的
          姐妹加入，大家在同样的黑暗与恐惧 中相互扶持。在彼此的陪伴中，一个
          简单的祷告小组，逐渐长成一个充满 力量的“乳腺癌姐妹群体”。
          这里的每一份关怀，都是亲身走过的 人彼此接住的温暖力量，让不断下沉
          的生命重新被托起。
        </div>
      </div>
      <SquareImage
        className="h-full hidden md:block col-span-2"
        src="/about/gather.jpeg"
        alt="image of people gathering"
      />
    </div>
  )
}
