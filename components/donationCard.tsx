export default function DonationCard() {
  return (
    <div
      lang="zh-Hans"
      className="text-center overflow-hidden rounded-3xl border border-[#f0d5df] bg-[#fbedef] text-[#545454]"
    >
      <div className="grid items-center gap-7 px-6 py-8 sm:px-10 md:grid-cols-[.75fr_1.4fr] md:gap-10 md:py-10">
        <div className="text-center md:border-r md:border-[#eab8cc] md:py-8 md:pr-10">
          <div className="text-6xl font-bold tracking-tight text-[#6d1ed4] md:text-7xl">
            Zelle
          </div>
          <p className="mt-3 text-base tracking-widest text-[#a83c64]">
            让爱与支持同行
          </p>
        </div>
        <div className="min-w-0">
          <p className="mb-4 text-lg leading-8 sm:text-xl">
            使用您银行的 Zelle 服务，捐款至以下 ID：
          </p>
          <div className="rounded-2xl border border-[#edc6d5] bg-white/70 px-6 py-5">
            <p className="text-base font-medium tracking-wide text-[#a83c64]">
              Zelle ID:
            </p>
            <p className="mt-1 break-all text-3xl font-bold tracking-tight text-[#bb426f] sm:text-4xl">
              gigforever
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-[#f0d5df] bg-white/45 px-6 py-6 sm:px-10">
        <div className="flex flex-col items-center gap-3">
          <span
            className="hidden size-10 shrink-0 items-center justify-center rounded-full bg-[#fbe0e9] text-[#a83c64] sm:flex"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="size-5"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path
                d="m4 7 8 6 8-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="min-w-0" lang="zh-Hans">
            <h3 className="text-xl font-semibold text-[#a83c64]">
              正式捐款收据
            </h3>
            <p className="mt-2 text-lg leading-8">
              请在 <span className="font-semibold">Memo 栏</span>注明您
              <span className="font-semibold">家里的地址和邮寄地址</span>
              ，以便寄送正式捐款收据。
            </p>
            <p className="mt-4 text-lg leading-8">
              如有任何疑问，欢迎通过电子邮件联系我们：
            </p>
            <a
              className="mt-1 inline-block max-w-full break-all rounded-sm text-lg font-medium leading-8 text-[#a83c64] underline decoration-[#d99ab1] underline-offset-4 transition-colors hover:text-[#81284b] hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a83c64]"
              href="mailto:gigforever777@gmail.com"
            >
              gigforever777@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
