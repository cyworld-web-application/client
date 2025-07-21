import React from 'react';
import CyworldLogo from '../../../../../public/images/cyworldlogo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { SideBoxTitle } from './SideBox';
import SidebarPlayer from './SidebarPlayer';

const Header = () => {
  // 네비게이션 메뉴 항목 배열
  const navItems = [
    {
      href: './music-shop',
      label: '배경음악',
      sub: 'BGM',
    },
    {
      href: './minimi-shop',
      label: '미니미',
      sub: 'MINIMI',
    },
    {
      href: './skin-shop',
      label: '스킨',
      sub: 'SKIN',
    },
    {
      href: './font-shop',
      label: '글꼴',
      sub: 'FONT',
    },
  ];

  return (
    <header className="flex flex-row justify-start items-center gap-[5em] border-solid border-b-[3px] border-b-bgColors-tertiary bg-white h-[63px] m-auto w-full max-w-[1200px] pl-8">
      <div className="flex flex-row gap-4 items-center justify-center">
        <Link href="http://localhost:3000">
          <Image
            src={CyworldLogo}
            alt="cyworld-logo"
            className="h-[36px] w-[174.56px]"
          />
        </Link>
        <p className="text-[24px] font-bold text-bgColors-tertiary">선물가게</p>
      </div>
      <nav>
        <ul className="flex flex-row gap-[30px] items-center justify-center sm:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex flex-col items-center justify-center"
              >
                <p className="text-[17.6px] font-bold">{item.label}</p>
                <p>{item.sub}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-row translate-x-[100%] absolute  w-[50%]">
        <SidebarPlayer />
      </div>
    </header>
  );
};

export default Header;
