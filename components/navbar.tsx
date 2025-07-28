'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

export function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-black to-red-700 pl-4 pr-4">
      <div className="flex flex-row justify-between items-center flex-wrap p-2 gap-3">
        <div className="flex flex-row flex-initial">
          <Image
            className=""
            src="/main-icon.png"
            alt="website icon"
            width={80}
            height={80}
          />
          <div className="flex flex-col justify-evenly text-white">
            <div className="text-xl">主爱粉丝团</div>
            <div>GIG FOREVER</div>
          </div>
        </div>
        <label className="peer lg:hidden size-8">
          <input className="peer hidden" type="checkbox" />
          {/* <div className="bg-black size-full"></div> */}
          <svg
            className="peer-checked:hidden"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            {/*<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->*/}
            <path
              fill="#fff"
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
              fill="#fff"
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            />
          </svg>
        </label>

        <div className="hidden lg:flex peer-has-[:checked]:flex flex-row grow items-center peer-has-[:checked]:flex-col peer-has-[:checked]:items-start peer-has-[:checked]:w-full gap-3">
          <PageLink text="首页" href="/" />
          <PageLink text="区域活动" href="/todo" />
          <PageLink text="病友故事" href="/stories" />
          <PageLink text="社区资源" href="/todo" />
          <PageLink text="我们是谁" href="/about" />
          <PageLink text="联系我们" href="/contact-us" />
          <SupportUs />
        </div>
      </div>
    </nav>
  )
}

function PageLink({ text, href }: { text: string; href: string }) {
  return (
    <a
      className={`border-2 rounded-lg w-full max-w-24 text-center text-white border-white ${usePathname() === href ? 'bg-white/20' : ''}`}
      href={href}
    >
      {text}
    </a>
  )
}

function SupportUs() {
  return (
    <div className="flex flex-row items-center rounded-full bg-pink-200 shadow-lg lg:ml-auto">
      <div className="text-xl p-3 pr-0">支持我们</div>
      <Image
        className="border-4 border-pink-200 bg-pink-200 rounded-full p-1 overflow-visible m-1 shadow-xl"
        src="/support-us.svg"
        alt="support us!"
        width={48}
        height={48}
      />
    </div>
  )
}
