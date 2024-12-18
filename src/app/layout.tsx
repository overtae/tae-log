import ThemeProvider from '@/components/layout/theme/ThemeProvider'
import { blog } from '@/constants/blog'
import '@/styles/globals.css'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  weight: '45 920',
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${blog.title}`,
    default: blog.subTitle,
  },
  description: blog.description,
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${pretendard.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

;<meta
  name="google-site-verification"
  content="tkbXTRWs4Fg4rsuB5oqCsduMEj0FmX7Y4JA6nXUnHso"
/>
