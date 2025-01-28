'use client'

import { mail } from '@/util/mail'
import Form from 'next/form'
import { useOptimistic } from 'react'

export default function About() {
  const [sending, setSending] = useOptimistic(false, () => true)

  return (
    <main className="flex flex-col text-pink-400">
      <div className="bg-gradient-to-r from-black to-red-700 flex flex-col items-center p-2">
        <h1 className="text-2xl text-white mb-2">联系我们</h1>
        <p className="text-xl">
          您可以发邮件给我们，或者填写下表，我们会很快与您联系
        </p>
      </div>
      <ul className="flex flex-col items-center list-disc">
        <li className="m-2">邮件发送给我们的义工</li>
        <li className="m-2">填写联系表</li>
      </ul>
      <Form
        className="grid grid-cols-[9rem_24rem] items-center max-w-lg ml-auto mr-auto"
        action={async (formdata) => {
          setSending(true)
          console.log('sending', Object.fromEntries(formdata.entries()))
          await mail(formdata)
        }}
      >
        <TextInput text="姓名" />
        <TextInput text="所在国家 / 城市" />
        <TextInput text="确诊时间" />
        <TextInput text="诊断分型" />
        <TextInput text="电子邮箱" />
        <TextInput text="最佳联系方式" />
        <TextInput text="微信名" />
        <TextInput text={'其他可以帮助我们了解您的信息'} big />
        <input
          className="col-span-2 border border-pink-400 m-auto p-1 rounded-md"
          type="submit"
          value={sending ? 'sending...' : 'send'}
        />
      </Form>
    </main>
  )
}

function TextInput({ text, big }: { text: string; big?: boolean }) {
  return (
    <>
      <label className="justify-self-end mr-1 mb-2 text-right" htmlFor={text}>
        {text}
      </label>
      <input
        className={
          `border rounded-md mb-2 p-1 text-black` + (big ? ' min-h-32' : '')
        }
        type="text"
        name={text}
        id={text}
        required
      />
    </>
  )
}
