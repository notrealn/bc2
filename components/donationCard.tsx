export default function DonationCard() {
  return (
    <div className="grid items-center gap-6 rounded-3xl bg-[#fbedef] px-6 py-8 text-[#545454] sm:px-10 md:grid-cols-[.85fr_1.4fr] md:gap-10 md:py-12">
      <div
        className="text-center text-6xl font-bold tracking-tight text-[#6d1ed4] md:flex md:h-full md:items-center md:justify-center md:border-r md:border-[#eab8cc] md:pr-10 md:text-7xl"
        aria-label="Zelle"
      >
        Zelle
      </div>
      <div className="space-y-5">
        <p className="rounded-full bg-[#fbe0e9] px-4 py-3 text-center text-xl text-[#bb426f] sm:text-3xl">
          Zelle ID: <strong className="break-all">gigforever</strong>
        </p>
        <div className="space-y-3 text-base leading-8 sm:text-lg">
          <p>
            请使用您银行的 Zelle 服务，将捐款发送至以上
            ID。转账前，请核对收款人信息。
          </p>
          <p>
            感谢您的支持！如需捐款收据，请将您的姓名、捐款日期及金额发送至{" "}
            <a
              className="break-all text-[#a83c64] underline decoration-[#d99ab1] underline-offset-4 hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4"
              href="mailto:gigforever777@gmail.com"
            >
              gigforever777@gmail.com
            </a>
            。
          </p>
        </div>
      </div>
    </div>
  );
}
