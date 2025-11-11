import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cx } from 'class-variance-authority'
import { Reshaped } from 'reshaped'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reshaped App',
  description: 'Next.js app with Reshaped',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="h-full" lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://assets.observeinc.com/fonts/circular.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://assets.observeinc.com/fonts/ibmPlexMono.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://assets.observeinc.com/fonts/kasualbloks.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://assets.observeinc.com/fonts/robotoMono.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://assets.observeinc.com/fonts/robotoCondensed.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://assets.observeinc.com/fonts/ibmPlexSans.css"
        />
      </head>
      <body className={cx(inter.className, 'h-full bg-background text-on-background')}>
        <Reshaped theme="custom">{children}</Reshaped>
      </body>
    </html>
  )
}
