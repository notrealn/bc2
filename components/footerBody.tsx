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
              我们最想传递的祝福“爱来癌去”，不是说癌症会凭空消失，而是说：爱能把恐惧慢慢带走,
              爱能在治疗中 带来力量,
              爱能让我们重新找回笑声。癌症的确可怕。但当一个人不再孤单时，它就没有那么可怕了。
              在这里，我们听你、陪你、理解你, 因为我们走过一样的路。
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
          更多抗癌故事, 请点这个链接
        </a>
      )
  }
}
