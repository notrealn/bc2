import { SideSticky } from '@/components/sidesticky'
import Image from 'next/image'

export default function About() {
  return (
    <main className="bg-linear-to-r from-black to-red-700 text-white text-center p-4 h-full flex flex-col md:flex-row w-full">
      <div className="flex-none p-4 text-lg">
        <div>我们的故事</div>
        <div className="underline">我们的活动</div>
      </div>
      <SideSticky src="/stickyNote.svg">
        请联系我们<br></br>询问加入方式
        <Image src="/heart.svg" alt="heart" width={40} height={40} />
      </SideSticky>
      <div className="flex flex-col items-center max-w-lg m-auto grow w-full">
        <h1 className="border-2 rounded-xl w-32 mb-3">主爱聚会</h1>
        <div className="flex flex-col w-full gap-2">
          <TableRow a="主爱周四聚会" b="美东 7:45 PM / 北京 7:45 AM (周五)" />
          <TableRow
            a="主爱周六基础神学聚会"
            b="美东 7:30PM / 北京 7:30 AM (周日)"
          />
          <TableRow a="爱家园周五聚会" b="美东 7:30PM / 北京 7:30PM (周六)" />
          <TableRow a="周六查经" b="美东 8:00 PM / 北京 8:00 AM (周日)" />
          <TableRow
            a="靠主喜乐三阴周五聚会"
            b="美东5:30PM /美西2:30PM/芝加哥4:30PM"
          />
          <TableRow
            a="北美西岸群周一聚会"
            b="美西  7: 50PM北京10:50 AM (周二)"
          />
          <TableRow a="美东晨祷 " b="每日 美东 8:00 AM / 北京 8:00 PM" />
          <TableRow a="美西晨祷 " b="每日 美西  8:25-9:00 AM (周一至周五)" />
          <TableRow a="BSF查经" b="暑期放假中，9月份通知zoom和时间" />
        </div>
        <h1 className="border-2 rounded-xl w-32 mb-3 mt-3">主爱微信群</h1>
        <div className="flex flex-col w-full gap-2 text-left">
          <div>北美西岸群 负责同工: EC/依娟</div>
          <div>加拿大群 负责同工: 小爱/宝华/仰望/Hope</div>
          <div>重生之旅三阴群 负责同工/义工: 玉燕/Charlene/郁琼</div>
          <div>三阳/Her2群 负责同工: Charlene/Grace</div>
          <div>运动组长群 负责同工: Melissa</div>
          <div>葡萄园汤群 负责同工: Charlene/杨华</div>
          <div>美中群 负责同工: Carol/Annie</div>
          <div>重建群 负责同工: 淑涵</div>
          <div>美东北区群 负责同工：孟哲/杨华/美娟</div>
          <div>中国爱的家园群 负责同工: 小爱/玲/Charlene/卡乐/玉燕</div>
          <div>美东南区群 负责义工/同工： Helen/美娟/Julie/青翠</div>
          <div>背经群 负责同工: 淑涵</div>
        </div>
      </div>
    </main>
  )
}

function TableRow({ a, b }: { a: string; b: string }) {
  return (
    <div className="flex flex-row gap-2">
      <Image
        src="/flower.webp"
        width={10}
        height={10}
        alt="flower"
        className="object-contain"
      />
      <div className="text-left">{a}</div>
      <div className="text-right ml-auto">{b}</div>
    </div>
  )
}
