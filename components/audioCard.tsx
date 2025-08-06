'use client'

import { useState } from 'react'
import { Audio } from '@/app/api/audio/getCachedAudio'

export function AudioCard({ data, id }: { data: Audio; id?: string }) {
  const [showAudio, setShowAudio] = useState(false)

  return (
    <div
      className="ml-auto mr-auto w-full max-w-2xl shadow-md rounded-lg p-4 flex gap-4 bg-white text-black"
      id={id}
    >
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
        {showAudio ? (
          <audio controls src={`/api/audio?id=${data.id}`} />
        ) : (
          <button
            className="bg-gray-200 p-2 rounded-md mt-auto mb-auto min-w-24"
            onClick={() => setShowAudio(true)}
          >
            播放音频
          </button>
        )}
      </div>
    </div>
  )
}
