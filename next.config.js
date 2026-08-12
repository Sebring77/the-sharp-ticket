/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // COMING SOON (2026-08-12): every content route folds back to the holding page so
      // no stale picks, records or pricing stay reachable by direct URL while the site is dark.
      { source: '/picks', destination: '/', permanent: false },
      { source: '/record', destination: '/', permanent: false },
      { source: '/subscribe', destination: '/', permanent: false },
      { source: '/podcast', destination: '/', permanent: false },
      { source: '/success', destination: '/', permanent: false },
    ]
  },
}

module.exports = nextConfig
