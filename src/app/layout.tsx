import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script';

export const metadata = {
  title: 'Aimpur Tools - Essential Calculators for Students',
  description: 'Free online tools including CGPA converters, attendance calculators, salary calculators, and grade calculators designed for students.',
  generator: 'Next.js',
  applicationName: 'Next.js',
  keywords: ['Aimpur Tools', 'Calculators', 'Students'],
  icons: {
    icon: '/aimpur-tools-favicon.png',
    shortcut: '/aimpur-tools-favicon.png',
  },
  publisher: "Aimpur.com",
  authors: "Aimpur Team",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aimpur.com/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: 'Aimpur Tools - Essential Calculators for Students',
    description: 'Free online tools including CGPA converters, attendance calculators, salary calculators, and grade calculators designed for students.',
    url: 'https://aimpur.com/tools',
    siteName: 'Aimpur Tools',
    images: [
      {
        url: '/aimpur-tools-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aimpur Tools - Essential Calculators for Students',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@myaimpur',
    title: 'Aimpur Tools - Essential Calculators for Students',
    description: 'Free online tools including CGPA converters, attendance calculators, salary calculators, and grade calculators designed for students.',
    image: '/aimpur-tools-og-image.jpg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>

      <body className="min-h-screen bg-background">
        {children}
      </body>

      {/* GA4 Tracking Code */}
      <GoogleAnalytics gaId="G-FK0XCX3Q3D" />

      {/* Microsoft Clarity Tracking Code */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "tgrxat82ut");
        `}
      </Script>

      {/* Google Adsense Code */}
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9019751481924647"
        crossOrigin="anonymous"></Script>

    </html>
  )
}
