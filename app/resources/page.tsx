import { redirect, RedirectType } from 'next/navigation'

export default function Page() {
  redirect('/resources/meetings', RedirectType.replace)
}
