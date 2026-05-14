import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Sharp Ticket — Where Smart Money Talks',
  description: 'Daily picks across MLB, NBA, NHL, and NFL — sim-validated every morning. Game winners, props, and verified results. One free pick every day.',
  keywords: 'MLB picks, NBA picks, NHL picks, NFL picks, sports betting, daily picks, sharp money, betting analysis, proprietary edge engine, betting intelligence',
  verification: {
    google: 'l2MBsd_iWVvo7hfue5tz6JhweJO8sjtGgfpmyaPs3qk',
  },
  openGraph: {
    title: 'The Sharp Ticket — Where Smart Money Talks',
    description: 'Daily picks across MLB, NBA, NHL, and NFL. Sim-validated. Free pick every day.',
    url: 'https://thesharpticket.com',
    siteName: 'The Sharp Ticket',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Sharp Ticket',
    description: 'Where Smart Money Talks — Daily multi-sport picks and props.',
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
