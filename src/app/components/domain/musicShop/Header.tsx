import React from 'react';
import CyworldLogo from '../../../../../public/images/cyworldlogo.svg';
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
  return (
    <header className="flex flex-row justify-start items-center gap-[5em] border-solid border-b-[3px] border-b-bgColors-tertiary bg-white h-[63px] m-auto w-full max-w-[1200px] pl-8">
      <div className="flex flex-row gap-4 items-center justify-center">
        <Image
          src={CyworldLogo}
          alt="cyworld-logo"
          className="h-[36px] w-[174.56px]"
        />
        <p className="text-[24px] font-bold text-bgColors-tertiary">선물가게</p>
      </div>
      <nav>
        <ul className="flex flex-row gap-[30px] items-center justify-center sm:hidden">
          <li>
            <Link
              href="./music-shop"
              className="flex flex-col items-center justify-center"
            >
              <p className="text-[17.6px] font-bold">배경음악</p>
              <p>BGM</p>
            </Link>
          </li>
          <li>
            <Link
              href="./minimi-shop"
              className="flex flex-col items-center justify-center"
            >
              <p className="text-[17.6px] font-bold">미니미</p>
              <p>MINIMI</p>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex flex-col items-center justify-center"
            >
              <p className="text-[17.6px] font-bold">스킨</p>
              <p>SKIN</p>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex flex-col items-center justify-center"
            >
              <p className="text-[17.6px] font-bold">글꼴</p>
              <p>FONT</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
