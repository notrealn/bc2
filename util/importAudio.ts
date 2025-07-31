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

export type Audio = {
  title: string
  date: string
  id: string
  url: string
}
export let audios: { [id: string]: Audio[] } = {}

// export async function importAudio() {
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
          await downloadVideo(link)
          audios[id].push({
            title: metadata.title,
            date: metadata.upload_date,
            id: metadata.id,
            url: metadata.webpage_url,
          })
        }
      } catch (err) {
        console.log(`err ${JSON.stringify(err)} when downloading ${link}`)
      }
    }
  }

  fs.writeFile(jsonPath, JSON.stringify(audios))
}
// }

export async function readAudioFile() {
  return JSON.parse(await fs.readFile(jsonPath, { encoding: 'utf-8' })) as {
    [id: string]: Audio[]
  }
}

export async function getCachedAudio() {
  return audios
}

async function getMetadata(link: string) {
  return (await ytdl(link, {
    dumpJson: true,
    skipDownload: true,
    cookies: cookiesPath,
  })) as Payload
}

async function downloadVideo(link: string) {
  console.log(
    await ytdl(link, {
      output: '%(id)s.%(ext)s',
      paths: audioPath,
      extractAudio: true,
      cookies: cookiesPath,
      audioFormat: 'opus',
    })
  )
}

// importAudio()
