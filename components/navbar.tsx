'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function NavBar() {
  return (
    <nav className="p-2 pl-4 pr-4 bg-surface-container text-on-surface-container flex flex-row items-center lg:items-center flex-wrap gap-4 drop-shadow z-10">
      <div className="flex">
        <Image
          className=""
          src="/main-icon.png"
          alt="website icon"
          width={80}
          height={80}
        />
        <div className="flex flex-col justify-evenly text-primary">
          <div className="text-xl">主爱粉丝团</div>
          <div>GIG FOREVER</div>
        </div>
      </div>

      <label className="peer ml-auto lg:hidden size-8">
        <input className="peer hidden" type="checkbox" defaultChecked={true} />
        <svg
          className="peer-checked:hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          {/*<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->*/}
          <path
            fill="#000"
            d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
          />
        </svg>
        <svg
          className="hidden peer-checked:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
          <path
            fill="#000"
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
          />
        </svg>
      </label>

      <div className="grow hidden peer-has-checked:flex peer-has-checked:flex-col peer-has-checked:w-full lg:flex lg:!flex-row lg:!w-fit">
        <div className="flex flex-col lg:flex-row lg:items-center p-4 gap-4 mr-auto">
          <PageLink text="首页" href="/" />
          <DropDown
            label="认识我们"
            href="/about"
            options={[
              { text: '给第一次來的你', href: '/about/first' },
              { text: '使命和团队', href: '/about/mission' },
              { text: '缘起和历史', href: '/about/history' },
            ]}
          />
          <DropDown
            label="癌友服务"
            href="/services"
            options={[
              { text: '癌友互助微信群', href: '/services/wechat' },
              { text: '线上癌友会', href: '/services/online' },
              { text: '实体癌友会', href: '/services/in-person' },
              { text: '医疗心理讲座', href: '/services/lectures' },
            ]}
          />
          <DropDown
            label="癌友园地"
            href="/patients"
            options={[
              { text: '癌友互助微信群', href: '/patients/testimonials' },
              { text: '线上癌友会', href: '/patients/creations' },
            ]}
          />
          <PageLink text="社区资源" href="/resources" />
          <PageLink text="联系我们" href="/contact-us" />
        </div>

        <div className="flex p-2 gap-4 lg:p-0 lg:ml-auto">
          <SupportUs />
        </div>
      </div>
    </nav>
  )
}

function DropDown({
  label,
  href,
  options,
}: {
  label: string
  href: string
  options: { text: string; href: string }[]
}) {
  const path = usePathname()

  return (
    <div className="group relative cursor-pointer py-1">
      <div className="text-xl flex items-center">
        <div
          className={
            href !== '/' && path.startsWith(href) ? 'text-primary' : ''
          }
        >
          {label}
        </div>
        <svg
          className="w-5 h-5 ms-1.5 -me-0.5 stroke-primary"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="#eb6695"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="m19 9-7 7-7-7"
          />
        </svg>
      </div>

      <div className="z-10 hidden absolute group-hover:flex flex-col bg-surface-container-lowest text-on-surface-container text-center rounded-xl w-max p-2 gap-2 mt-1">
        {options.map(({ text, href }, i) => (
          <Link href={href} key={i}>
            {text}
          </Link>
        ))}
      </div>
    </div>
  )
}

function PageLink({ text, href }: { text: string; href: string }) {
  const path = usePathname()

  return (
    <Link
      className={`text-xl ${(href === '/' && path == href) || (href !== '/' && path.startsWith(href)) ? 'text-primary' : ''}`}
      href={href}
    >
      {text}
    </Link>
  )
}

function SupportUs() {
  return (
    <Link
      href="https://www.cchcla.org/donation/gigforever/"
      className="flex flex-row items-center rounded-3xl bg-primary text-on-primary shadow-lg w-fit"
    >
      <div className="text-xl p-3 pr-0">支持我们</div>
      <Image
        className="p-2 overflow-visible m-2"
        src="/support-us.svg"
        alt="support us!"
        width={48}
        height={48}
      />
    </Link>
  )
}
