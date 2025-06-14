"use client";

import { getUserInfo } from "@/app/api/api";
import { UserInfoProps } from "@/app/api/user";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

const UserInfo = () => {
  const { data } = useQuery<UserInfoProps>({
    queryKey: ["userInfo"],
    queryFn: getUserInfo,
    retry: 0,
  });
  return (
    <div className="p-[10px] bg-bgColors-paleOrange border-[1px] border-solid border-bgColors-palePink rounded-[8px] align-text-left text-[14px] text-textColors-quinary leading-[1.6]">
      <p className="font-bold">👤 {data?.nickname}</p>
      <p className="font-bold">🐿️ 도토리:{data?.cyMoney}개</p>
      <Link
        href={`https://cyworldbeta.duckdns.org/cyworld/home/${data?.miniHomepageId}`}
      >
        <p className="text-textColors-brightPink">🏠 내 미니홈피 바로가기</p>
      </Link>
      <Link href="https://cyworldbeta.duckdns.org/cyworld/">
        <p className="text-textColors-brightPink">🚪 메인으로 바로가기</p>
      </Link>
    </div>
  );
};

export default UserInfo;
