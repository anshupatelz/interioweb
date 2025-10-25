import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script';

export const metadata = {
  title: 'InterioWeb - Website Design, SEO & Branding for Interior Designers',
  description: 'Professional website design, SEO, and branding services for interior designers. Build your digital presence with custom websites and free design calculators.',
  generator: 'Next.js',
  applicationName: 'InterioWeb',
  keywords: ['interior design websites', 'interior designer SEO', 'design business branding', 'interior design tools', 'design calculators', 'interior design marketing'],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  publisher: "InterioWeb",
  authors: "InterioWeb Team",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://interioweb.com/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: 'InterioWeb - Website Design, SEO & Branding for Interior Designers',
    description: 'Professional website design, SEO, and branding services for interior designers. Build your digital presence with custom websites and free design calculators.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://interioweb.com',
    siteName: 'InterioWeb',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'InterioWeb - Digital Solutions for Interior Designers',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@interioweb',
    title: 'InterioWeb - Website Design, SEO & Branding for Interior Designers',
    description: 'Professional website design, SEO, and branding services for interior designers. Build your digital presence with custom websites and free design calculators.',
    image: '/og-image.jpg',
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
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet" />
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
