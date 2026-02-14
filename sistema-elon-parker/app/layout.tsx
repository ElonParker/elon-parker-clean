import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Elon Parker - Sistema SEO',
  description: 'Sistema integrado de gestão de projetos SEO com autenticação de usuários',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gradient-to-br from-dark via-darker to-dark text-gray-100">{children}</body>
    </html>
  )
}
