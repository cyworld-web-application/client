// 미니홈피 관련 타입 정의

// 사용자 기본 정보
export interface UserProps {
  username: string;
  password: string;
  nickname: string;
  gender: 'M' | 'F';
  userId: number;
  cyMoney: number;
}

// 미니홈피 정보
export interface MiniHomepageProps {
  title: string;
  introduce: string;
  emotion: string;
  userId: number;
  homeId: number;
  profileUrl: string;
}

// 친구 관계 정보
export interface FriendshipProps {
  homeId: number;
  nickname: string;
  count: number | null;
}

// 주크박스 음악 정보
export interface JukeboxItemProps {
  id: number;
  singer: string;
  minihomepageId: number;
  createdAt: string | null;
  bgmId: number;
  userId: number;
  bgmUrl: string;
  songName: string;
  playOrder: number;
  isApplied: 'Y' | 'N';
}

// 미니홈피 방문자 통계
export interface VisitStatsProps {
  todayGuestBookCount: number;
  totalGuestBookCount: number;
  todayDiaryCount: number;
  totalDiaryCount: number;
  todayJukeboxCount: number;
  totalJukeboxCount: number;
  todayCount: number;
  totalCount: number;
}

// 미니홈피 메인 응답 데이터
export interface MiniHomepageResponseProps {
  myAuth: boolean;
  loggedInUser: UserProps;
  isFriend: boolean;
  miniHomepage: MiniHomepageProps;
  profileUser: UserProps;
  friendship: FriendshipProps[];
  friendsCount: number;
  jukeboxList: JukeboxItemProps[];
  todayGuestBookCount: number;
  totalGuestBookCount: number;
  todayDiaryCount: number;
  totalDiaryCount: number;
  todayJukeboxCount: number;
  totalJukeboxCount: number;
  todayCount: number;
  totalCount: number;
}

// API 응답 래퍼 타입
export interface ApiResponseProps<T> {
  data: T;
  message?: string;
  status: number;
}

// 에러 응답 타입
export interface ApiErrorProps {
  message: string;
  status: number;
  error?: string;
}
