import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Sharp Ticket — Where Smart Money Talks',
  description: 'Daily MLB picks, props, and analysis from the sharpest minds in sports betting. Game winners, prop cards, and verified results.',
  keywords: 'MLB picks, sports betting, baseball props, daily picks, sharp money, betting analysis',
  openGraph: {
    title: 'The Sharp Ticket — Where Smart Money Talks',
    description: 'Daily MLB picks, props, and analysis. Free pick every day.',
    url: 'https://thesharpticket.com',
    siteName: 'The Sharp Ticket',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Sharp Ticket',
    description: 'Where Smart Money Talks — Daily MLB picks and props.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-sharp-dark text-white antialiased">
        {children}
      </body>
    </html>
  )
}
