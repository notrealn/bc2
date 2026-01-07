import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-surface text-on-surface p-4 flex flex-row flex-wrap gap-4 justify-between m-2 relative">
      <div className="mt-auto text-center">
        <div className="flex flex-row flex-initial">
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
      </div>
      <div className="flex flex-col gap-2 text-left ml-auto border-surface-container border-l-4 pl-4">
        <h1 className="text-xl font-bold">联系我们</h1>
        <div className="flex flex-row gap-2">
          <div className="bg-pink-500 p-2 rounded-full content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width={24}
              height={24}
            >
              {/*<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->*/}
              <path
                fill="#fff"
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
              />
            </svg>
          </div>
          <div className="m-auto ml-0">电子邮件：gigforever777@gmail.com</div>
        </div>
        <div className="flex flex-row gap-2">
          <a
            href="https://www.youtube.com/@gigforever777"
            className="bg-red-500 p-2 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width={24}
              height={24}
            >
              {/*<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->*/}
              <path
                fill="#fff"
                d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
              />
            </svg>
          </a>
          <div className="m-auto ml-0">查看我们的油管频道</div>
        </div>
      </div>
    </footer>
  )
}
