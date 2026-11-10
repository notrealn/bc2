import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="flex flex-col p-8 gap-4 mx-auto max-w-4xl text-on-surface">
      <div className="m-auto">
        <h1 className="text-primary text-2xl">癌友互助微信群</h1>
      </div>
      <div className="font-semibold">
        我們有多個不同功能的微信群，讓癌友能隨時隨地在上面和其它戰友交流訊息、互吐心事。每一位入群的申請，皆經過群主的審查，只有乳癌患者才能加入，提供姐妹們一個安全的交流園地。目前有如下的微信群:
      </div>
      <div className="flex flex-col md:gap-8 md:flex-row">
        <div>
          <Section title="第一大類: 主群">
            這是病友人數最多的群，你在治療中許多五花八門的大小疑問，諸如:
            假髮那買?去醫院手術要帶什麼等?
            在本群的眾多病友都經歷過，也很熱心的分享她們的經驗
          </Section>
          <Section title="第二大類: 乳癌分型群">
            可按自己乳癌的分型加入, 這裡的病友都是同一型的, 所以,
            可針對自己的乳癌分型治療，有更深入的交流
            <ol className="list-decimal list-inside">
              <li>三陰群</li>
              <li>Her2群</li>
              <li>基因突變群</li>
              <li>重建群</li>
            </ol>
          </Section>
          <Section title="第三大類: 區域關懷群">
            由於我們服務的對象來自世界各地，所以，按地理位置劃分為不同的關懷區域，讓病友們能私下見見面、彼此探訪等等
            <ol className="list-decimal list-inside">
              <li>美東南區</li>
              <li>美東北區</li>
              <li>美中區</li>
              <li>美西區</li>
              <li>加拿大區</li>
              <li>中國區</li>
            </ol>
          </Section>
        </div>
        <div>
          <Section title="第四大類: 養生保健群">
            正規治療的結束並不是抗癌路的終點，之後如何藉由飲食、運動等等來強化自體免疫力，才能提高生活品質、降低復發的機會
            <ol className="list-decimal list-inside">
              <li>
                葡萄園喝湯群: 一起學習健康飲食，每天打卡喝湯，分享彼此飲食心得.
              </li>
              <li>
                運動群:
                一起堅持運動打卡，交流運動心得，減少治療副作用，增強體質.
              </li>
              <li>
                唱詩歌群: 唱歌對身心靈有許多好處，姐妹們每日一起打卡唱歌,好歡樂!
              </li>
            </ol>
          </Section>
          <Section title="第五大類: 心靈支持">
            治療後是否仍提心吊膽、一有風吹草動就擔心復發? 聖經有句經文:
            喜樂的心乃是良藥! 在這裡, 每天有義工陪伴讀聖經禱告等等,
            讓你藉由依靠神, 開始有超乎境遇的平安喜樂
            <ol className="list-decimal list-inside">
              <li>美東晨禱群</li>
              <li>美西晨禱群</li>
              <li>每日背經群</li>
              <li>研讀聖經團契 (主愛查經&BSF)</li>
            </ol>
          </Section>
          <div className="relative size-fit m-auto p-4">
            <Image
              src="/stickyNote.svg"
              alt="stickynote"
              width={140}
              height={140}
            />
            <Link
              className="absolute inset-0 flex flex-col justify-center items-center z-10 text-black text-center"
              href="/contact-us"
            >
              請聯繫我們，
              <br />
              詢問加入方式
              <Image src="/heart.svg" alt="heart" width={24} height={24} />
            </Link>
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
