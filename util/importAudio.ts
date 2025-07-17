import fs from 'fs/promises'
import path from 'path'
import { create, Payload } from 'youtube-dl-exec'

const ytdl = create(
  path.resolve('.', 'node_modules/youtube-dl-exec/bin/yt-dlp')
)
const jsonPath = path.resolve('.', 'public/audio/audio.json')
const cookiesPath = path.resolve('.', 'cookies.txt')
const audioLinks = [
  'https://youtu.be/b4-ysCjZFHc',
  'https://youtu.be/SaVrsSzAai4',
]

export type Audio = { title: string; date: string; id: string; url: string }
export let audios: Audio[] = []

console.log(await fs.readFile(cookiesPath, { encoding: 'utf-8' }))

try {
  await fs.access(jsonPath)

  audios = JSON.parse(
    await fs.readFile(jsonPath, { encoding: 'utf-8' })
  ) as Audio[]

  if (audios.length < audioLinks.length) throw 'bruh'

  console.log(`loaded ${audios.length} audios`)
} catch (_) {
  await fs.access(path.resolve('.', 'node_modules/youtube-dl-exec/bin/yt-dlp'))
  audios = []

  for (const link of audioLinks) {
    console.log(`starting ${link}`)
    const metadata = (await ytdl(link, {
      dumpJson: true,
      skipDownload: true,
      cookies: cookiesPath,
    })) as Payload

    console.log(
      await ytdl(link, {
        output: '%(id)s.%(ext)s',
        paths: path.resolve('.', 'public/audio'),
        extractAudio: true,
        cookies: cookiesPath,
        audioFormat: 'opus',
      })
    )

    audios.push({
      title: metadata.title,
      date: metadata.upload_date,
      id: metadata.id,
      url: metadata.webpage_url,
    })
  }

  fs.writeFile(jsonPath, JSON.stringify(audios))
}
