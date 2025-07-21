'use client';

import { useBgmAudioStore } from '@/app/hooks/useBgmAudioStore';
import Buttons from '../../common/Buttons';
import Image from 'next/image';
import cyworldMusicIcon from '@/../public/images/playerIcon.jpeg';
import { CiPlay1 } from 'react-icons/ci';
import { CiPause1 } from 'react-icons/ci';
const SidebarPlayer = () => {
  const { audioList, current, play, pause, audioRef } = useBgmAudioStore();

  return (
    <div className="flex flex-row gap-4 ">
      <p>
        {audioList.length > 0 ? (
          <div className="flex flex-col gap-1 justify-center items-center">
            <p className="text-[12px] font-bold">{audioList[current]?.title}</p>
            <p className="text-[12px] text-gray-500">
              {audioList[current]?.singer}
            </p>
          </div>
        ) : (
          <Image
            src={cyworldMusicIcon}
            alt="싸이월드 음악 아이콘"
            width={50}
            height={50}
          />
        )}
      </p>
      {audioList.length > 0 && (
        <div className="flex flex-row gap-[8px] flex-wrap mt-[12px] items-center justify-cente ">
          <Buttons text={<CiPlay1 />} onClick={play} />
          <Buttons text={<CiPause1 />} onClick={pause} />
        </div>
      )}
      <audio ref={audioRef} />
    </div>
  );
};

export default SidebarPlayer;
