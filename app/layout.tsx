import type { Metadata } from 'next'
import './globals.css'

// COMING SOON (2026-08-12): metadata deliberately stripped of every service and performance
// claim. The previous copy advertised "daily picks ... one free pick every day", which is what
// search results and social previews would keep showing while the site is dark — i.e. marketing
// a product that is not running. Restore the old copy only when the site actually relaunches.
export const metadata: Metadata = {
  title: 'The Sharp Ticket — Coming Soon',
  description: 'The Sharp Ticket is coming soon.',
  robots: { index: false, follow: false },
  verification: {
    google: 'l2MBsd_iWVvo7hfue5tz6JhweJO8sjtGgfpmyaPs3qk',
  },
  openGraph: {
    title: 'The Sharp Ticket — Coming Soon',
    description: 'The Sharp Ticket is coming soon.',
    url: 'https://thesharpticket.com',
    siteName: 'The Sharp Ticket',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'The Sharp Ticket — Coming Soon',
    description: 'The Sharp Ticket is coming soon.',
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
