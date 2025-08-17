import Link from 'next/link';
import headphoneGirl from '@/../public/images/headphone_girl.png';
import Image from 'next/image';
import CyworldIntroduce from './components/domain/main/CyworldIntroduce';

export default function page() {
  return (
    <main className="flex flex-col bg-bgColors-secondary h-[100vh] items-center justify-center">
      <h1 className="text-bgColors-primary mb-[30px] text-[32px] font-bold">
        싸이월드 BETA
      </h1>
      <div className="flex flex-col gap-[5px]">
        <Link
          href="https://cyworld-a.duckdns.org/cyworld/home/1"
          className="flex py-[15px] px-[30px] text-[18px] border-none rounded-[12px] bg-bgColors-primary text-white font-bold text-center items-center justify-center"
        >
          배준오님의 미니홈피 구경하기
        </Link>
        <Link
          href="/cyworld/music-shop"
          className="flex  py-[15px] px-[30px] text-[18px] border-none rounded-[12px] bg-bgColors-primary text-white font-bold"
        >
          선물 가게 (BETA 테스트 중)
        </Link>
      </div>
     <CyworldIntroduce/>
      <div className='w-[320px] h-[320px] bg-[#fff8dc] border-[3px] border-[#ff914d] rounded-[16px] shadow-[5px_5px_15px_rgba(0,0,0,0.2)] mt-[40px] flex flex-col items-center p-[20px] relative'>
      <Image
    src={headphoneGirl}
    alt="프로필 사진"
    width={80}
    height={80}
    className="rounded-full border-[2px] border-[#ff914d] mb-[15px] bg-white"
  />
  <div className="text-[16px] font-bold text-[#ff914d] font-[Gulim,sans-serif] mb-[8px]">
    게스트
  </div>

  <div className="text-[12px] text-[#333] bg-white px-[12px] py-[6px] border border-[#ccc] rounded-[12px] font-[Gulim,sans-serif] shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#888]">
    오늘도 좋은 하루 보내세요 🌸
  </div>
  <div className="mt-[16px] px-[14px] py-[10px] bg-[#fff4e6] border border-[#ffcc99] rounded-[12px] font-[Gulim,sans-serif] shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#ccc]">
    <div className="font-bold text-[14px] text-[#d2691e] mb-[8px]">📢 최근 업데이트 소식</div>
    <ul className="list-none p-0 text-[12px] text-[#333]">
      <li className="mb-[4px]">🔸 선물 가게 기능 개선 (2025.07.22)</li>
      <li className="mb-[4px]">🔸 미니미 상점 오픈 (2025.07.22)</li>
    </ul>
  </div>

  <div className="absolute bottom-[10px] text-[12px] text-[#666] bg-[#f0f0f0] px-[10px] py-[4px] border border-[#ccc] rounded-[8px] font-[Gulim,sans-serif] shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#888]">
    CYWORLD BETA v1.5.1
  </div>
      </div>
      <div className="flex gap-[15px] mt-[20px]">
      <button
        className="font-[Gulim,sans-serif] text-[14px] text-black bg-[#f0f0f0] border-[2px] border-[#bbb] px-[15px] py-[5px] min-w-[60px] shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#888] cursor-pointer outline-none active:shadow-[inset_-1px_-1px_0_#fff,inset_1px_1px_0_#888]"
      >
        로그인
      </button>

      <div className="relative inline-block">
        <button
          className="font-[Gulim,sans-serif] text-[14px] text-black bg-[#f0f0f0] border-[2px] border-[#bbb] px-[15px] py-[5px] min-w-[60px] shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#888] cursor-pointer outline-none active:shadow-[inset_-1px_-1px_0_#fff,inset_1px_1px_0_#888]"
        >
          회원가입
        </button>

        <div
          className="absolute top-[-60px] left-1/2 transform -translate-x-1/2 bg-[#fff3cd] text-[#8a6d3b] border border-[#ffeeba] rounded-[12px] px-[12px] py-[8px] text-[12px] font-[Gulim,sans-serif] shadow-[2px_2px_8px_rgba(0,0,0,0.1)] whitespace-nowrap z-[100]"
        >
          지금 가입하면<br />🎁 도토리 6개 드려요!
          <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 border-[8px] border-transparent border-t-[#fff3cd]"></div>
        </div>
      </div>
</div>

    </main>
  );
}
