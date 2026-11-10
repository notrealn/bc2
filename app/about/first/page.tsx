import { JoinButton } from '@/components/joinButton'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="flex flex-col text-center items-center gap-2 p-8">
      <h1 className="text-2xl text-primary pb-2 flex m-auto gap-2">
        <Image src="/about/flower.webp" alt="flower" width={32} height={33} />
        關於主愛粉絲團｜給第一次來到這裡的你
      </h1>
      <div>
        主愛粉絲團成立於2020年8月30日。源頭其實非常簡單：
        <br />
        幾位基督徒姐妹在小愛手術前為她禱告。
        <br />
        那樣的陪伴被延續下來，變成了我們每週四固定的關懷聚會。
        <br />
      </div>
      <div>
        沒人想到這個小小的群體會走五年。也沒人計劃過要走多遠。
        <br />
        但一路上加入的姐妹越來越多：來自美國、加拿大、中國這僅僅是開始。我們還有來自英國，歐洲，日本，臺灣的姐妹。
      </div>
      <div>
        隨著姐妹們的需要增加，我們的聚會內容也從最初的週四禱告，
        <br />
        慢慢發展成每週都有不同形式、不同內容的聚會：有醫生的諮詢分享，有姐妹們的抗癌心得交流，
        <br />
        也有營養、飲食、運動等群組，讓大家在生活的不同面向都能得到支持。
      </div>
      <div className="font-bold">
        我們的特殊之處在於：
        <br />
        我們是一個完全由乳腺癌患者彼此關懷的組織。
      </div>
      <div>
        你會很驚訝，許多姐妹在自己的治療過程中，就已經開始去幫助別人。
        <br />
        如果把這些年互相打過的電話、寫過的訊息全部連起來，大概會像一條永遠不會結束的愛的河流。
        <br />
        但即使把所有記錄都攤開，也無法真正呈現——我們在愛裡彼此牽著、陪著、點亮對方生命的一小束光。
        <br />
      </div>
      <div className="font-bold">
        我們最簡單的一句話，也是我們最想傳遞的祝福：
      </div>
      <div className="font-bold relative">
        <Image
          src="/about/hearts.webp"
          className="hidden md:block absolute scale-256 top-0 -left-72"
          alt="hearts"
          width={800}
          height={174}
        />
        “愛來癌去。”
        <Image
          src="/about/hearts.webp"
          className="hidden md:block absolute scale-256 top-0 left-72"
          alt="hearts"
          width={800}
          height={174}
        />
      </div>
      <div>
        不是說癌症會憑空消失，而是說：
        <br />
        愛能把恐懼慢慢帶走, 愛能在治療中帶來力量, 愛能讓我們重新找回笑聲
        <br />
        癌症的確可怕。但當一個人不再孤單時，它就沒有那麼可怕了。
        <br />
        在這裡，我們聽你、陪你、理解你
        <br />
        因為我們走過一樣的路。
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
        來自小愛的一句話
      </h1>
      <div>乳腺癌曾經是我生命裡最大的恐懼，但如今卻成為一個深深的祝福。</div>
      <div>
        它讓我知道生命是有限的，也讓我重新學習如何珍惜、如何去愛、如何去活。
      </div>
      <div>
        我相信，當你不再獨自面對；當你在愛裡被接住、被陪伴、被擁抱，
        乳腺癌也能成為你生命裡的一個轉折點。
      </div>
      <div>
        如果你願意，我們願意陪你一起走這一段路。
        <br />
        歡迎你加入主愛粉絲團。
        <br />
        你不孤單。
      </div>
      <JoinButton />
    </div>
  )
}
