import Image from 'next/image'

export function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-black to-red-700">
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
          <div className="border-2 rounded-lg border-white w-full max-w-24">
            首页
          </div>
          <div className="border-2 rounded-lg border-white w-full max-w-24">
            区域活动
          </div>
          <div className="border-2 rounded-lg border-white w-full max-w-24">
            病友故事
          </div>
          <div className="border-2 rounded-lg border-white w-full max-w-24">
            社区资源
          </div>
          <div className="border-2 rounded-lg border-white w-full max-w-24">
            我们是谁
          </div>
        </div>
        <div className="">
          <div className="flex flex-row items-center rounded-full bg-pink-200">
            <div className="text-xl p-3 pr-0">支持我们</div>
            <Image
              className="border-4 rounded-full p-1 overflow-visible m-1"
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
