'use client'

import { mail } from '@/util/mail'
import Form from 'next/form'
import { useActionState } from 'react'

export default function About() {
  const [sent, sendAction, isPending] = useActionState(() => true, false)

  return (
    <main className="flex flex-col text-pink-400">
      <div className="bg-gradient-to-r from-black to-red-700 flex flex-col items-center p-2">
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <img src="stickyNote.svg"></img>
          <div className="absolute inset-0 flex justify-center items-center z-10 text-black text-center">
            或者发邮件给我们：
            <br />
            gigforever777
            <br />
            @gmail.com
          </div>
        </div>
        <h1 className="text-2xl text-white mb-2 text-center">
          如果你希望我们支持你、聆听你、陪你一起走过治疗之路， 请联系我们
        </h1>
        <Form
          className="grid grid-cols-3 items-center max-w-2xl bg-pink-200 text-pink-900 gap-2 p-4 rounded-lg"
          action={async (formdata) => {
            console.log('sending', Object.fromEntries(formdata.entries()))
            await mail(formdata)
            sendAction()
          }}
        >
          <div className="col-span-3 text-center">
            我们承诺尊重你的隐私，所有内容仅用于与你沟通，不会公开或用于任何商业用途。你可以随时要求我们删除你的信息。
          </div>
          <TextInput text="如何称呼你?" />
          <TextInput text="电子邮箱" />
          <TextInput text="手机号码" />
          <TextInput text="所在区域/城市" />
          <TextInput text="最佳联系方式" />
          <TextInput text="确诊时间" />
          <TextInput text="治疗阶段" />
          <TextInput text="希望获得什么支持？" big />
          <TextInput text="想对我们说的话" big />
          <input
            className="col-span-3 bg-pink-400 m-auto p-1 rounded-md text-black"
            type="submit"
            disabled={isPending}
            value={isPending ? '...' : '提 交'}
          />
        </Form>
      </div>
      {!(!isPending && sent) || (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-200 p-8 rounded-xl text-xl text-black drop-shadow-2xl">
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
          `border rounded-md text-black col-span-2` + (big ? ' min-h-32' : '')
        }
        type="text"
        name={text}
        id={text}
        required
      />
    </>
  )
}
