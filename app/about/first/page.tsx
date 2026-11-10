import { JoinButton } from '@/components/joinButton'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="flex flex-col text-center items-center gap-2 p-8">
      <h1 className="text-2xl text-primary pb-2 flex m-auto gap-2">
        <Image src="/about/flower.webp" alt="flower" width={32} height={33} />
        关于主爱粉丝团｜给第一次来到这里的你
      </h1>
      <div>
        主爱粉丝团成立于2020年8月30日。源头其实非常简单：
        <br />
        几位基督徒姐妹在小爱手术前为她祷告。
        <br />
        那样的陪伴被延续下来，变成了我们每周四固定的关怀聚会。
        <br />
      </div>
      <div>
        没人想到这个小小的群体会走五年。也没人计划过要走多远。
        <br />
        但一路上加入的姐妹越来越多：来自美国、加拿大、中国这仅仅是开始。我们还有来自英国，欧洲，日本，台湾的姐妹。
      </div>
      <div>
        随着姐妹们的需要增加，我们的聚会内容也从最初的周四祷告，
        <br />
        慢慢发展成每周都有不同形式、不同内容的聚会：有医生的咨询分享，有姐妹们的抗癌心得交流，
        <br />
        也有营养、饮食、运动等群组，让大家在生活的不同面向都能得到支持。
      </div>
      <div className="font-bold">
        我们的特殊之处在于：
        <br />
        我们是一个完全由乳腺癌患者彼此关怀的组织。
      </div>
      <div>
        你会很惊讶，许多姐妹在自己的治疗过程中，就已经开始去帮助别人。
        <br />
        如果把这些年互相打过的电话、写过的讯息全部连起来，大概会像一条永远不会结束的爱的河流。
        <br />
        但即使把所有记录都摊开，也无法真正呈现——我们在爱里彼此牵着、陪着、点亮对方生命的一小束光。
        <br />
      </div>
      <div className="font-bold">
        我们最简单的一句话，也是我们最想传递的祝福：
      </div>
      <div className="font-bold relative">
        <Image
          src="/about/hearts.webp"
          className="hidden md:block absolute scale-256 top-0 -left-72"
          alt="hearts"
          width={800}
          height={174}
        />
        “爱来癌去。”
        <Image
          src="/about/hearts.webp"
          className="hidden md:block absolute scale-256 top-0 left-72"
          alt="hearts"
          width={800}
          height={174}
        />
      </div>
      <div>
        不是说癌症会凭空消失，而是说：
        <br />
        爱能把恐惧慢慢带走, 爱能在治疗中带来力量, 爱能让我们重新找回笑声
        <br />
        癌症的确可怕。但当一个人不再孤单时，它就没有那么可怕了。
        <br />
        在这里，我们听你、陪你、理解你
        <br />
        因为我们走过一样的路。
      </div>
      <Image
        src="/about/heart-border.png"
        className="w-full max-w-xl m-auto p-4"
        alt="hearts"
        width={2400}
        height={77}
      />
      <h1 className="text-2xl text-primary pb-2 flex m-auto gap-2">
        <Image src="/about/letter.webp" alt="flower" width={45} height={30} />
        来自小爱的一句话
      </h1>
      <div>乳腺癌曾经是我生命里最大的恐惧，但如今却成为一个深深的祝福。</div>
      <div>
        它让我知道生命是有限的，也让我重新学习如何珍惜、如何去爱、如何去活。
      </div>
      <div>
        我相信，当你不再独自面对；当你在爱里被接住、被陪伴、被拥抱，
        乳腺癌也能成为你生命里的一个转折点。
      </div>
      <div>
        如果你愿意，我们愿意陪你一起走这一段路。
        <br />
        欢迎你加入主爱粉丝团。
        <br />
        你不孤单。
      </div>
      <JoinButton />
    </div>
  )
}
