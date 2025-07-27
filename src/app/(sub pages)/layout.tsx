import { ReactNode, useEffect, useState } from 'react';
import { Metadata } from 'next';
import SubPageLayout from '../components/common/SubPageLayout';

interface SubPagesLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: '싸이월드 선물가게',
  description: '싸이월드 선물가게 페이지입니다.',
};
export default function SubPagesLayout({ children }: SubPagesLayoutProps) {
  return <SubPageLayout>{children}</SubPageLayout>;
}
