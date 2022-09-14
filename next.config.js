/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'planetminecraft.com',
        port: '',
        pathname: '/files/resource_media/screenshot/1834/logo-1535240013.png',
      },
    ],
  },
}

module.exports = nextConfig
