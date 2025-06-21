import { ReactNode } from 'react';
import Header from '../components/domain/musicShop/Header';

interface SubPagesLayoutProps {
  children: ReactNode;
}

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
