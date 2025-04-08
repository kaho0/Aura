import { Quicksand } from 'next/font/google';
import './globals.css';

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Meditation App - Find Your Inner Peace',
  description: 'Discover the power of meditation with our guided sessions. Start your journey to inner peace today.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={quicksand.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
