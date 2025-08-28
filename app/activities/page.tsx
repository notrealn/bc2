'use client'

import { SideSticky } from '@/components/sidesticky'
import Image from 'next/image'
import { useState } from 'react'

const pages: { [key: string]: React.ReactNode } = {
  主爱微信群: (
    <div className="text-center flex flex-col gap-4">
      <h1 className="border-2 rounded-xl w-48 mb-3 mt-3 m-auto text-2xl">
        主爱微信群
      </h1>
      <div className="text-pink-100">
        <p>{'<主爱运动群>'}</p>
        聚会时间：全天24x7，全年 365天
        本群目的是为姐妹们提供一个平台，坚持运动打卡，减少治疗副作用，增强体质，彼此陪伴鼓励扶持，并且成为别人的祝福
      </div>
      <div className="text-yellow-100">
        <p>{'<主爱重生之旅(三阴)姐妹>'}</p>
        我们的介绍：在生命的风雨中，我们因共同的经历而相遇——"三阴"的诊断或许曾让我们迷茫，但主的爱将我们紧密相连。在这里，我们分享治疗路上的点滴，却不止于医疗交流；我们倾听彼此的软弱，更在祷告中彼此搀扶。欢迎加入我们三阴的大家庭，让我们彼此相爱，共同扶持勉励，同走这条重生之旅！
      </div>
      <div className="text-pink-100">
        <p>{'<主爱北美西岸群>'}</p>
        我们的特点是群组分享资讯，线下区域聚会多，姐妹们感情深厚。美、加西岸的乳癌姐妹，欢迎加入我们这爱的大家庭，抱团携手前行，爱来癌去。
        周一美西时间8pm, 祷告会，欢迎上线彼此关怀和祷告。
      </div>
      <div className="text-yellow-100">
        <p>{'<主愛美东北区群>'}</p>
        本群主要服务美东费城以北乳癌姐妹。也欢迎其他区域姐妹参加。
        群里姐妹各种癌型齐全，很多姐妹已经康复五年以上，经验丰富，爱心满满。姐妹们在群里分享治疗康复经验，运动健身体会，旅游观光美景，种菜养花收获。
        姐妹们主要参加如下聚会： 美东周四晚上7：45 线上聚会； 每日美东早8：00
        的星光晨祷； 美东时间周六晚上8：00 的查经聚会。 以及不定期的聚餐。
        群里姐妹彼此关心，互助，也提供一对一辅导，大家接受爱，也付出爱，在爱中得着医治，建立信心，重获健康。
        欢迎加入我们！
      </div>
      <div className="text-pink-100">
        <p>{'<中国姐妹聚会爱的家园>'}</p>
        聚会时间：北京:周六(上午)8:30-10:30 AM
        聚会目的是增加彼此了解陪伴鼓励扶持， 因着爱得身心灵的医治；
        彼此分享，将爱传递下去。 聚会主题不限， 比如心灵启发课程和读书会，
        查经，国内外姐妹见证，健康分享，线上运动， 国内线下相见。
        欢迎加入我们，让我们爱来癌去。
      </div>
    </div>
  ),
  主爱聚会: (
    <div className="text-center flex flex-col gap-4">
      <h1 className="border-2 rounded-xl w-48 mb-3 mt-3 m-auto text-2xl">
        主爱聚会
      </h1>
      <div className="text-pink-100">
        <p>{'<主爱姐妹每周相见会>'}</p>
        <div className="flex flex-row w-full justify-center">
          <div>聚会时间：</div>
          <div>
            美东周四(晚上) 7:45 - 9:30 pm
            <br />
            美中周四(晚上) 6:45 - 8:30 pm
            <br />
            美西周四(晚上) 4:45 - 6:30 pm
            <br />
            北京周五(早上) 7:45 - 9:30 am
            <br />
          </div>
        </div>
        提供乳癌姐妹身、心、灵支持的聚会, 陪伴你走过治疗、重拾健康!
        每周在”线上”与来自世界各地的乳癌姐妹彼此学习和支持。每次聚会有不同的主题
        ，包含医疗/心理讲座、 抗癌故事/诗歌分享、
        中医调养、运动与营养等，活动后会分小组让大家吐露心声、彼此打气。每周上来，抗癌路上不孤单!
      </div>
      <div className="text-yellow-100">
        <p>{'<主爱查经聚会>'}</p>
        <div className="flex flex-row w-full justify-center">
          <div>聚会时间：</div>
          <div>
            美东周六8pm-9:30pm <br />
            北京周日8am-9:30am <br />
          </div>
        </div>
      </div>
      <div className="text-pink-100">
        <p>{'<基础神学课程>'}</p>
        <div className="flex flex-row w-full justify-center">
          <div>聚会时间：</div>
          <div>
            美东：周六（晚上）8:00-10:00pm <br />
            中国：周日（早上）8:00-10:00am <br />
          </div>
        </div>
        我们的特点是群组分享资讯，线下区域聚会多，姐妹们感情深厚。美、加西岸的乳癌姐妹，欢迎加入我们这爱的大家庭，抱团携手前行，爱来癌去。
        周一美西时间8pm, 祷告会，欢迎上线彼此关怀和祷告。
      </div>
    </div>
  ),
}

export default function Activities() {
  const [page, setPage] = useState('主爱微信群')

  return (
    <main className="bg-linear-to-r from-black to-red-700 text-white text-center p-4 h-full flex flex-col md:flex-row w-full">
      <div className="flex-none p-4 text-lg">
        {Object.keys(pages).map((p, i) => (
          <div
            className={page == p ? 'underline' : ''}
            onClick={() => {
              setPage(p)
            }}
            key={i}
          >
            {p}
          </div>
        ))}
      </div>
      <SideSticky src="/stickyNote.svg">
        请联系我们，
        <br />
        询问加入方式
        <Image src="/heart.svg" alt="heart" width={40} height={40} />
      </SideSticky>
      <div className="flex flex-col items-center max-w-lg m-auto grow w-full">
        {pages[page]}
      </div>
    </main>
  )
}
