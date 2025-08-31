'use server'

import { readAudioFile } from '@/audio/importAudio'

export type Audio = {
  title: string
  date: string
  id: string
  url: string
}

let audio: { [id: string]: Audio[] }

export async function getCachedAudio() {
  // this code is ASS I HATE CODE
  audio = await readAudioFile()

  return audio
}
