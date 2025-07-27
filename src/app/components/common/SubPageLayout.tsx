'use client';

import { ReactNode, useEffect, useState } from 'react';
import Header from '../domain/musicShop/Header';
import Link from 'next/link';

interface SubPagesLayoutProps {
  children: ReactNode;
}
export default function SubPageLayout({ children }: SubPagesLayoutProps) {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    window.innerWidth < 461 ? setIsMobile(true) : setIsMobile(false);
  };
  useEffect(() => {
    window.innerWidth < 461 ? setIsMobile(true) : setIsMobile(false);
    window.addEventListener('resize', handleResize);
    // 컴포넌트 언마운트 시 이벤트 리스너 삭제
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="text-center text-lg text-gray-700 py-20">
          모바일 기기에서는 사용이 불가능합니다.
          <Link href="https://cyworldbeta.duckdns.org/cyworld/">
            메인으로 이동하기
          </Link>
        </div>
      ) : (
        <>
          <Header />
          <main className="flex flex-col items-center justify-center bg-bgColors-quaternary h-auto">
            {children}
          </main>
        </>
      )}
    </>
  );
}
