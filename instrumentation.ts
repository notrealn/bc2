// import { create, Payload } from 'youtube-dl-exec'

// const ytdl = create(
//   process.env.NODE_ENV == 'development'
//     ? './node_modules/youtube-dl-exec/bin/yt-dlp'
//     : __dirname + '/../../node_modules/youtube-dl-exec/bin/yt-dlp'
// )

// export const audioLinks = [
//   'https://youtu.be/b4-ysCjZFHc',
//   //   'https://www.youtube.com/watch?v=SaVrsSzAai4',
// ]

// export const audioMetadata: Payload[] = []

// const cookiesPath =
//   process.env.NODE_ENV == 'development'
//     ? './cookies.txt'
//     : __dirname + '/cookies.txt'

// const audioPath = './public/audio'
// const audioFormat = 'm4a'

// export async function register() {
//   for (const link of audioLinks) {
//     console.log(`starting ${link}`)
//     try {
//       const metadata = await ytdl(link, {
//         dumpJson: true,
//         skipDownload: true,
//         cookies: cookiesPath,
//       })
//       console.log(
//         await ytdl(link, {
//           output: '%(id)s.%(ext)s',
//           paths: audioPath,
//           extractAudio: true,
//           cookies: cookiesPath,
//           audioFormat: audioFormat,
//         })
//       )

//       audioMetadata.push(metadata)
//       console.log(audioMetadata)
//     } catch (err) {
//       console.log(JSON.stringify(err))
//       console.log(err)
//     }
//   }
// }
