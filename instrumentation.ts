// import { access } from 'fs/promises'
import { create } from 'youtube-dl-exec'
// const youtubeDl = require('youtube-dl-exec')

const ytdl = create(
  __dirname + '/../../node_modules/youtube-dl-exec/bin/yt-dlp'
)
// const ytdl = youtubeDl

export const audioLinks = [
  'https://youtu.be/b4-ysCjZFHc',
  //   'https://www.youtube.com/watch?v=SaVrsSzAai4',
]

const audioPath = __dirname + '/public/audio'
const audioFormat = 'm4a'

// export type Audio = { title: string; date: string; link: string; path: string }
// export const audioData: Audio[] = []

export async function register() {
  for (const link of audioLinks) {
    console.log(`starting ${link}`)
    try {
      const metadata = await ytdl(link, {
        dumpJson: true,
        skipDownload: true,
        //   cookies: './cookies.txt',
      })
      console.log(
        await ytdl(link, {
          output: '%(id)s.%(ext)s',
          paths: audioPath,
          extractAudio: true,
          // cookies: './cookies.txt',
          audioFormat: audioFormat,
        })
      )
    } catch (err) {
      console.log(JSON.stringify(err))
    }
  }
}
