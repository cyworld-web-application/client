import React from 'react';
import bgImg from '@/../public/images/line2.png';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '싸이월드 BETA',
  description: '싸이월드 BETA',
};

interface HomeLayoutProps {
  children: React.ReactNode;
}
export default function layout({ children }: HomeLayoutProps) {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg.src})` }}
      className="w-full h-[53rem] flex flex-col items-center justify-center"
    >
      {children}
    </div>
  );
}
