const nextConfig = {
  experimental: {
    appDir: true
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/news/1'
      }
    ]
  }
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer(nextConfig)
