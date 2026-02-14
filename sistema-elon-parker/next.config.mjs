/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  // Exportar como static para Cloudflare Pages
  output: 'export',
}

export default nextConfig
