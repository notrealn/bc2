import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex flex-col gap-4 mx-auto my-4 max-w-2xl text-center">
      <div className="font-semibold">
        Lu Lin
        姐妹在化疗期间的创作，治疗虽然辛苦，心灵仍可飞出窗外，自由翱翔！喜乐的心乃是良药！
      </div>
      <div className="flex flex-wrap gap-y-8 justify-center mx-4 -z-10">
        <ArtCard src="/patients/creations/brownbird.jpeg" alt="bird" />
        <ArtCard src="/patients/creations/foxes.jpeg" alt="foxes" />
        <ArtCard src="/patients/creations/cat.jpeg" alt="cat" />
        <ArtCard src="/patients/creations/goat.jpeg" alt="goat" />
        <ArtCard src="/patients/creations/bird2.jpeg" alt="bird" />
        <ArtCard src="/patients/creations/rabbit.jpeg" alt="rabbit" />
        <ArtCard src="/patients/creations/bird.jpeg" alt="bird" />
        <ArtCard src="/patients/creations/dog.jpeg" alt="dog" />
        <ArtCard src="/patients/creations/sunflower.jpeg" alt="sunflower" />
      </div>
    </main>
  )
}

function ArtCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-48 h-48">
      <Image className="object-cover px-4" src={src} alt={alt} fill={true} />
    </div>
  )
}
