export default function Resources() {
  return (
    <main className="bg-surface text-on-surface mt-6 p-2">
      <div className="flex flex-col gap-4 max-w-2xl ml-auto mr-auto">
        <h1 className="text-xl font-bold">美國乳癌資源網站</h1>
        <Link
          label="National Cancer Institution"
          href="https://www.nih.gov/about-nih/nih-almanac/national-cancer-institute-nci"
        />
        <Link label="BREASTCANCER.ORG" href="https://www.breastcancer.org" />
        <Link label="Susan G. Komen" href="https://www.komen.org/" />
        <Link
          label="Lobular Breast Cancer Alliance 小葉乳腺癌聯盟"
          href="https://cchclacancer.org/"
        />
        <Link
          label="南加州角聲癌症協會"
          href="https://www.nih.gov/about-nih/nih-almanac/national-cancer-institute-nci"
        />
        <Link
          label="您在寻找并愿意参与可能有帮助的乳腺癌临床验证吗？请点击这个链接查询："
          href="https://clinicaltrials.gov/search?cond=Breast%20Cancer&aggFilters=status:not%20rec"
        />
        <Link
          label="您对自己使用的药物想了解更多的疗效或副反应方面的信息吗？请点击这个链接："
          href="https://www.fda.gov/drugs/laws-acts-and-rules/fdas-labeling-resources-human-prescription-drugs"
        />
      </div>
    </main>
  )
}

function Link({ label, href }: { label: string; href: string }) {
  return (
    <div className="flex flex-row flex-wrap horizon">
      <div className="mr-4">{label}</div>
      <a className="underline text-blue-400" href={href}>
        {href}
      </a>
    </div>
  )
}
