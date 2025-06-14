import api, { userApi } from "./axios";
import { MusicList } from "./musicList";
import { LoginProps, UserInfoProps } from "./user";

export const getMusicList = async (): Promise<MusicList[]> => {
  const response = await api.get("/musicShop/listTop100Bgm?limit=100");
  return response.data;
};

export const postLogin = async ({ username, password }: LoginProps) => {
  const response = await userApi.post(
    `/user/login?username=${username}&password=${password}&redirect=/musicShop`
  );
  return response.data;
};

export const getUserInfo = async (): Promise<UserInfoProps> => {
  const response = await userApi.get("/user/api/shopUserInfo");
  return response.data;
};
