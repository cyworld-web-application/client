import { create } from 'zustand';
import { RefObject, createRef } from 'react';

export interface AudioItem {
  title: string;
  url: string;
  singer: string;
}

interface BgmAudioState {
  audioList: AudioItem[];
  current: number;
  setAudio: (item: AudioItem) => void;
  play: () => void;
  pause: () => void;
  audioRef: RefObject<HTMLAudioElement>;
}

export const useBgmAudioStore = create<BgmAudioState>((set, get) => ({
  audioList: [],
  current: 0,
  audioRef: createRef<HTMLAudioElement>(),
  setAudio: (item) => {
    set({ audioList: [item], current: 0 });
    const audio = get().audioRef.current;
    if (audio) {
      audio.src = item.url;
      audio.currentTime = 0;
      audio.play();
    }
  },
  play: () => {
    const audio = get().audioRef.current;
    if (audio) audio.play();
  },
  pause: () => {
    const audio = get().audioRef.current;
    if (audio) audio.pause();
  },
}));
