import { SideSticky } from '@/components/sidesticky'
import { Layout } from '../resourcesLayout'
import Image from 'next/image'

export default function Meetings() {
  return (
    <Layout>
      <SideSticky src="/stickyNote.svg">
        请联系我们<br></br>询问加入方式
        <Image src="/heart.svg" alt="heart" width={40} height={40} />
      </SideSticky>
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-bold text-center w-full">
          主爱姐妹每周相见会
        </div>
        <div className="text-yellow-100 flex flex-col gap-2">
          <div className="flex flex-row m-auto">
            <div>聚会时间：</div>
            <div>
              美东周四(晚上) 7:45 - 9:30 pm <br />
              美中周四(晚上) 6:45 - 8:30 pm <br />
              美西周四(晚上) 4:45 - 6:30 pm <br />
              北京周五(早上) 7:45 - 9:30 am <br />
            </div>
          </div>
          提供乳癌姐妹身、心、灵支持的聚会, 陪伴你走过治疗、重拾健康!
          每周在”线上”与来自世界各地的乳癌姐妹彼此学习和支持。每次聚会有不同的主题
          ，包含医疗/心理讲座、 抗癌故事/诗歌分享、
          中医调养、运动与营养等，活动后会分小组让大家吐露心声、彼此打气。每周上来，抗癌路上不孤单!
        </div>
      </div>
    </Layout>
  )
}
