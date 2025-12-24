import { JoinButton } from '@/components/joinButton'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex flex-col gap-8 p-8 items-center max-w-2xl mx-auto">
      <h1 className="flex justify-center items-center gap-4 text-2xl text-primary">
        医疗/心理讲座
        <Image
          className="w-16"
          src="/services/computer.png"
          alt="icon of computer"
          width={800}
          height={800}
        />
      </h1>
      <p>
        每周四美东时间晚上7:45的线上癌友会，我们会不定期举办线上的医疗/心理讲座，提供癌友一起学习的机会。
      </p>
      <p>
        过去历年的活动录影，请按如下连结，期盼以下的内容能祝福到你，更邀请你未来来参加线上癌友会，一起来听故事和讲座，并与其它病友一起交流、彼此鼓励。
      </p>
      <Link
        label="抗癌故事分享"
        href="https://www.youtube.com/playlist?list=PL5NWTqwwolFq1gtyqgnFtskxwFrDiP6yW"
      />
      <Link
        label="乳癌医疗讲座"
        href="https://www.youtube.com/playlist?list=PL5NWTqwwolFoqidtpJ7YZDSHlj9WVf1FZ"
      />
      <Link
        label="心理健康讲座"
        href="https://youtube.com/playlist?list=PL5NWTqwwolFq25QlvPV_CjeUl6Xf1VpgB"
      />
      <Link
        label="调养中医讲座"
        href="https://www.youtube.com/playlist?list=PL5NWTqwwolFpAurCIFfpj2oDuEYPeW1vH"
      />
      <Link
        label="圣经信息-苦难与祝福"
        href="https://www.youtube.com/playlist?list=PL5NWTqwwolFrQADa2HrQH_mK5FzHM08me"
      />
      <JoinButton />
    </main>
  )
}

function Link({ href, label }: { href: string; label: string }) {
  return (
    <a
      className="bg-primary-container w-full text-center rounded-lg max-w-md p-1"
      href={href}
    >
      {label}
    </a>
  )
}
