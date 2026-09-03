import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.johnnycutz-studio.com'
).replace(/^http:/, 'https:');
const socialImage = `${siteUrl}/og.png`;

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Johnny Cutz Barbershop | Fresh Cuts & Dreadlocks',
  description: 'Barbearia premium especializada em fresh cuts, fades, dreadlocks e manutenção de locks.',
  alternates: { canonical: siteUrl },
  openGraph: {
    title: 'Johnny Cutz Barbershop',
    description: 'Cortes precisos. Locks autênticos.',
    type: 'website',
    url: siteUrl,
    images: [{ url: socialImage, width: 1200, height: 630, alt: 'Johnny Cutz Barbershop' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Johnny Cutz Studio',
    description: 'Cortes precisos. Locks autênticos.',
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
