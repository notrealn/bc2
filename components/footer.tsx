import Image from 'next/image'
import Link from 'next/link'
import { FooterBody } from './footerBody'

export function Footer() {
  return (
    <footer>
      <div className="bg-surface-container min-h-16 h-fit flex flex-col justify-center">
        <FooterBody />
      </div>
      <div className="bg-surface text-on-surface p-4 flex flex-row flex-wrap gap-4 justify-between m-2 relative">
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
          {/* <div className="flex flex-row gap-2">
            <div className="bg-pink-500 p-2 rounded-full content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width={24}
                height={24}
              >
                <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#fff"
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                />
              </svg>
            </div>
            <div className="m-auto ml-0">电子邮件：gigforever777@gmail.com</div>
          </div> */}
          <Link className="flex flex-row gap-2" href="/contact-us">
            <div className="bg-linear-to-b from-cyan-300 to-blue-400 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                width={24}
                height={24}
              >
                {/* <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--> */}
                <path
                  fill="#fff"
                  d="M448 112C456.8 112 464 119.2 464 128L464 512C464 520.8 456.8 528 448 528L160 528C151.2 528 144 520.8 144 512L144 128C144 119.2 151.2 112 160 112L448 112zM160 64C124.7 64 96 92.7 96 128L96 512C96 547.3 124.7 576 160 576L448 576C483.3 576 512 547.3 512 512L512 128C512 92.7 483.3 64 448 64L160 64zM304 312C334.9 312 360 286.9 360 256C360 225.1 334.9 200 304 200C273.1 200 248 225.1 248 256C248 286.9 273.1 312 304 312zM272 352C227.8 352 192 387.8 192 432C192 440.8 199.2 448 208 448L400 448C408.8 448 416 440.8 416 432C416 387.8 380.2 352 336 352L272 352zM576 144C576 135.2 568.8 128 560 128C551.2 128 544 135.2 544 144L544 208C544 216.8 551.2 224 560 224C568.8 224 576 216.8 576 208L576 144zM560 256C551.2 256 544 263.2 544 272L544 336C544 344.8 551.2 352 560 352C568.8 352 576 344.8 576 336L576 272C576 263.2 568.8 256 560 256zM576 400C576 391.2 568.8 384 560 384C551.2 384 544 391.2 544 400L544 464C544 472.8 551.2 480 560 480C568.8 480 576 472.8 576 464L576 400z"
                />
              </svg>
            </div>
            <div className="m-auto ml-0">填写联系表，让我们了解你的需要</div>
          </Link>
          <a
            className="flex flex-row gap-2"
            href="https://www.youtube.com/@gigforever777"
          >
            <div className="bg-red-500 p-2 rounded-xl">
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
            </div>
            <div className="m-auto ml-0">查看我们的油管频道</div>
          </a>
        </div>
      </div>
    </footer>
  )
}
