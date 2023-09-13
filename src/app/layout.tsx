import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { Providers } from '@/app/providers'


export const metadata: Metadata = {
  title: {
    template: '%s - Kool Running Appliance',
    default: 'Kool Running Appliance - Appliance repair team servicing Palm Beach County Florida',
  },
  description:
    'We service your appliances under warranty',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col bg-white dark:bg-gray-950">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
