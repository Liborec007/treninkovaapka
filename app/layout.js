import './globals.css'

export const metadata = {
  title: 'TréninkováAppka — Tvůj AI fitness partner',
  description: 'Chytrá fitness appka s AI coachingem. Sleduj progresi, překonávej rekordy.',
  icons: { icon: '/favicon.svg' },
  manifest: '/manifest.json',
}

export const viewport = {
  themeColor: '#00e5a0',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
