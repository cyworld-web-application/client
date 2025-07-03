'use client';

import { getUserInfo, getUserLogout, postSelectMyMinimi } from '@/app/api/api';
import { UserInfoProps } from '@/app/api/user';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import secureLocalStorage from 'react-secure-storage';
import useAuthStore from '@/app/hooks/useAuthStore';
import UserInfoSkeleton from './UserInfoSkeleton';
import MinimiSelectModal from '../minimiShop/minimi/MinimiSelectModal';

const UserInfo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const size = 12;
  const [isMinimiModalOpen, setIsMinimiModalOpen] = useState(false);

  const { setLoggedIn } = useAuthStore();

  const { data, isLoading, refetch } = useQuery<UserInfoProps>({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
    retry: 0,
  });

  if (isLoading) {
    return <UserInfoSkeleton />;
  }

  // 정보 항목 배열을 변수에 담기
  const userInfoList = [
    { label: '배경음악', value: '0' },
    { label: '미니미', value: data?.userMinimiInfo.totalCount },
    { label: '스킨', value: '0' },
    { label: '글꼴', value: '0' },
  ];

  // 로그아웃 핸들러
  const handleUserLogout = () => {
    getUserLogout();
    secureLocalStorage.setItem('isUserDataCheck', 'false');
    secureLocalStorage.removeItem('isUserDataCheck');
    setLoggedIn(false);
    window.location.href = 'http://localhost:3000/cyworld/music-shop';
  };

  // 미니미 리스트/페이지네이션 관련
  const totalCount = data?.userMinimiInfo.totalCount || 0;
  const totalPage = data ? Math.ceil(totalCount / size) : 1;
  const minimiList = data?.userMinimiInfo.userMinimiList || [];

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPage) setCurrentPage((prev) => prev + 1);
  };

  // 미니미 변경 적용 핸들러
  const handleApplyMinimi = async (targetMinimiId: number) => {
    if (!data) return;
    const currentMinimiId = minimiList.find((m) => m.isUsing)?.minimiId ?? 0;
    if (currentMinimiId === targetMinimiId) return;
    await postSelectMyMinimi({ currentMinimiId, targetMinimiId });
    await refetch();
    setIsMinimiModalOpen(false);
  };

  // 현재 적용중인 미니미 url
  const currentMinimiUrl = `https://storage.googleapis.com/${
    minimiList.find((m) => m.isUsing)?.minimiUrl ?? ''
  }`;

  return (
    <div className="flex flex-col gap-2 p-[10px] bg-white align-text-left text-[14px] leading-[1.6]">
      <div className="flex flex-row justify-between border-b-[0.1rem] border-b-bgColors-quinary items-center pb-1">
        <p className="text-[15px] text-gray-500">{data?.nickname}</p>
        <button
          onClick={handleUserLogout}
          className="cursor-pointer border-solid rounded-[3px] border-bgColors-quinary border-[1px] px-[1.5px] font-semibold shadow-sm "
        >
          로그아웃
        </button>
      </div>
      <div className="flex flex-row gap-2">
        <Image
          src={currentMinimiUrl}
          alt="프로필 이미지"
          width={70}
          height={70}
          className="border-solid border-[0.1rem] border-bgColors-quinary bg-white rounded-[0.8rem] cursor-pointer"
          onClick={() => setIsMinimiModalOpen(true)}
        />
        <div className="flex flex-col">
          {userInfoList.map((item) => (
            <div
              className="flex flex-row gap-2 flex-nowrap justify-between"
              key={item.label}
            >
              <p className="text-[10px]">{item.label}</p>
              <p className="text-[10px] text-textColors-tertiary">
                {item.value}
              </p>
            </div>
          ))}
          <div className="flex flex-row  items-center  text-center gap-[2rem] size-[10px] ">
            <Image
              src={'https://storage.googleapis.com/cyworld-bucket-2/dotori.png'}
              alt="도토리 이미지"
              width={100}
              height={100}
            />
            <p className="text-nowrap text-textColors-tertiary text-[10px]">
              {data?.cyMoney}
            </p>
          </div>
        </div>
      </div>

      {isMinimiModalOpen && (
        <MinimiSelectModal
          userMinimiList={minimiList}
          currentMinimiId={minimiList.find((m) => m.isUsing)?.minimiId ?? 0}
          onClose={() => setIsMinimiModalOpen(false)}
          onApply={handleApplyMinimi}
        />
      )}

      <Link
        href={`https://cyworldbeta.duckdns.org/cyworld/home/${data?.miniHomepageId}`}
      >
        <p className="text-white bg-bgColors-tertiary border-solid rounded-[0.5rem] p-2 text-center">
          ＞ 내 미니홈피 바로가기
        </p>
      </Link>
    </div>
  );
};

export default UserInfo;
