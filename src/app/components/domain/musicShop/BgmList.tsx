'use client';

import React, { useState } from 'react';
import { MusicList } from '../../../api/musicList';
import { useQuery } from '@tanstack/react-query';
import { getMusicList, postBuyBgmByOne } from '../../../api/api';

import Buttons from '../../common/Buttons';

import BaguniIcon from '../../../../../public/images/baguni.jpeg';
import DotoriIcon from '../../../../../public/images/dotori.jpeg';
import MusicIcon from '../../../../../public/images/musicicon.jpeg';
import PresentIcon from '../../../../../public/images/present.jpeg';
import { AxiosError } from 'axios';
import { useSelectedBgmPlayer } from '@/app/hooks/useSelectedBgmPlayer';
import { useSelectedBgmPlayerContext } from '@/app/hooks/SelectedBgmPlayerProvider';

const BgmList = () => {
  // const [isMenuActive, setIsMenuActive] = useState<'kpop' | 'pop'>('kpop');
  const { playSelectedSongs, audioRef } = useSelectedBgmPlayerContext();
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

  const handleBuy = async (bgmId: number) => {
    if (!bgmId) {
      alert('bgmId를 찾을 수 없습니다.');
      return;
    }
    const confirmBuy = window.confirm('도토리 6개를 사용하시겠습니까?');
    if (!confirmBuy) return;

    try {
      await postBuyBgmByOne(bgmId);
      alert('곡이 성공적으로 구입되었습니다.');
      window.location.reload();
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      alert(axiosError.response?.data?.message || '구매에 실패했습니다.');
    }
  };

  return (
    <div className="flex flex-col items-center border-solid rounded-[10px] p-4  bg-white">
      <div className="flex flex-col gap-1 items-center justify-center mb-8">
        <p className="text-[40px] sm:text-3xl md:text-[2.5rem] font-extrabold text-bgColors-tertiary text-center">
          싸이월드 뮤직
        </p>
        <p className="text-sm sm:text-base md:text-[16px] font-medium text-center">
          나만의 음악을 구매하세요!
        </p>
      </div>
      <div className="flex flex-col bg-white border-solid border-bgColors-quinary border rounded-[4px] text-xs sm:text-sm md:text-[14px] mb-6 pt-4 sm:pt-6 px-4 sm:px-6 pb-2 sm:pb-4">
        <div className="flex flex-row flex-wrap justify-between items-center mb-2 border-b-2 border-bgColors-senary ">
          <div className="flex flex-row gap-1 sm:gap-2">
            <p
              className={`font-bold cursor-pointer border-b-2 border-bgColors-mint`}
              // // onClick={() => setIsMenuActive('kpop')}
            >
              인기 BGM
            </p>
            {/* <p
              className={`font-bold cursor-pointer ${
                isMenuActive === 'pop'
                  ? 'border-b-2 border-bgColors-septenary'
                  : ''
              }`}
              onClick={() => setIsMenuActive('pop')}
            >
              팝송 BGM
            </p> */}
          </div>
          <div className="text-right">
            <button
              className="text-gray-400 focus:outline-none text-xs sm:text-sm"
              onClick={handleToggle}
            >
              {isExpanded ? '접기 ▲' : '더보기 ▼'}
            </button>
          </div>
        </div>
        <div className="w-full overflow-x-auto transition-all duration-300">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="border-b-2 bg-bgColors-gray">
                <th className="px-2 py-1 text-center"></th>
                <th className="px-2 py-1 text-center">순위</th>
                <th className="px-2 py-1 text-center">곡명</th>
                <th className="px-2 py-1 text-center">아티스트</th>
                <th className="px-2 py-1 text-center"></th>
              </tr>
            </thead>
            <tbody>
              {data?.slice(0, showCount).map((music, index) => (
                <tr
                  key={music.id}
                  className="border-b border-gray-200 font-light text-xs  hover:bg-blue-50"
                >
                  <td className="py-2 text-center">
                    <input
                      type="radio"
                      name="bgmId"
                      data-bgm-url={music.bgmUrl}
                      value={music.id}
                    />
                  </td>
                  <td
                    className={`px-2 py-1 text-center  ${
                      index < 3
                        ? ' text-textColors-tertiary font-bold'
                        : 'text-textColors-septenary font-bold'
                    }`}
                  >
                    {index + 1}
                  </td>
                  <td
                    className="w-[270.781px]  truncate font-thin text-xs  text-center"
                    title={music.songName}
                  >
                    {music.songName}
                  </td>
                  <td className="font-thin w-[164.148px]  text-xs  truncate text-center">
                    {music.singer}
                  </td>
                  <td className="flex flex-row gap-2  font-bold text-textColors-mint cursor-pointer px-1  py-2 justify-center">
                    <p className="text-nowrap">선물</p>
                    <p
                      className="text-nowrap"
                      onClick={() => handleBuy(music.id)}
                    >
                      구입
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-row justify-between min-x-[547.219px] mt-2">
          <div className="flex flex-row gap-2">
            <Buttons
              imageUrl={MusicIcon}
              text="듣기"
              onClick={playSelectedSongs}
            />
            <audio ref={audioRef} />
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
