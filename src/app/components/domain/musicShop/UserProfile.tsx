import React from 'react';
import Image from 'next/image';

interface UserProfileProps {
  nickname: string;
  minimiUrl: string;
  cyMoney: number;
  onLogout: () => void;
  onProfileClick: () => void;
}

const UserProfile = ({
  nickname,
  minimiUrl,
  cyMoney,
  onLogout,
  onProfileClick,
}: UserProfileProps) => (
  <div className="flex flex-row justify-between border-b-[0.1rem] border-b-bgColors-quinary items-center pb-1">
    <p className="text-[15px] text-gray-500">{nickname}</p>
    <button
      onClick={onLogout}
      className="cursor-pointer border-solid rounded-[3px] border-bgColors-quinary border-[1px] px-[1.5px] font-semibold shadow-sm "
    >
      로그아웃
    </button>
    <Image
      src={minimiUrl}
      alt="프로필 이미지"
      width={70}
      height={70}
      className="border-solid border-[0.1rem] border-bgColors-quinary bg-white rounded-[0.8rem] cursor-pointer"
      onClick={onProfileClick}
    />
    <div className="flex flex-row items-center gap-1 ml-2">
      <Image
        src={'https://storage.googleapis.com/cyworld-bucket-2/dotori.png'}
        alt="도토리 이미지"
        width={20}
        height={20}
      />
      <span className="text-nowrap text-textColors-tertiary text-[12px]">
        {cyMoney}개
      </span>
    </div>
  </div>
);

export default UserProfile;
