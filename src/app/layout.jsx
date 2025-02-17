// import { DM_Sans, Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-inter',
// })

// const dmSans = DM_Sans({
//   subsets: ['latin'],
//   weight: ['400', '500', '700'],
//   display: 'swap',
//   variable: '--font-dm-sans',
//   fallback: ['Arial', 'sans-serif'],
// })

export const metadata = {
  title: {
    template: '%s - Front stack designs',
    default: 'Front stack designs - A community-driven design conference',
  },
  description:
    'At Front stack designs you’ll learn about the latest dark patterns being developed to trick even the smartest visitors, and you’ll learn how to deploy them without ever being detected.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-white antialiased',
        // inter.variable,
        // dmSans.variable,
      )}
    >
      <body className="flex min-h-full">
        <div className="flex flex-col w-full">{children}</div>
      </body>
    </html>
  )
}
