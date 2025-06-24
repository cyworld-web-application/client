export interface MinimiListProps {
  totalCount: number;
  minimiList: MinimiList[];
}

export interface MinimiList {
  id: number;
  minimiUrl: string;
  minimiName: string;
  price: number;
  createdAt: string;
}
