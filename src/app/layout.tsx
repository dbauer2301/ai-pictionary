import type { Metadata } from 'next';
import './styles/globals.css';

export const metadata: Metadata = {
  title: 'AI Image Generator Taboo Game',
  description: 'AI Image Generator Taboo Game',
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
