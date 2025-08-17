import React from 'react';
import diaryBgImg from '@/../public/images/diary_8.png';
import DiaryLayout from '../../../components/domain/minihomepi/DiaryLayout';
const page = () => {
  return (
    <div
      style={{ backgroundImage: `url(${diaryBgImg.src})` }}
      className="rounded-2xl w-[63.5rem] h-[40rem] bg-cover bg-center bg-no-repeat"
    >
      <DiaryLayout />
    </div>
  );
};

export default page;
