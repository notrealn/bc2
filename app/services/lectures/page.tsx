import { JoinButton } from '@/components/joinButton'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex flex-col gap-8 p-8 items-center max-w-2xl mx-auto">
      <h1 className="flex justify-center items-center gap-4 text-2xl text-primary">
        醫療/心理講座
        <Image
          className="w-16"
          src="/services/computer.png"
          alt="icon of computer"
          width={800}
          height={800}
        />
      </h1>
      <p>
        每週四美東時間晚上7:45的線上癌友會，我們會不定期舉辦線上的醫療/心理講座，提供癌友一起學習的機會。
      </p>
      <p>
        過去歷年的活動錄影，請按如下連結，期盼以下的內容能祝福到你，更邀請你未來來參加線上癌友會，一起來聽故事和講座，並與其它病友一起交流、彼此鼓勵。
      </p>
      <Link
        label="抗癌故事分享"
        href="https://www.youtube.com/playlist?list=PL5NWTqwwolFq1gtyqgnFtskxwFrDiP6yW"
      />
      <Link
        label="乳癌醫療講座"
        href="https://www.youtube.com/playlist?list=PL5NWTqwwolFoqidtpJ7YZDSHlj9WVf1FZ"
      />
      <Link
        label="心理健康講座"
        href="https://youtube.com/playlist?list=PL5NWTqwwolFq25QlvPV_CjeUl6Xf1VpgB"
      />
      <Link
        label="調養中醫講座"
        href="https://www.youtube.com/playlist?list=PL5NWTqwwolFpAurCIFfpj2oDuEYPeW1vH"
      />
      <Link
        label="聖經信息-苦難與祝福"
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
