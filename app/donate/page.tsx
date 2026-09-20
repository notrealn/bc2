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
          alt="佩戴粉红丝带的女士与陪伴者温暖地握着手"
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
            在爱里彼此陪伴，陪伴华人乳腺癌患者及家人
            <br className={styles.desktopBreak} />
            走过每一个艰难时刻。
          </p>
        </div>
      </section>
      <section className={styles.support} aria-labelledby="support-heading">
        <div aria-hidden="true" className={styles.heart}>
          ♡
        </div>
        <h2 id="support-heading" className={styles.supportHeading}>
          支持 GIG Forever
        </h2>
        <DonationCard />
        <div className={styles.closing}>
          <div aria-hidden="true" className={styles.divider}>
            ♥
          </div>
          <div className={styles.brand}>
            <Image src="/main-icon.png" alt="" width={66} height={80} />
            <div>
              GIG FOREVER<span>主爱粉丝团</span>
            </div>
          </div>
          <p>
            以关怀与陪伴，为华人乳腺癌患者及家人
            <br />
            带来支持、力量与盼望。
          </p>
        </div>
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
