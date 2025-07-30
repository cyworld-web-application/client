'use client';

import React, { useState } from 'react';
import MinimiShopHeader from '../MinimiShopHeader';
import MiniRoomItemList from '../miniroom/MiniRoomItemList';
import ItemCard from '../ItemCard';
import { useQuery } from '@tanstack/react-query';
import { MinimiListProps } from '@/app/api/minimiList';
import { getMinimiList, buyMinimiByOne } from '@/app/api/api';

const MinimiItemList = () => {
  const [activeTab, setActiveTab] = useState<'minimi' | 'miniroom'>('minimi');
  const [currentPage, setCurrentPage] = useState(1);
  const size = 12;

  const { data } = useQuery<MinimiListProps>({
    queryKey: ['minimiList', currentPage],
    queryFn: () => getMinimiList(currentPage, size),
    retry: 0,
  });

  // 총 페이지 수 계산
  const totalPage = data ? Math.ceil(data.totalCount / size) : 1;

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPage) setCurrentPage((prev) => prev + 1);
  };

  // 미니미 구매 핸들러
  const handleBuyMinimi = async (minimiId: number, price: number) => {
    const confirmBuy = window.confirm(
      `도토리 ${price}개를 사용하여 미니미를 구매하시겠습니까?`
    );
    if (!confirmBuy) return;
    try {
      await buyMinimiByOne(minimiId);
      alert('미니미가 성공적으로 구입되었습니다.');
      window.location.reload();
    } catch (error: any) {
      alert(error?.response?.data?.message || '구매에 실패했습니다.');
    }
  };

  // 5일 이내인지 판별 함수
  const isWithin5Days = (createdAt?: string) => {
    if (!createdAt) return false;
    const created = new Date(createdAt);
    const now = new Date();
    const diff = now.getTime() - created.getTime();
    return diff <= 5 * 24 * 60 * 60 * 1000;
  };

  return (
    <div className="flex flex-col items-center border-solid rounded-[10px] p-4  bg-white w-full">
      <div className="flex flex-col gap-1 items-center justify-center mb-8">
        <p className="text-[40px] sm:text-3xl md:text-[2.5rem] font-extrabold text-bgColors-tertiary text-center">
          싸이월드 미니미샵
        </p>
        <p className="text-sm sm:text-base md:text-[16px] font-medium text-center">
          나만의 미니미를 구매하세요!
        </p>
      </div>
      <MinimiShopHeader activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="w-full mt-8 flex flex-col justify-center items-center">
        {activeTab === 'minimi' ? (
          <>
            <div className="grid grid-cols-3 gap-4">
              {/* 미니미 리스트 영역 */}
              {data?.minimiList.map((item) => (
                <ItemCard
                  key={item.id}
                  minimiName={item.minimiName}
                  minimiUrl={`https://cyworld-bucket.s3.ap-northeast-2.amazonaws.com/${item.minimiUrl}`}
                  price={item.price}
                  onClick={() => handleBuyMinimi(item.id, item.price)}
                  createdAt={
                    isWithin5Days(item.createdAt) ? item.createdAt : undefined
                  }
                />
              ))}
            </div>
            {/* 페이지네이션 UI */}
            <div className="flex justify-center items-center gap-2 mt-6">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                이전
              </button>
              {Array.from({ length: totalPage }, (_, idx) => (
                <button
                  key={idx + 1}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`px-3 py-1 border rounded ${
                    currentPage === idx + 1
                      ? 'bg-bgColors-tertiary text-white'
                      : ''
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
              <button
                onClick={handleNext}
                disabled={currentPage === totalPage}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                다음
              </button>
            </div>
          </>
        ) : (
          /* 미니룸 리스트 영역 */
          <MiniRoomItemList />
        )}
      </div>
    </div>
  );
};

export default MinimiItemList;
