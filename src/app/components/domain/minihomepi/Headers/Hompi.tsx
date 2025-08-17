'use client';

import Link from 'next/link';
import React from 'react';
import VisitInfo from './VisitInfo';
import Image from 'next/image';
import plusIcon from '@/../public/images/plus-svgrepo-com.svg';
import { useQuery } from '@tanstack/react-query';
import { MiniHomepageResponseProps } from '@/app/api/minihomepi';
import { useParams } from 'next/navigation';
import { getMiniHomepage } from '@/app/api/api';

const Hompi = () => {
  const { id } = useParams();
  const { data } = useQuery<MiniHomepageResponseProps>({
    queryKey: ['miniHomepage', id],
    queryFn: () => getMiniHomepage(Number(id)),
    retry: 0,
  });

  return (
    <div className="flex flex-row gap-14 justify-center item-center ml-5">
      <VisitInfo />
      <div className="flex flex-row gap-4 justify-between min-w-[600px] mt-1  ml-7 ">
        <div className="flex items-center leading-none">
          <p className="text-textColors-navy text-[1.2rem] font-bold leading-none  ">
            {data?.miniHomepage.title}
          </p>
        </div>

        <div className="flex flex-col justify-end items-end leading-none">
          <div className="flex flex-row gap-2 ">
            <div className="flex flex-row gap-1">
              <Image src={plusIcon} alt="visit" width={0} height={0} />
              <p className="text-textColors-orange font-bold">일촌 홈피</p>
            </div>
            <div className="flex flex-row gap-1">
              <Image src={plusIcon} alt="visit" width={0} height={0} />
              <p className="text-textColors-orange font-bold">팬 되기</p>
            </div>
          </div>
          <Link href={'https://cyworld-a.duckdns.org/cyworld/'}>
            <p className="text-textColors-purple font-semibold">
              https://cyworld-a.duckdns.org/cyworld/
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hompi;
