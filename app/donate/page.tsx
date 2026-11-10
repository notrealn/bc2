import type { Metadata } from "next";
import Image from "next/image";
import DonationCard from "@/components/donationCard";
import styles from "./donate.module.css";

export const metadata: Metadata = {
  title: "支持我们 | GIG FOREVER",
  description: "通过 Zelle 支持 GIG Forever，陪伴华人乳腺癌患者及家人。",
};

export default function DonatePage() {
  return (
    <main lang="zh-Hans" className={styles.page}>
      <section className={styles.hero} aria-labelledby="donation-title">
        <Image
          src="/donation/banner.jpeg"
          alt="佩戴粉红丝带的女士与陪伴者温暖地握著手"
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className={styles.banner}
        />
        <div className={styles.heroContent}>
          <div className={styles.brand}>
            <Image src="/main-icon.png" alt="" width={76} height={90} />
            <div>
              GIG FOREVER<span>主爱粉丝团</span>
            </div>
          </div>
          <h1 id="donation-title">
            爱来癌去
            <br />
            一路同行
            <span aria-hidden="true" className={styles.outlineHeart}>
              ♡
            </span>
          </h1>
          <p>
            在爱里彼此陪伴，
            <br className={styles.desktopBreak} />
            陪伴癌友及家人走过每一个艰难时刻。
          </p>
        </div>
      </section>
      <section className={styles.support} aria-labelledby="support-heading">
        <div aria-hidden="true" className={styles.heart}>
          ♡
        </div>
        <h2 id="support-heading" className={styles.supportHeading}>
          支持主爱粉丝团的姐妹
        </h2>
        <DonationCard />
        <p className="mt-4 flex items-center justify-center gap-3 rounded-2xl border border-[#f0d5df] bg-[#fbedef] px-4 py-3 text-center text-base font-semibold text-[#a83c64] sm:text-lg">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="size-6 shrink-0"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 10h18m-14 5h3" strokeLinecap="round" />
          </svg>
          <span>信用卡捐款通道正在建设中，敬请期待！</span>
        </p>
        <section className={styles.funds} aria-labelledby="funds-heading">
          <h2 id="funds-heading" className={styles.fundsHeading}>
            <span aria-hidden="true">♥</span>
            <span className={styles.fundsRibbon}>我们的资金用途</span>
            <span aria-hidden="true">♥</span>
          </h2>
          <div className={styles.fundsGrid}>
            <div className={styles.fundItem}>
              <span className={styles.fundIcon} aria-hidden="true">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 10c-4-9 12-9 8 0-2 5-7 12-12 17M20 10c-1-3-2-4-4-4s-3 1-4 4c2 5 7 12 12 17" />
                </svg>
              </span>
              <h3>A. 使命与患者支持</h3>
              <p>
                提供项目与资源支持
                <br />
                陪伴姐妹走过每一个挑战
              </p>
            </div>
            <div className={styles.fundItem}>
              <span className={styles.fundIcon} aria-hidden="true">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="16" cy="7" r="3" />
                  <circle cx="6" cy="11" r="2.5" />
                  <circle cx="26" cy="11" r="2.5" />
                  <path d="M2 25v-6a4 4 0 0 1 6-3M30 25v-6a4 4 0 0 0-6-3M10 17v-1a6 6 0 0 1 12 0v1M16 28l-6-6c-4-5 3-9 6-4 3-5 10-1 6 4Z" />
                </svg>
              </span>
              <h3>B. 志愿者发展与关怀</h3>
              <p>
                招募、培训与关怀志愿者
                <br />
                共建温暖团队
              </p>
            </div>
            <div className={styles.fundItem}>
              <span className={styles.fundIcon} aria-hidden="true">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 7H6v22h20V7h-5M11 4h10v6H11Z M16 24l-5-5c-3-4 2-7 5-3 3-4 8-1 5 3Z" />
                </svg>
              </span>
              <h3>C. 行政与运营</h3>
              <p>
                支持组织日常运作
                <br />
                与管理
              </p>
            </div>
          </div>
        </section>
        <footer className={styles.donationFooter} lang="zh-Hans">
          <div className={styles.nonprofitNotice}>
            <span aria-hidden="true">♥</span>
            <p>
              GIGFOREVER.ORG 为美国 501(c)(3) 非营利组织，
              <br />
              您的捐款可依法享有美国税务抵扣，并将提供正式捐款收据。
            </p>
            <span aria-hidden="true">♥</span>
          </div>
          <div className={styles.footerDetails}>
            <a href="https://gigforever.org" className={styles.footerWebsite}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <ellipse cx="12" cy="12" rx="4" ry="10" />
                <path d="M2 12h20M4 6.5h16M4 17.5h16" />
              </svg>
              gigforever.org
            </a>
            <p className={styles.footerOrganization}>
              GIG Forever · 主爱粉丝团
            </p>
            <p className={styles.footerRegistration}>
              501(c)(3) Nonprofit Organization
              <br />
              EIN: 41-4390724
            </p>
          </div>
        </footer>
      </section>
      <svg
        className={styles.waves}
        viewBox="0 0 1200 130"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 5 Q600 230 1200 5 V130 H0Z" fill="#fbe0e8" />
        <path
          d="M0 45 Q550 205 1200 30 V130 H0Z"
          fill="#f8cbdc"
          opacity=".65"
        />
        <path
          d="M0 90 Q650 160 1200 65 V130 H0Z"
          fill="#f5bdd3"
          opacity=".45"
        />
      </svg>
    </main>
  );
}
