import { audios } from '@/util/importAudio'
import { AudioCard } from '../../components/audioCard'

export default function Resources() {
  const years = Array.from(
    new Set(audios?.stories?.map((audio) => audio.date.slice(0, 4)))
  )

  years.sort()

  return (
    <main className="flex flex-col md:flex-row justify-around max-w-4xl m-auto mt-4">
      {audios?.stories?.length == 0 ? null : (
        <div className="flex flex-row justify-center md:justify-start md:flex-col gap-2">
          {years.map((year, i) => (
            <a href={`#${year}`} key={i} className="text-lg underline">
              {year}
            </a>
          ))}
        </div>
      )}
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
          <p className="m-auto">No resources loaded. Check again later!</p>
        )}
      </div>
    </main>
  )
}
