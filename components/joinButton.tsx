import Link from 'next/link'

export function JoinButton() {
  return (
    <Link
      className="bg-primary text-on-primary text-base p-2 rounded-xl text-center"
      href="/contact-us"
    >
      加入我们
    </Link>
  )
}
