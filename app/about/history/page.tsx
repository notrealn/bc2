import { AboutTemplate } from '../aboutTemplate'

export default function Page() {
  return (
    <AboutTemplate
      image1src="/about/clock.jpg"
      image1alt="image of a clock"
      h1="我們的歷史"
      text1="主愛粉絲團成立於2020年8月，由幾位基督徒姐妹在小愛手術前的禱告開始。這個小小的愛心行動，被彼此的陪伴延續下來，逐漸發展成一個跨越美國、加拿大、中國、日本、歐洲、澳洲等地的全球性華人乳腺癌支持組織。五年來，我們以禱告、陪伴與專業資訊陪伴超過一千位乳腺癌姐妹，讓每一個經歷疾病的人都不再孤單。"
      image2src="/about/gather.jpeg"
      image2alt="image of people gathering"
      h2="我們的緣起"
      text2="最初，只是幾位姐妹之間彼此加油與禱告；後來，越來越多處在治療中的姐妹加入，大家在同樣的黑暗與恐懼中相互扶持。在彼此的陪伴中，一個簡單的禱告小組，逐漸長成一個充滿力量的“乳腺癌姐妹群體”。這裡的每一份關懷，都是親身走過的人彼此接住的溫暖力量，讓不斷下沉的生命重新被托起。"
    />
  )
  // return (
  //   <div className="grid md:grid-cols-5 p-8 max-w-4xl gap-8 mx-auto">
  //     <SquareImage
  //       className="h-full hidden md:block col-span-2"
  //       src="/about/clock.jpg"
  //       alt="image of clock"
  //     />
  //     <div className="flex flex-col items-center gap-4 m-auto col-span-3">
  //       <h1 className="text-2xl text-primary flex gap-2 text-center">
  //
  //       </h1>
  //       <div className="">
  //
  //       </div>
  //     </div>
  //     <div className="flex flex-col items-center gap-4 m-auto col-span-3">
  //       <h1 className="text-2xl text-primary flex gap-2 text-center">
  //
  //       </h1>
  //       <div className="">
  //
  //       </div>
  //     </div>
  //     <SquareImage
  //       className="h-full hidden md:block col-span-2"
  //       src="/about/.jpeg"
  //       alt="image of people gathering"
  //     />
  //   </div>
  // )
}
