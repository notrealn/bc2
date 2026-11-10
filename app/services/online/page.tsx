import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex flex-col gap-8 p-8 items-center max-w-2xl mx-auto">
      <h1 className="flex justify-center items-center gap-4 text-2xl text-primary">
        線上癌友會
        <Image
          className="w-16"
          src="/services/computer.png"
          alt="icon of computer"
          width={800}
          height={800}
        />
      </h1>
      <p>
        或許，您不太願意和生活中的朋友交流關於生病和治療的事項，因為他們不能感同身受,我們每週提供乳癌姐妹在Zoom上有機會共同學習、彼此鼓勵、安全交流的環境。每次聚會有不同的主題，包含醫療/心理講座、抗癌故事分享、中醫調養、運動與營養等，活動後會分成不同小組，讓大家有機會吐露心聲、彼此打氣。
      </p>
      <div className="font-semibold">
        美東週四(晚上) 7:45 - 9:30 pm
        <br />
        美中週四(晚上) 6:45 - 8:30 pm
        <br />
        美西周四(晚上) 4:45 - 6:30 pm
        <br />
        北京週五(早上) 8:45 - 10:30 am
        <br />
      </div>
      <Image
        className="max-w-xl w-full"
        src="/services/collage.png"
        alt="collage of images that are really hard to see since the quality is bad"
        width={800}
        height={451}
      />
    </main>
  )
}
