'use client';

import { postLogin } from '@/app/api/api';
import { LoginProps } from '@/app/api/user';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { SideBoxProps, SideBoxTitle } from './SideBox';
import Link from 'next/link';
import UserInfo from './UserInfo';

export const LoginForm = ({ className }: SideBoxProps) => {
  const [username, setUserName] = useState('');
  const [password, setUserPassword] = useState('');
  const isUserStorage =
    sessionStorage.getItem('isUserDataCheck') === 'false' ||
    !sessionStorage.getItem('isUserDataCheck');
  const { mutate } = useMutation<LoginProps>({
    mutationKey: ['userData'],
    mutationFn: () => postLogin({ username, password }),
    onSuccess: () => {
      sessionStorage.setItem('isUserDataCheck', 'true');
    },
    onError: () => {
      sessionStorage.setItem('isUserDataCheck', 'false');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate();
  };

  return (
    <>
      {isUserStorage ? (
        <>
          <SideBoxTitle>로그인</SideBoxTitle>
          <form
            onSubmit={handleSubmit}
            className={`flex flex-col gap-[8px] justify-center ${className}`}
            method="post"
          >
            <input
              type="text"
              placeholder="아이디"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="border-solid border-[1px] border-bgColors-quinary rounded-[3px] p-[8px]"
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setUserPassword(e.target.value)}
              className="border-solid border-[1px] border-bgColors-quinary rounded-[3px] p-[8px]"
            />
            <button
              type="submit"
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
        </>
      ) : (
        <UserInfo />
      )}
    </>
  );
};
