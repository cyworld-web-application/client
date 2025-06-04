'use client';

import React, { useState } from 'react';
import { MusicList } from '../../../api/musicList';
import { useQuery } from '@tanstack/react-query';
import { getMusicList } from '../../../api/api';

import Buttons from '../../common/Buttons';

import BaguniIcon from '../../../../../public/images/baguni.jpeg';
import DotoriIcon from '../../../../../public/images/dotori.jpeg';
import MusicIcon from '../../../../../public/images/musicicon.jpeg';
import PresentIcon from '../../../../../public/images/present.jpeg';

const BgmList = () => {
  // const [isMenuActive, setIsMenuActive] = useState<'kpop' | 'pop'>('kpop');

  const { data } = useQuery<MusicList[]>({
    queryKey: ['musicList'],
    queryFn: getMusicList,
    retry: 0,
  });

  const [showCount, setShowCount] = useState(10);
  const isExpanded = showCount > 10;

  const handleToggle = () => {
    if (isExpanded) {
      setShowCount(10);
    } else {
      setShowCount(100);
    }
  };

  return (
    <div className="flex flex-col  items-center border-solid rounded-[10px] p-[20px] bg-white w-full">
      <div className="flex flex-col gap-[5px] items-center justify-center">
        <p className="text-[40px] font-bold text-bgColors-tertiary">
          싸이월드 뮤직
        </p>
        <p className="text-[16px] font-semibold">나만의 음악을 구매하세요!</p>
      </div>
      <div className="flex flex-col bg-white border-solid border-bgColors-quinary border-[1px] rounded-[4px] text-[14px] mb-[30px] pt-[18px] pr-[18px] pb-[10px] pl-[18px] ">
        <div className="flex flex-row justify-between items-center mb-[8px] border-b-[2px] border-bgColors-senary">
          <div className="flex flex-row gap-[4px]">
            <p
              className={`font-bold cursor-pointerborder-b-[2px] border-bgColors-septenary`}
              // // onClick={() => setIsMenuActive('kpop')}
            >
              인기 BGM
            </p>
            {/* <p
              className={`font-bold cursor-pointer ${
                isMenuActive === 'pop'
                  ? 'border-b-[2px] border-bgColors-septenary'
                  : ''
              }`}
              onClick={() => setIsMenuActive('pop')}
            >
              팝송 BGM
            </p> */}
          </div>
          <div className="min-w-[80px] text-right">
            <button
              className="text-gray-400 focus:outline-none"
              onClick={handleToggle}
            >
              {isExpanded ? '접기 ▲' : '더보기 ▼'}
            </button>
          </div>
        </div>
        <table className="w-[600px] text-left border-collapse">
          <thead>
            <tr className="border-b-[2px] bg-gray-100">
              <th className="px-2 py-1"></th>
              <th className="px-2 py-1">순위</th>
              <th className="px-2 py-1">곡명</th>
              <th className="px-2 py-1">아티스트</th>
              <th className="px-2 py-1"></th>
            </tr>
          </thead>
          <tbody>
            {data?.slice(0, showCount).map((music, index) => (
              <tr key={music.id} className="border-b border-gray-200">
                <td className="px-2 py-1">
                  <input type="checkbox" />
                </td>
                <td
                  className={`px-2 py-1 ${
                    index < 3
                      ? ' text-textColors-tertiary font-bold'
                      : 'text-textColors-septenary'
                  }`}
                >
                  {index + 1}
                </td>

                <td className="px-2 py-1 w-[231.76px]" title={music.songName}>
                  {music.songName.length > 10
                    ? music.songName.slice(0, 14) + '...'
                    : music.songName}
                </td>
                <td className="px-2 py-1 w-[231.76px]">{music.singer}</td>
                <td className=" flex flex-row gap-[10px] font-bold text-textColors-septenary cursor-pointer">
                  <p>선물</p>
                  <p>구입</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-row mt-[8px] gap-[8px] justify-between">
          <div className="flex flex-row gap-2">
            <Buttons imageUrl={MusicIcon} text="듣기" />
            <Buttons imageUrl={BaguniIcon} text="태그담기" />
          </div>
          <div className="flex flex-row gap-2">
            <Buttons imageUrl={PresentIcon} text="선물하기" />
            <Buttons imageUrl={DotoriIcon} text="구입하기" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgmList;
