import { audioLinks } from '@/instrumentation'

export default function Resources() {
  return (
    <main className="h-full flex flex-col justify-start items-stretch p-4 gap-2">
      {audioLinks.map((data, i) => (
        <VideoCard url={data} key={i} />
      ))}
    </main>
  )
}

function VideoCard({ url }: { url: string }) {
  return (
    <div className="ml-auto mr-auto w-full max-w-xl shadow-xl rounded-lg p-4 flex">
      <div>
        <h1>Video Title</h1>
        <p>date</p>
        <a
          className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          href={url}
        >
          {url}
        </a>
      </div>
      <div>
        <audio controls src="audio/b4-ysCjZFHc.m4a"></audio>
      </div>
    </div>
  )
}
