import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex flex-col p-8 gap-4 mx-auto max-w-4xl text-on-surface">
      <div className="m-auto">
        <h1 className="text-primary text-2xl">癌友互助微信群</h1>
      </div>
      <div className="font-semibold">
        我们有多个不同功能的微信群，让癌友能随时随地在上面和其它战友交流讯息、互吐心事。每一位入群的申请，皆经过群主的审查，只有乳癌患者才能加入，提供姐妹们一个安全的交流园地。目前有如下的微信群:
      </div>
      <div className="flex flex-col md:gap-8 md:flex-row">
        <div>
          <Section title="第一大类: 主群">
            这是病友人数最多的群，你在治疗中许多五花八门的大小疑问，诸如:
            假发那买?去医院手术要带什么等?
            在本群的众多病友都经历过，也很热心的分享她们的经验
          </Section>
          <Section title="第二大类: 乳癌分型群">
            可按自己乳癌的分型加入, 这里的病友都是同一型的, 所以,
            可针对自己的乳癌分型治疗，有更深入的交流
            <ol className="list-decimal list-inside">
              <li>三阴群</li>
              <li>Her2群</li>
              <li>基因突变群</li>
              <li>重建群</li>
            </ol>
          </Section>
          <Section title="第三大类: 区域关怀群">
            由于我们服务的对象来自世界各地，所以，按地理位置划分为不同的关怀区域，让病友们能私下见见面、彼此探访等等
            <ol className="list-decimal list-inside">
              <li>美东南区</li>
              <li>美东北区</li>
              <li>美中区</li>
              <li>美西区</li>
              <li>加拿大区</li>
              <li>中国区</li>
            </ol>
          </Section>
        </div>
        <div>
          <Section title="第四大类: 养生保健群">
            正规治疗的结束并不是抗癌路的终点，之后如何借由饮食、运动等等来强化自体免疫力，才能提高生活品质、降低复发的机会
            <ol className="list-decimal list-inside">
              <li>
                葡萄园喝汤群: 一起学习健康饮食，每天打卡喝汤，分享彼此饮食心得.
              </li>
              <li>
                运动群:
                一起坚持运动打卡，交流运动心得，减少治疗副作用，增强体质.
              </li>
              <li>
                唱诗歌群: 唱歌对身心灵有许多好处，姐妹们每日一起打卡唱歌,好欢乐!
              </li>
            </ol>
          </Section>
          <Section title="第五大类: 心灵支持">
            治疗后是否仍提心吊胆、一有风吹草动就担心复发? 圣经有句经文:
            喜樂的心乃是良药! 在这里, 每天有义工陪伴读圣经祷告等等,
            让你借由依靠神, 开始有超乎境遇的平安喜乐
            <ol className="list-decimal list-inside">
              <li>美东晨祷群</li>
              <li>美西晨祷群</li>
              <li>每日背经群</li>
              <li>研读圣经团契 (主爱查经&BSF)</li>
            </ol>
          </Section>
          <div className="relative size-fit m-auto p-4">
            <Image
              src="/stickyNote.svg"
              alt="stickynote"
              width={140}
              height={140}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-black text-center">
              请联系我们，
              <br />
              询问加入方式
              <Image src="/heart.svg" alt="heart" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="">
      <div className="w-full bg-primary-container rounded-xl text-center my-2 p-1">
        {title}
      </div>
      <div>{children}</div>
    </div>
  )
}
