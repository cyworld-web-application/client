import { ReactNode } from 'react';
import Header from '../components/domain/musicShop/Header';
import { Metadata } from 'next';

interface SubPagesLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: '싸이월드 선물가게',
  description: '싸이월드 선물가게 페이지입니다.',
};
export default function SubPagesLayout({ children }: SubPagesLayoutProps) {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center bg-bgColors-quaternary h-auto">
        {children}
      </main>
    </>
  );
}
