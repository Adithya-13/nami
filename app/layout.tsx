import { Metadata } from 'next';
import { Toaster } from 'sonner';
import { Aboreto, Italianno, Mulish } from 'next/font/google';
import { Tillana } from 'next/font/google';

import { ThemeProvider } from '@/components/custom/theme-provider';

import './globals.css';

const italianno = Italianno({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-italianno',
});

const tillana = Tillana({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mulish',
  weight: ['600'],
});

const mulish = Aboreto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mulish',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'NAMI',
  description: '',
};

export const viewport = {
  maximumScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${mulish.variable} font-sans font-semibold`}
      // `next-themes` injects an extra classname to the body element to avoid
      // visual flicker before hydration. Hence the `suppressHydrationWarning`
      // prop is necessary to avoid the React hydration mismatch warning.
      // https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
      suppressHydrationWarning
    >
      <head></head>
      <body className="antialiased">
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  );
}
