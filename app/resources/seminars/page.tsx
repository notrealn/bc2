import { AudioCard } from '@/components/audioCard'
import { Layout } from '../resourcesLayout'
import { audios } from '@/util/importAudio'

export default function Meetings() {
  return (
    <Layout>
      <div className="flex flex-col">
        {!!audios?.seminars?.length || (
          <div className="w-full text-center">No audios at this time.</div>
        )}
        {audios?.seminars?.map((data, i) => <AudioCard data={data} key={i} />)}
      </div>
    </Layout>
  )
}
