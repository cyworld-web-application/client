import api from './axios';
import { MusicList } from './musicList';

export const getMusicList = async (): Promise<MusicList[]> => {
  const response = await api.get('/musicShop/listTop100Bgm?limit=100');
  return response.data;
};
