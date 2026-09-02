import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Colin Yuchen Wang · 王宇晨',
  description:
    'MPhil researcher at The Hong Kong Polytechnic University working on Retrieval-Augmented Generation.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Colin Yuchen Wang · 王宇晨',
    description:
      'MPhil researcher at The Hong Kong Polytechnic University working on Retrieval-Augmented Generation.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Colin Yuchen Wang · 王宇晨',
    description:
      'MPhil researcher at The Hong Kong Polytechnic University working on Retrieval-Augmented Generation.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
