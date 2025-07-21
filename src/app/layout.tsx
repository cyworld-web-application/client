import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Providers from './lib/react-query/Provider';
import { SelectedBgmPlayerProvider } from './hooks/SelectedBgmPlayerProvider';
import SidebarPlayer from './components/domain/musicShop/SidebarPlayer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: '싸이월드 BETA',
  description: '싸이월드 BETA',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Providers>
        <SelectedBgmPlayerProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bgColors-quaternary`}
          >
            <div id="modal-root" />
            {children}
            <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 shadow-lg"></div>
          </body>
        </SelectedBgmPlayerProvider>
      </Providers>
    </html>
  );
}
