'use client';

import { getMiniHomepage } from '@/app/api/api';
import { MiniHomepageResponseProps } from '@/app/api/minihomepi';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';
import line1 from '@/../public/images/line1.svg';

const VisitInfo = () => {
  const { id } = useParams();
  const { data } = useQuery<MiniHomepageResponseProps>({
    queryKey: ['visitInfo', id],
    queryFn: () => getMiniHomepage(Number(id)),
    retry: 0,
  });
  const todayCount = data?.todayCount || 0;
  const totalCount = data?.totalCount || 0;
  return (
    <div className="flex flex-row gap-4 items-center p-1 leading-none translate-y-2">
      <div className="flex flex-row gap-2">
        <p className="text-[11px]">Today</p>
        <p className="text-textColors-orange text-[11px]">{todayCount}</p>
      </div>
      <Image src={line1} alt="visit" width={0} height={0} />
      <div className="flex flex-row gap-2">
        <p className="text-[11px]">Total</p>
        <p className="text-[11px]">{totalCount}</p>
      </div>
    </div>
  );
};

export default VisitInfo;
