import BgmList from '@/app/components/domain/musicShop/BgmList';
import Header from '@/app/components/domain/musicShop/Header';
import React from 'react';

export default function MusicShop() {
  return (
    <div className="flex flex-col bg-bgColors-secondary">
      <Header />
      <BgmList />
    </div>
  );
}
