const cardClassName =
  "text-center overflow-hidden rounded-3xl border border-[#f0d5df] bg-[#fbedef] font-semibold text-[#545454]";
const cardGridClassName =
  "grid items-center gap-7 px-6 py-8 sm:px-10 md:grid-cols-[.75fr_1.4fr] md:gap-10 md:py-10";
const cardBrandClassName =
  "text-center md:border-r md:border-[#eab8cc] md:py-8 md:pr-10";
const cardDescriptionClassName = "text-lg leading-8 sm:text-xl";
const cardEnglishDescriptionClassName = "mb-4 text-base leading-7";
const cardInsetClassName =
  "rounded-2xl border border-[#edc6d5] bg-white/70 px-6 py-5";

export function StripeDonationCard({ paymentLink }: { paymentLink: string }) {
  return (
    <section
      aria-labelledby="credit-card-donation-heading"
      className={cardClassName}
    >
      <div className={cardGridClassName}>
        <div className={cardBrandClassName}>
          <h3
            id="credit-card-donation-heading"
            className="text-3xl font-extrabold tracking-tight text-[#a83c64] md:text-4xl"
          >
            信用卡捐款
            <span
              lang="en"
              className="mt-3 block text-base font-bold tracking-widest"
            >
              CREDIT CARD
            </span>
          </h3>
        </div>
        <div className="min-w-0">
          <p className={cardDescriptionClassName}>
            支持 Visa · Mastercard · American Express 等信用卡
          </p>
          <p lang="en" className={cardEnglishDescriptionClassName}>
            Visa · Mastercard · Amex · Apple Pay
          </p>
          <a
            href={paymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${cardInsetClassName} block text-lg font-bold text-[#a83c64] transition-colors hover:bg-white hover:text-[#81284b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a83c64]`}
          >
            <span>立即捐款</span>{" "}
            <span className="inline-flex items-center gap-2 align-middle">
              <span lang="en">Donate Now</span>
              <svg
                aria-hidden="true"
                className="size-5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 6 6 6-6 6" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function DonationCard() {
  return (
    <div lang="zh-Hans" className={cardClassName}>
      <div className={cardGridClassName}>
        <div className={cardBrandClassName}>
          <div className="text-6xl font-extrabold tracking-tight text-[#6d1ed4] md:text-7xl">
            Zelle
          </div>
          <p className="mt-3 text-base tracking-widest text-[#a83c64]">
            让爱与支持同行
          </p>
        </div>
        <div className="min-w-0">
          <p className={cardDescriptionClassName}>
            使用您银行的 Zelle 服务，捐款至以下 ID：
          </p>
          <p lang="en" className={cardEnglishDescriptionClassName}>
            Use your bank&apos;s Zelle service to donate to the following ID.
          </p>
          <div className={cardInsetClassName}>
            <p className="text-base font-bold tracking-wide text-[#a83c64]">
              Zelle ID:
            </p>
            <p className="mt-1 break-all text-3xl font-extrabold tracking-tight text-[#bb426f] sm:text-4xl">
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
            <h3 className="text-xl font-bold text-[#a83c64]">
              正式捐款收据
            </h3>
            <p className="mt-2 text-lg leading-8">
              请在 <span className="font-bold">Memo 栏</span>注明您
              <span className="font-bold">邮寄地址和电子邮件地址</span>
              ，以便寄送正式捐款收据。
            </p>
            <p lang="en" className="mt-1 text-base leading-7">
              Please note your mailing address and email address in the Memo
              section so we can send you an official donation receipt.
            </p>
            <p className="mt-4 text-lg leading-8">
              如有任何疑问，欢迎通过电子邮件联系我们：
            </p>
            <p lang="en" className="text-base leading-7">
              If you have any questions, feel free to contact us by email:
            </p>
            <a
              className="mt-1 inline-block max-w-full break-all rounded-sm text-lg leading-8 text-[#a83c64] underline decoration-[#d99ab1] underline-offset-4 transition-colors hover:text-[#81284b] hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a83c64]"
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
