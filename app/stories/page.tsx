import { SideSticky } from '@/components/sidesticky'
import { AudioCard } from '../../components/audioCard'
import { getCachedAudio } from '../api/audio/getCachedAudio'

const audios = await getCachedAudio()

export default function Resources() {
  const years = Array.from(
    new Set(audios?.stories?.map((audio) => audio.date.slice(0, 4)))
  )

  years.sort()

  return (
    <main className="bg-linear-to-r from-black to-red-700 size-full">
      <div className="flex flex-col md:flex-row justify-around max-w-4xl m-auto mt-0 pt-4">
        {audios?.stories?.length == 0 ? null : (
          <div className="flex flex-row justify-center md:justify-start md:flex-col gap-2">
            {years.map((year, i) => (
              <a href={`#${year}`} key={i} className="text-lg underline">
                {year}
              </a>
            ))}
          </div>
        )}
        <SideSticky src="/fruitSticky.svg" size={200}>
          <div className="p-8 pt-16 text-sm size-full m-auto">
            视频内容仅供参考，
            <br />
            不能作为医疗建议。
            <br />
            关于您的个人健康状况，请务必遵从主治医生的专业指导。
          </div>
        </SideSticky>
        <div className="h-full flex flex-col justify-start items-stretch p-4 gap-2">
          {audios?.stories?.length > 0 ? (
            audios.stories
              .sort((a, b) => parseInt(a.date) - parseInt(b.date))
              .map((data, i) => (
                <AudioCard
                  data={data}
                  key={i}
                  id={
                    i == 0 || (i > 0 && audios.stories[i - 1].id != data.id)
                      ? data.date.slice(0, 4)
                      : undefined
                  }
                />
              ))
          ) : (
            <p className="m-auto text-white">
              No resources loaded. Check again later!
            </p>
          )}
        </div>
      </div>
    </main>
  )
}
