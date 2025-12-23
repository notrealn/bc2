import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex flex-col gap-4 m-8">
      <h1>线上癌友会</h1>
      <p>
        或许，您不太愿意和生活中的朋友交流关于生病和治疗的事项，因为他们不能感同身受,我们每周提供乳癌姐妹在Zoom上有机会共同学习、彼此鼓励、安全交流的环境。每次聚会有不同的主题，包含医疗/心理讲座、抗癌故事分享、中医调养、运动与营养等，活动后会分成不同小组，让大家有机会吐露心声、彼此打气。
      </p>
      <div>
        美东周四(晚上) 7:45 - 9:30 pm
        <br />
        美中周四(晚上) 6:45 - 8:30 pm
        <br />
        美西周四(晚上) 4:45 - 6:30 pm
        <br />
        北京周五(早上) 8:45 - 10:30 am
        <br />
      </div>
      <Image
        src="/services/collage.png"
        alt="collage of images that are really hard to see since the quality is bad"
        width={800}
        height={451}
      />
    </main>
  )
}
