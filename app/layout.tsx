import { Metadata } from 'next';
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';


export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'A dashboard built with Next.js and Tailwind CSS',
  metadataBase: new URL('http://localhost:3000'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
