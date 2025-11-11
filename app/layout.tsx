// Import custom CSS files directly - Next.js will bundle and block on these
import '../public/custom/theme.css'
import '../public/custom/media.css'
import '../public/custom/tailwind.css'
import '../tailwind.css'
import './globals.css'

import { Inter } from 'next/font/google'
import { cx } from 'class-variance-authority'
import { Providers } from './providers'
import { Content } from './content'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Reshaped App',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className="h-full"
      lang="en"
      data-rs-theme="custom"
      data-rs-color-mode="light"
      suppressHydrationWarning
    >
      <head>
        {/* Blocking script to prevent theme flash - runs before any rendering */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const colorMode = localStorage.getItem('rs-color-mode');
                  if (colorMode) {
                    document.documentElement.setAttribute('data-rs-color-mode', colorMode);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* Load fonts async - don't block rendering */}
        <link
          rel="stylesheet"
          href="https://assets.observeinc.com/fonts/circular.css"
        />
        <link
          rel="stylesheet"
          href="https://assets.observeinc.com/fonts/ibmPlexMono.css"
        />
        <link
          rel="stylesheet"
          href="https://assets.observeinc.com/fonts/ibmPlexSans.css"
        />
        <link
          rel="stylesheet"
          href="https://assets.observeinc.com/fonts/kasualbloks.css"
        />
        <link
          rel="stylesheet"
          href="https://assets.observeinc.com/fonts/robotoMono.css"
        />
        <link
          rel="stylesheet"
          href="https://assets.observeinc.com/fonts/robotoCondensed.css"
        />
      </head>
      <body className={cx(inter.className, 'h-full')} suppressHydrationWarning>
        <Providers>
          <Content>{children}</Content>
        </Providers>
      </body>
    </html>
  )
}
