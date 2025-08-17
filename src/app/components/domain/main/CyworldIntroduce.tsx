'use client';

import { getTotalUsers } from '@/app/api/api';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const CyworldIntroduce = () => {

    const { data } = useQuery({
        queryKey: ['totalUsers'],
        queryFn: getTotalUsers,
        retry: 0,
      });

    return (
        <div className='mt-[20px] text-[14px] text-[#444] text-center leading-[1.6] font-[Gulim,sans-serif]'>
        오늘도 <strong className="text-textColors-primary">{data}</strong>명의 추억이<br/>
      미니홈피에 쌓이고 있어요 ✨<br/>
      <span className="color: #888;">파도타기로 이웃을 만나보세요 :) 🌊</span>
        </div>
    );
};

export default CyworldIntroduce;