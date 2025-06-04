import BgmList from '@/app/components/domain/musicShop/BgmList';
import Header from '@/app/components/domain/musicShop/Header';
import React from 'react';

export default function MusicShop() {
  return (
    <div className="flex flex-col w-full px-[325px]">
      <Header />
      <div className="flex flex-row gap-8 mt-8 ">
        <aside className="w-full bg-white h-[650px]"></aside>

        <BgmList />

        <aside className="w-full bg-white h-[650px]"></aside>
      </div>
    </div>
  );
}
