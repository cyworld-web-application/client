import api, { userApi } from './axios';
import { MinimiListProps } from './minimiList';
import { MusicList } from './musicList';
import { LoginProps, SelectMyMinimiProps, UserInfoProps } from './user';

export const getMusicList = async (): Promise<MusicList[]> => {
  const response = await api.get('/musicShop/listTop100Bgm?limit=100');
  return response.data;
};

export const postLogin = async ({ username, password }: LoginProps) => {
  const response = await userApi.post(
    `/user/api/login?username=${username}&password=${password}`
  );
  return response.data;
};

export const getUserInfo = async (): Promise<UserInfoProps> => {
  const response = await userApi.get('/user/api/shopUserInfo');
  return response.data;
};

export const getUserLogout = async () => {
  const response = await userApi.get(`/user/api/logout`);
  return response;
};

export const postBuyBgmByOne = async (bgmId: number) => {
  const response = await userApi.post(`/musicShop/buyBgmByOne?bgmId=${bgmId}`);
  return response.data;
};

export const getMinimiList = async (
  page: number = 1,
  size: number = 12
): Promise<MinimiListProps> => {
  const response = await api.get(
    `/minimiShop/minimiList?page=${page}&size=${size}`
  );
  return response.data;
};

export const buyMinimiByOne = async (minimiId: number) => {
  const response = await userApi.post(
    `/minimiShop/buyMinimi?minimiId=${minimiId}`
  );
  return response.data;
};

export const postSelectMyMinimi = async ({
  currentMinimiId,
  targetMinimiId,
}: SelectMyMinimiProps) => {
  const response = await userApi.post(
    `/minimiShop/change?currentMinimiId=${currentMinimiId}&targetMinimiId=${targetMinimiId}`
  );
  return response.data;
};
