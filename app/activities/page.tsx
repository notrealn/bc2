'use client'

import { SideSticky } from '@/components/sidesticky'
import Image from 'next/image'
import { useState } from 'react'

const pages: { [key: string]: React.ReactNode } = {
  主愛微信群: (
    <div className="text-center flex flex-col gap-4">
      <h1 className="border-2 rounded-xl w-48 mb-3 mt-3 m-auto text-2xl">
        主愛微信群
      </h1>
      <div className="text-pink-100">
        <p>{'<主愛運動群>'}</p>
        聚會時間：全天24x7，全年 365天
        本群目的是為姐妹們提供一個平臺，堅持運動打卡，減少治療副作用，增強體質，彼此陪伴鼓勵扶持，並且成為別人的祝福
      </div>
      <div className="text-yellow-100">
        <p>{'<主愛重生之旅(三陰)姐妹>'}</p>
        我們的介紹：在生命的風雨中，我們因共同的經歷而相遇——"三陰"的診斷或許曾讓我們迷茫，但主的愛將我們緊密相連。在這裡，我們分享治療路上的點滴，卻不止於醫療交流；我們傾聽彼此的軟弱，更在禱告中彼此攙扶。歡迎加入我們三陰的大家庭，讓我們彼此相愛，共同扶持勉勵，同走這條重生之旅！
      </div>
      <div className="text-pink-100">
        <p>{'<主愛北美西岸群>'}</p>
        我們的特點是群組分享資訊，線下區域聚會多，姐妹們感情深厚。美、加西岸的乳癌姐妹，歡迎加入我們這愛的大家庭，抱團攜手前行，愛來癌去。
        週一美西時間8pm, 禱告會，歡迎上線彼此關懷和禱告。
      </div>
      <div className="text-yellow-100">
        <p>{'<主愛美東北區群>'}</p>
        本群主要服務美東費城以北乳癌姐妹。也歡迎其他區域姐妹參加。
        群裡姐妹各種癌型齊全，很多姐妹已經康復五年以上，經驗豐富，愛心滿滿。姐妹們在群裡分享治療康復經驗，運動健身體會，旅遊觀光美景，種菜養花收穫。
        姐妹們主要參加如下聚會： 美東週四晚上7：45 線上聚會； 每日美東早8：00
        的星光晨禱； 美東時間週六晚上8：00 的查經聚會。 以及不定期的聚餐。
        群裡姐妹彼此關心，互助，也提供一對一輔導，大家接受愛，也付出愛，在愛中得著醫治，建立信心，重獲健康。
        歡迎加入我們！
      </div>
      <div className="text-pink-100">
        <p>{'<中國姐妹聚會愛的家園>'}</p>
        聚會時間：北京:週六(上午)8:30-10:30 AM
        聚會目的是增加彼此瞭解陪伴鼓勵扶持， 因著愛得身心靈的醫治；
        彼此分享，將愛傳遞下去。 聚會主題不限， 比如心靈啟發課程和讀書會，
        查經，國內外姐妹見證，健康分享，線上運動， 國內線下相見。
        歡迎加入我們，讓我們愛來癌去。
      </div>
    </div>
  ),
  主愛聚會: (
    <div className="text-center flex flex-col gap-4">
      <h1 className="border-2 rounded-xl w-48 mb-3 mt-3 m-auto text-2xl">
        主愛聚會
      </h1>
      <div className="text-pink-100">
        <p>{'<主愛姐妹每週相見會>'}</p>
        <div className="flex flex-row w-full justify-center">
          <div>聚會時間：</div>
          <div>
            美東週四(晚上) 7:45 - 9:30 pm
            <br />
            美中週四(晚上) 6:45 - 8:30 pm
            <br />
            美西周四(晚上) 4:45 - 6:30 pm
            <br />
            北京週五(早上) 7:45 - 9:30 am
            <br />
          </div>
        </div>
        提供乳癌姐妹身、心、靈支持的聚會, 陪伴你走過治療、重拾健康!
        每週在”線上”與來自世界各地的乳癌姐妹彼此學習和支持。每次聚會有不同的主題
        ，包含醫療/心理講座、 抗癌故事/詩歌分享、
        中醫調養、運動與營養等，活動後會分小組讓大家吐露心聲、彼此打氣。每週上來，抗癌路上不孤單!
      </div>
      <div className="text-yellow-100">
        <p>{'<主愛查經聚會>'}</p>
        <div className="flex flex-row w-full justify-center">
          <div>聚會時間：</div>
          <div>
            美東週六8pm-9:30pm <br />
            北京週日8am-9:30am <br />
          </div>
        </div>
      </div>
      <div className="text-pink-100">
        <p>{'<基礎神學課程>'}</p>
        <div className="flex flex-row w-full justify-center">
          <div>聚會時間：</div>
          <div>
            美東：週六（晚上）8:00-10:00pm <br />
            中國：週日（早上）8:00-10:00am <br />
          </div>
        </div>
        我們的特點是群組分享資訊，線下區域聚會多，姐妹們感情深厚。美、加西岸的乳癌姐妹，歡迎加入我們這愛的大家庭，抱團攜手前行，愛來癌去。
        週一美西時間8pm, 禱告會，歡迎上線彼此關懷和禱告。
      </div>
    </div>
  ),
}

export default function Activities() {
  const [page, setPage] = useState('主愛微信群')

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
        請聯繫我們，
        <br />
        詢問加入方式
        <Image src="/heart.svg" alt="heart" width={40} height={40} />
      </SideSticky>
      <div className="flex flex-col items-center max-w-lg m-auto grow w-full">
        {pages[page]}
      </div>
    </main>
  )
}
