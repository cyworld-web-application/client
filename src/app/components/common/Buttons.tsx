import Image, { StaticImageData } from 'next/image';

interface ButtonsProps {
  imageUrl?: StaticImageData | null;
  text: string;
  onClick?: () => void;
}
const Buttons = ({ imageUrl, text, onClick }: ButtonsProps) => {
  return (
    <button
      className="flex flex-row gap-1 p-[4px] border-solid border-[1px] rounded-[3px] border-gray-200"
      onClick={onClick}
    >
      {imageUrl && (
        <Image src={imageUrl} width={15} height={15} alt="button image" />
      )}
      <p className="text-[13px]">{text}</p>
    </button>
  );
};

export default Buttons;
