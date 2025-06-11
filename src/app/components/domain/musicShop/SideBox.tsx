import React, { Children, createContext, ReactNode } from 'react';
import Buttons from '../../common/Buttons';
import Link from 'next/link';

interface SideBoxProps {
  children?: ReactNode;
  className?: string;
}

export const SideBox = ({ children }: SideBoxProps) => {
  return (
    <div className="w-full flex flex-col bg-white border-solid border-[1px] border-bgColors-quaternary rounded-[4px] m-b-[20px] p-[15px]">
      {children}
    </div>
  );
};

export const SideBoxTitle = ({ children }: SideBoxProps) => {
  return (
    <div className="border-b-bgColors-septenary text-bgColors-septenary text-[15px] pb-[8px] border-b-[2px] border-solid mb-[15px]">
      {children}
    </div>
  );
};

export const SideBoxDescription = ({ children, className }: SideBoxProps) => {
  return <p className={className}>{children}</p>;
};

export const SideBoxSignInForm = ({ className }: SideBoxProps) => {
  return (
    <form className={`flex flex-col gap-[8px] justify-center ${className}`}>
      <input
        type="text"
        placeholder="아이디"
        className="border-solid border-[1px] border-bgColors-quinary rounded-[3px] p-[8px]"
      />
      <input
        type="password"
        placeholder="비밀번호"
        className="border-solid border-[1px] border-bgColors-quinary rounded-[3px] p-[8px]"
      />
      <button
        type="button"
        className="flex py-[15px] px-[30px] text-[18px] border-none rounded-[12px] bg-bgColors-tertiary hover:bg-bgColors-primary text-white font-bold text-center items-center justify-center"
      >
        로그인
      </button>
      <Link
        href="https://cyworldbeta.duckdns.org/cyworld/user/register"
        className="text-gray-400 text-center hover:text-textColors-quinary"
      >
        회원가입
      </Link>
    </form>
  );
};
