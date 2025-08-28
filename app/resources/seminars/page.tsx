import { AudioCard } from '@/components/audioCard'
import { Layout } from '../resourcesLayout'
import { getCachedAudio } from '@/app/api/audio/getCachedAudio'
import { SideSticky } from '@/components/sidesticky'

const audios = await getCachedAudio()

export default function Meetings() {
  return (
    <Layout>
      <SideSticky src="/fruitSticky.svg" size={200}>
        <div className="p-8 pt-16 text-sm size-full m-auto">
          视频内容仅供参考，
          <br />
          不能作为医疗建议。
          <br />
          关于您的个人健康状况，请务必遵从主治医生的专业指导。
        </div>
      </SideSticky>
      <div className="flex flex-col">
        {!!audios?.seminars?.length || (
          <div className="w-full text-center">No audios at this time.</div>
        )}
        {audios?.seminars?.map((data, i) => <AudioCard data={data} key={i} />)}
      </div>
    </Layout>
  )
}
