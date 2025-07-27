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
    window.innerWidth <= 768 ? setIsMobile(true) : setIsMobile(false);
  };
  useEffect(() => {
    window.innerWidth <= 768 ? setIsMobile(true) : setIsMobile(false);
    window.addEventListener('resize', handleResize);
    // 컴포넌트 언마운트 시 이벤트 리스너 삭제
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="flex flex-col gap-2 text-center text-lg text-gray-700 py-20 ">
          <p>
            죄송합니다. 현재 모바일 기기에서는 사용이 불가능합니다.
            <br />
            빠른 시일 내에 업데이트 되도록 노력하겠습니다.
            <br />
            감사합니다.
          </p>
          <Link
            href="https://cyworldbeta.duckdns.org/cyworld/"
            className="text-white border-solid border-2 border-textColors-primary rounded-md px-4 py-2 bg-bgColors-primary"
          >
            메인 페이지로 이동하기
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
