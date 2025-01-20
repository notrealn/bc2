'use server'

import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function mail(formdata: FormData) {
  const info = await transporter.sendMail({
    // from: process.env.EMAIL_USERNAME,
    to: process.env.EMAIL_TARGET,
    subject: `message from ${formdata.get('姓名')}`,
    // text: 'form contents:',
    html: `<table><tr><th>field</th><th>value</th></tr>${[...formdata.entries()]
      .filter(([_, v]) => v !== '')
      .map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`)
      .join('')}</table>`,
  })

  console.log('Message sent: %s', info.messageId)
}
