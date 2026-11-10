'use client'

import { usePathname } from 'next/navigation'

export function FooterBody() {
  const path = usePathname()
  console.log(path)
  switch (path) {
    case '/':
      return (
        <div className="bg-surface-container pt-4 pb-4 drop-shadow-md">
          <div className="text-center p-4 [border-image:url(/home/vines.png)_45_0_/_20px_0px_repeat] border-0 border-t-[20px] border-b-[20px]">
            <div className="m-auto max-w-2xl">
              我們最想傳遞的祝福“愛來癌去”，不是說癌症會憑空消失，而是說：愛能把恐懼慢慢帶走,
              愛能在治療中 帶來力量,
              愛能讓我們重新找回笑聲。癌症的確可怕。但當一個人不再孤單時，它就沒有那麼可怕了。
              在這裡，我們聽你、陪你、理解你, 因為我們走過一樣的路。
            </div>
          </div>
        </div>
      )
    case '/patients/testimonies':
      return (
        <a
          className="flex items-center mx-auto"
          href="https://youtube.com/playlist?list=PL5NWTqwwolFq1gtyqgnFtskxwFrDiP6yW"
        >
          <div className="text-4xl p-2">👉</div>
          更多抗癌故事, 請點這個鏈接
        </a>
      )
  }
}
