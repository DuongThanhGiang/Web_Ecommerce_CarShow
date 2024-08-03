
import './globals.css';
import { Footer, Navbar } from '@/components';

export const metadata = {
  title: 'Giang Thành AUTO',
  description: 'Khám phá ứng dụng trưng bày xe tốt nhất thế giới',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
