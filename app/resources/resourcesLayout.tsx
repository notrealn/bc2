import { Link } from './resourcesLink'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-gradient-to-r from-black to-red-700 text-white size-full">
      <div className="flex flex-col md:flex-row max-w-3xl m-auto gap-4">
        <div className="flex flex-row md:flex-col flex-wrap text-lg min-w-20 gap-2 justify-center">
          <Link label="周四聚会" href="/resources/meetings" />
          <Link label="医疗讲座" href="/resources/seminars" />
          <Link label="婚姻家庭" href="/todo" />
          <Link label="中医调理" href="/todo" />
          <Link label="运动护理" href="/todo" />
          <Link label="其他网站" href="/todo" />
        </div>
        <div className="p-4">{children}</div>
      </div>
    </main>
  )
}
