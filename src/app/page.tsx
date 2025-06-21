import Link from 'next/link';

export default function page() {
  return (
    <main className="flex flex-col bg-bgColors-secondary h-[100vh] items-center justify-center">
      <h1 className="text-bgColors-primary mb-[30px] text-[32px] font-bold">
        싸이월드 BETA
      </h1>
      <div className="flex flex-col gap-[5px]">
        <Link
          href="https://cyworldbeta.duckdns.org/cyworld/home/1"
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
    </main>
  );
}
