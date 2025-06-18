import { useState, useRef } from 'react';

export interface AudioItem {
  title: string;
  url: string;
}

export function useSelectedBgmPlayer() {
  const [audioList, setAudioList] = useState<AudioItem[]>([]);
  const [current, setCurrent] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 선택된 곡을 audioList로 세팅
  const playSelectedSongs = () => {
    const checked = document.querySelector<HTMLInputElement>(
      'input[name="bgmId"]:checked'
    );
    if (!checked) {
      setAudioList([]);
      setCurrent(0);
      return;
    }
    const row = checked.closest('tr');
    const title =
      row?.querySelector('td:nth-child(3)')?.textContent?.trim() || '';
    const url =
      'https://storage.googleapis.com/' +
      (row?.getAttribute('data-bgm-url') ||
        checked.getAttribute('data-bgm-url') ||
        '');
    // 이미 audioList에 곡이 있고, 같은 곡이며, 일시정지 상태라면 이어서 재생
    if (
      audioList.length > 0 &&
      audioList[0].url === url &&
      audioRef.current &&
      audioRef.current.paused &&
      audioRef.current.currentTime > 0
    ) {
      audioRef.current.play();
      return;
    }

    // 그 외에는 새로 재생
    setAudioList([{ title, url }]);
    setCurrent(0);
    if (url && audioRef.current) {
      audioRef.current.src = url;
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  // 실제 오디오 재생
  const playAudio = (url: string) => {
    if (audioRef.current) {
      audioRef.current.src = url;
      audioRef.current.play();
    }
  };

  // 다음 곡 재생
  // const playNext = () => {
  //   if (audioList.length > 0 && current + 1 < audioList.length) {
  //     setCurrent((prev) => {
  //       const next = prev + 1;
  //       playAudio(audioList[next].url);
  //       return next;
  //     });
  //   }
  // };

  // 이전 곡 재생
  // const playPrev = () => {
  //   if (audioList.length > 0 && current > 0) {
  //     setCurrent((prev) => {
  //       const prevIdx = prev - 1;
  //       playAudio(audioList[prevIdx].url);
  //       return prevIdx;
  //     });
  //   }
  // };

  return {
    audioList,
    current,
    playSelectedSongs,
    // playNext,
    // playPrev,
    audioRef,
  };
}
