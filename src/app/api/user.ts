export interface LoginProps {
  username: string;
  password: string;
}

export interface UserMinimiItem {
  minimiId: number;
  minimiUrl: string;
  minimiName: string;
  isUsing: boolean;
  purchasedAt?: string;
}

export interface UserMinimiInfo {
  totalCount: number;
  userMinimiList: UserMinimiItem[];
}

export interface SelectMyMinimiProps {
  currentMinimiId: number;
  targetMinimiId: number;
}

export interface UserInfoProps {
  nickname: string;
  cyMoney: number;
  miniHomepageId: number;
  userId?: number;
  userMinimiInfo: UserMinimiInfo;
}
