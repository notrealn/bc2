'use server'

import fs from 'fs/promises'
import { NextRequest } from 'next/server'
import path from 'path'
import { readAudioFile } from '@/audio/importAudio'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  if (searchParams.has('id')) {
    const query = searchParams.get('id')

    const filePath = path.resolve('.', `public/audio/${query}.opus`)
    const fileBuffer = await fs.readFile(filePath)

    return new Response(fileBuffer, {
      headers: { 'Content-Type': 'audio/ogg' },
    })
  }

  return new Response(JSON.stringify(await readAudioFile()), {
    headers: { 'Content-Type': 'application/json' },
  })
}
