import { Audio } from '@/app/api/audio/getCachedAudio'
import fs from 'fs/promises'
import path from 'path'
import { create, Payload } from 'youtube-dl-exec'

const ytdl = create(
  path.resolve('.', 'node_modules/youtube-dl-exec/bin/yt-dlp')
)
const audioPath = path.resolve('.', 'public/audio')
const jsonPath = path.resolve('.', 'public/audio/audio.json')
const cookiesPath = path.resolve('.', 'cookies.txt')
const audioLinks = {
  stories: [
    // 'https://www.youtube.com/playlist?list=PL5NWTqwwolFpAurCIFfpj2oDuEYPeW1vH', // short
    'https://youtube.com/playlist?list=PL5NWTqwwolFq1gtyqgnFtskxwFrDiP6yW',
  ],
  seminars: ['https://youtu.be/JimW9Yg4gsc'],
}

let audios: { [id: string]: Audio[] } = {}

try {
  await fs.access(jsonPath)

  audios = await readAudioFile()

  // if (audios.length < audioLinks.length) throw 'bruh'

  console.log(
    `loaded ${Object.values(audios).reduce((acc, audio) => acc + audio.length, 0)} audios`
  )
} catch (_) {
  audios = {}

  for (const [id, links] of Object.entries(audioLinks)) {
    audios[id] = []

    for (const link of links) {
      try {
        console.log(`starting ${link}`)

        if (link.includes('playlist')) {
          console.log('is a playlist')
          const metametadata = await ytdl(link, {
            skipDownload: true,
            dumpSingleJson: true,
          })

          const entries = (metametadata as any).entries as Payload[]

          for (const entry of entries) {
            await downloadVideo(entry.webpage_url)
            audios[id].push({
              title: entry.title,
              date: entry.upload_date,
              id: entry.id,
              url: entry.webpage_url,
            })
          }
        } else {
          const metadata = await getMetadata(link)
          audios[id].push({
            title: metadata.title,
            date: metadata.upload_date,
            id: metadata.id,
            url: metadata.webpage_url,
          })
          // console.log(audios)
          await downloadVideo(link, true)
        }
      } catch (err) {
        console.log(`err ${JSON.stringify(err)} when downloading ${link}`)
      }
    }
  }

  fs.writeFile(jsonPath, JSON.stringify(audios))
}

export async function readAudioFile() {
  return JSON.parse(await fs.readFile(jsonPath, { encoding: 'utf-8' })) as {
    [id: string]: Audio[]
  }
}

async function getMetadata(link: string) {
  return (await ytdl(link, {
    dumpJson: true,
    skipDownload: true,
    cookies: cookiesPath,
  })) as Payload
}

async function downloadVideo(link: string, log?: boolean) {
  const output = await ytdl(link, {
    output: '%(id)s.%(ext)s',
    paths: audioPath,
    extractAudio: true,
    cookies: cookiesPath,
    audioFormat: 'opus',
  })

  if (log) console.log(output)
}
