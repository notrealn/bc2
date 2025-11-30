import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-full bg-gradient-to-b from-surface from-70% to-surface-container-highest to-100% text-on-surface ">
      <div className="text-center flex justify-evenly p-4 object-contain flex-wrap gap-y-4">
        <div className="flex flex-col justify-evenly text-xl gap-2">
          <div className="flex flex-row flex-wrap justify-center gap-x-2">
            <h1 className="text-4xl font-bold">我们的宗旨 Our mission:</h1>
          </div>
          <p className="max-w-lg">
            我们是一群乳腺癌患者成立的乳腺癌关怀机构，希望我们能在爱里，彼此陪伴，爱来癌去，一路同行！
          </p>
          <div className="relative">
            <p className="text-xl mr-5 ml-5">
              在每一个你需要的时刻，希望 我们都能陪你度过。
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
          className="min-w-0 max-w-sm w-full h-auto p-4 bg-white shadow-2xl"
          src="/home/hands-together.png"
          alt="hands-together"
          width={494}
          height={449}
        />
      </div>
      <div className="flex flex-row justify-evenly p-4 gap-4">
        <Card
          imgsrc="/home/heart2.svg"
          alt="heart"
          title="你不孤单"
          content="当你孤单的时候，请相 信，我们也正在找你，希 望给你一个温暖的拥抱"
          buttonText="加入我们"
          href="/todo"
        ></Card>
        <Card
          imgsrc="/home/eye.png"
          alt="awareness"
          title="你不孤单"
          content="当你孤单的时候，请相 信，我们也正在找你，希 望给你一个温暖的拥抱"
          buttonText="了解更多"
          href="/todo"
        ></Card>
        <Card
          imgsrc="/home/social.svg"
          alt="services"
          title="我们的服务"
          content={
            <ul className="list-disc">
              <li>癌友互助微信群</li>
              <li>每周线上癌友会</li>
              <li>实体癌友会</li>
              <li>医疗、心理讲座</li>
            </ul>
          }
          buttonText="了解更多"
          href="/todo"
        ></Card>
      </div>
      <div className="text-center bg-surface p-8">
        <div className="m-auto max-w-2xl">
          我們最想傳遞的祝福“爱来癌去”，不是说癌症会凭空消失，而是说：爱能把恐惧慢慢带走,
          爱能在治疗中带 来力量,
          爱能让我们重新找回笑声。癌症的确可怕。但当一个人不再孤单时，它就没有那么可怕了。
          在这里，我们听你、陪你、理解你, 因为我们走过一样的路。
        </div>
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
    <div className="flex flex-col items-center max-w-80 w-full p-4 gap-2 bg-surface-container border-2 border-white">
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
