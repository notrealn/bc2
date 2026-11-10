'use client'

import { mail } from '@/util/mail'
import Form from 'next/form'
import { startTransition, useActionState } from 'react'
import Image from 'next/image'
import { SideSticky } from '@/components/sidesticky'

export default function About() {
  const [sent, sendAction, isPending] = useActionState(() => true, false)

  return (
    <main className="flex flex-col">
      <div className="flex flex-col items-center p-2">
        <h1 className="text-2xl m-4 text-center">
          如果你希望我们支持你、聆听你、陪你一起走过治疗之路， 请联系我们
        </h1>
        <SideSticky src="/stickyNote.svg">
          或者发邮件给我们：
          <br />
          gigforever777
          <br />
          @gmail.com
        </SideSticky>
        <Form
          className="grid grid-cols-3 items-center max-w-2xl gap-2 text-primary"
          action={async (formdata) => {
            console.log('sending', Object.fromEntries(formdata.entries()))
            startTransition(() => {
              sendAction()
            })
            await mail(formdata)
          }}
        >
          <div className="col-span-3 text-center py-2">
            我们承诺尊重你的隐私，所有内容仅用于与你沟通，不会公开或用于任何商业用途。你可以随时要求我们删除你的信息。
          </div>
          <TextInput text="如何称呼你?" />
          <TextInput text="电子邮箱" />
          <TextInput text="手机号码" />
          <TextInput text="微信WeChat ID" />
          <TextInput text="所在國家/城市" />
          <TextInput text="希望获得什么持？" big />
          <input
            className="col-span-3 bg-primary m-auto p-2 px-4 my-2 rounded-4xl text-on-primary text-xl"
            type="submit"
            disabled={isPending}
            value={isPending ? '...' : '提交'}
          />
        </Form>
      </div>
      {!(!isPending && sent) || (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-surface-container p-8 rounded-xl text-xl text-on-surface-container drop-shadow-2xl">
          已经提交！
          <br />
          我们会有姐妹联系你。
        </div>
      )}
    </main>
  )
}

function TextInput({ text, big }: { text: string; big?: boolean }) {
  return (
    <>
      <label className="justify-self-end text-right" htmlFor={text}>
        {text}
      </label>
      <input
        className={
          `border border-gray-600 rounded-md text-black col-span-2 p-1` +
          (big ? ' min-h-32' : '')
        }
        type="text"
        name={text}
        id={text}
        required
      />
    </>
  )
}
