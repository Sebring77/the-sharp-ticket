/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/picks', destination: '/', permanent: false },
      { source: '/record', destination: '/', permanent: false },
      { source: '/subscribe', destination: '/', permanent: false },
      { source: '/podcast', destination: '/', permanent: false },
    ]
  },
}

module.exports = nextConfig
