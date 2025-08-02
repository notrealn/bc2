'use server'

import path from 'path'
import fs from 'fs/promises'

export type Audio = {
  title: string
  date: string
  id: string
  url: string
}

export async function readAudioFile() {
  try {
    return JSON.parse(
      await fs.readFile(path.resolve('.', 'public/audio/audio.json'), {
        encoding: 'utf-8',
      })
    ) as {
      [id: string]: Audio[]
    }
  } catch (_) {
    return {}
  }
}

let audio: { [id: string]: Audio[] }

export async function getCachedAudio() {
  if (!audio || Object.keys(audio).length === 0) audio = await readAudioFile()

  return audio
}
