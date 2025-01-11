'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

export function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-black to-red-700 pl-4 pr-4">
      <div className="flex flex-row justify-between items-center flex-wrap p-2">
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
        <div className="flex flex-row gap-3 p-3 grow text-white text-center max-md:p-0 max-md:w-screen max-md:justify-center max-md:order-last">
          <PageLink text="首页" href="/" />
          <PageLink text="区域活动" href="/todo" />
          <PageLink text="病友故事" href="/todo" />
          <PageLink text="社区资源" href="/todo" />
          <PageLink text="我们是谁" href="/todo" />
        </div>
        <div className="">
          <div className="flex flex-row items-center rounded-full bg-pink-200 shadow-lg">
            <div className="text-xl p-3 pr-0">支持我们</div>
            <Image
              className="border-4 border-pink-200 bg-pink-200 rounded-full p-1 overflow-visible m-1 shadow-xl"
              src="/support-us.svg"
              alt="support us!"
              width={48}
              height={48}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

function PageLink({ text, href }: { text: string; href: string }) {
  return (
    <a
      className={`border-2 rounded-lg w-full max-w-24 border-white ${usePathname() === href ? 'bg-white/20' : ''}`}
      href={href}
    >
      {text}
    </a>
  )
}
