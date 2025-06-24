import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ItemCardProps {
  minimiUrl: string;
  minimiName: string;
  price: number;
  onClick?: () => void;
}
const ItemCard = ({ minimiUrl, minimiName, price, onClick }: ItemCardProps) => {
  return (
    <div
      className="flex flex-col gap-[0.3rem] cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={minimiUrl}
        alt={`${minimiName} 이미지`}
        width={100}
        height={100}
        className="border-solid border-[0.1rem] border-bgColors-quinary bg-white rounded-[0.8rem] relative"
      />
      <Image
        src={'https://storage.googleapis.com/cyworld-bucket-2/new.png'}
        alt="새로운 아이템 N 아이콘"
        width={13}
        height={13}
        className="absolute translate-x-[5rem] translate-y-[0.3rem]"
      />
      <p>{minimiName}</p>

      <div className="flex flex-row  items-center text-center gap-[0.2rem] size-[15px]">
        <Image
          src={'https://storage.googleapis.com/cyworld-bucket-2/dotori.png'}
          alt="도토리 이미지"
          width={100}
          height={100}
        />
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ItemCard;
