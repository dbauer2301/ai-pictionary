import type { Metadata } from 'next';
import './styles/globals.css';

export const metadata: Metadata = {
  title: 'AI Pictionary',
  description: 'An AI pictionary game',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased scroll-smooth lg:subpixel-antialiased">
        {children}
      </body>
    </html>
  );
}
