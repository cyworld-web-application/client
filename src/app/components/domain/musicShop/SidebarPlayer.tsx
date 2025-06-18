'use client';

import { useSelectedBgmPlayerContext } from '@/app/hooks/SelectedBgmPlayerProvider';
import Buttons from '../../common/Buttons';

const SidebarPlayer = () => {
  const { audioList, current, playSelectedSongs, audioRef } =
    useSelectedBgmPlayerContext();

  return (
    <div>
      <p className="font-bold text-">
        {audioList.length > 0 ? audioList[current]?.title : '재생 중인 곡 없음'}
      </p>
      <div className="flex flex-row gap-[8px] flex-wrap mt-[10px]">
        <Buttons text="🟢 재생" onClick={playSelectedSongs} />
        <Buttons
          text={`🛑 일시정지`}
          onClick={() => audioRef.current?.pause()}
        />
      </div>
      <audio ref={audioRef} />
    </div>
  );
};

export default SidebarPlayer;
