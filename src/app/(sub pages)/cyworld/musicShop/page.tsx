import BgmList from '@/app/components/domain/musicShop/BgmList';
import Header from '@/app/components/domain/musicShop/Header';
import {
  SideBox,
  SideBoxSignInForm,
  SideBoxTitle,
} from '@/app/components/domain/musicShop/SideBox';
import { Metadata } from 'next';
import { SideBoxDescription } from '../../../components/domain/musicShop/SideBox';
import Buttons from '@/app/components/common/Buttons';

export const metadata: Metadata = {
  title: '싸이월드 선물가게',
  description: '싸이월드 선물가게',
};

export default function MusicShop() {
  return (
    <div className="flex flex-col w-full mac:px-[5rem] px-[325px]">
      <Header />
      <div className="flex flex-row gap-8 mt-8 ">
        <aside className="flex flex-col gap-[20px] w-[30rem] ">
          <SideBox>
            <SideBoxTitle>로그인</SideBoxTitle>
            <SideBoxSignInForm />
          </SideBox>
          <SideBox>
            <SideBoxTitle>공지사항</SideBoxTitle>
            <ul>
              <li className="hover:text-textColors-septenary">
                <a href="/">[공지] 선물가게 기능 일부 오픈</a>
              </li>
              <li className="hover:text-textColors-septenary">
                <a href="/">[이벤트] 회원가입 도토리 6개 충전</a>
              </li>
              <li className="hover:text-textColors-septenary">
                <a href="/">[안내] bgm 1곡당 도토리 6개</a>
              </li>
            </ul>
          </SideBox>
          <SideBox>
            <SideBoxTitle>재생목록</SideBoxTitle>
            <p className="font-bold text-">재생 중인 곡 없음</p>
            <div className="flex flex-row gap-[8px] flex-wrap mt-[10px]">
              <Buttons text="▶ 재생" />
              <Buttons text="⏸ 일시정지" />
              <Buttons text="⏹ 정지" />
              <Buttons text="⏮ 이전" />
              <Buttons text="⏭ 다음" />
            </div>
          </SideBox>
        </aside>

        <BgmList />

        <aside className="flex flex-col gap-[20px] w-[27rem] ">
          <SideBox>
            <SideBoxTitle>이벤트</SideBoxTitle>
            <SideBoxDescription>여름맞이 음악 선물하기</SideBoxDescription>
          </SideBox>
          <SideBox>
            <SideBoxTitle>뮤직비디오</SideBoxTitle>
            <SideBoxDescription>원더걸스 - So Hot</SideBoxDescription>
          </SideBox>
          <SideBox>
            <SideBoxTitle>추천 플레이리스트</SideBoxTitle>
            <div className="flex flex-col gap-[2px] transition delay-200 hover:translate-x-[5px] cursor-pointer">
              <SideBoxDescription>여름 히트송 모음</SideBoxDescription>
              <SideBoxDescription className="text-gray-400">
                15곡
              </SideBoxDescription>
            </div>
            <div className="flex flex-col gap-[2px] transition delay-200 hover:translate-x-[5px] cursor-pointer">
              <SideBoxDescription>2008년 인기곡</SideBoxDescription>
              <SideBoxDescription className="text-gray-400">
                20곡
              </SideBoxDescription>
            </div>
          </SideBox>
        </aside>
      </div>
    </div>
  );
}
