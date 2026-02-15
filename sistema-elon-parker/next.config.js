/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removido 'output: export' para rodar APIs dinâmicas no Cloudflare Workers
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
