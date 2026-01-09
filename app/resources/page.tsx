export default function Resources() {
  return (
    <main className="bg-surface text-on-surface mt-6 p-2">
      <div className="flex flex-col gap-4 max-w-2xl ml-auto mr-auto">
        <Header>美國乳癌資源網站</Header>
        <ResourceLink
          label="National Cancer Institution"
          href="https://www.nih.gov/about-nih/nih-almanac/national-cancer-institute-nci"
        />
        <ResourceLink
          label="BREASTCANCER.ORG"
          href="https://www.breastcancer.org"
        />
        <ResourceLink label="Susan G. Komen" href="https://www.komen.org/" />
        <ResourceLink
          label="Lobular Breast Cancer Alliance 小葉乳腺癌聯盟"
          href="http://lobularbreastcancer.org"
        />
        <ResourceLink
          label="南加州角聲癌症協會"
          href="https://cchclacancer.org/"
        />
        <ResourceLink
          prelabel="您在寻找并愿意参与可能有帮助的乳腺癌临床验证吗？"
          label="请点击这个链接查询"
          href="https://clinicaltrials.gov/search?cond=Breast%20Cancer&aggFilters=status:not%20rec"
        />
        <ResourceLink
          prelabel="您对自己使用的药物想了解更多的疗效或副反应方面的信息吗？"
          label="请点击这个链接"
          href="https://www.fda.gov/drugs/laws-acts-and-rules/fdas-labeling-resources-human-prescription-drugs"
        />
        <div>或者，直接在Google 搜索： 药物名 + FDA labeling</div>
        <Header>中国乳癌资源网站</Header>
        <ResourceLink
          label="Angel Care上海粉紅天使癌症病友關愛中心"
          href="http://www.angelcarecn.org/backend/web/index.php"
        />
      </div>
    </main>
  )
}

function Header({ children }: { children: string }) {
  return <h1 className="text-2xl font-bold text-primary mx-auto">{children}</h1>
}

function ResourceLink({
  prelabel,
  label,
  href,
}: {
  prelabel?: string
  label: string
  href: string
}) {
  return (
    <div className="flex flex-row flex-wrap horizon">
      {prelabel ? <div className="mr-3">{prelabel}</div> : ''}
      <a className="underline text-blue-400" href={href}>
        {label}
      </a>
    </div>
  )
}
