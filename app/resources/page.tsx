import { Audio, audios } from '@/util/importAudio'

export default function Resources() {
  return (
    <main className="h-full flex flex-col justify-start items-stretch p-4 gap-2">
      {audios.length > 0 ? (
        audios.map((data, i) => <AudioCard data={data} key={i} />)
      ) : (
        <p className="m-auto">No resources loaded. Check again later!</p>
      )}
    </main>
  )
}

function AudioCard({ data }: { data: Audio }) {
  return (
    <div className="ml-auto mr-auto w-full max-w-2xl shadow-xl rounded-lg p-4 flex gap-2">
      <div>
        <h1>{data.title}</h1>
        {/* <p>{data.date}</p> */}
        <a
          className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          href={data.url}
        >
          Link to YouTube video
        </a>
      </div>
      <div className="ml-auto mt-auto mb-auto">
        <audio controls src={`api/audio?id=${data.id}`}></audio>
      </div>
    </div>
  )
}
