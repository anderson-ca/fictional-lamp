/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    PASSWD: process.env.PASSWD
  }
}

module.exports = nextConfig
