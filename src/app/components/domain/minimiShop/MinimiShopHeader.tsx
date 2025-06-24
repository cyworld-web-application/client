import React from 'react';

interface MinimiShopHeaderProps {
  activeTab: 'minimi' | 'miniroom';
  onTabChange: (tab: 'minimi' | 'miniroom') => void;
}

const MinimiShopHeader = ({
  activeTab,
  onTabChange,
}: MinimiShopHeaderProps) => {
  const minimiTabStyle =
    activeTab === 'minimi' ? 'border-bgColors-tertiary' : 'border-transparent';
  const minimiTextStyle =
    activeTab === 'minimi'
      ? 'font-semibold text-bgColors-tertiary'
      : 'text-gray-400';

  const miniroomTabStyle =
    activeTab === 'miniroom'
      ? 'border-bgColors-tertiary'
      : 'border-transparent';
  const miniroomTextStyle =
    activeTab === 'miniroom'
      ? 'font-semibold text-bgColors-tertiary'
      : 'text-gray-400';

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex flex-row justify-center items-center gap-[50px] w-full max-w-[500px] border-y border-gray-200">
        <div
          onClick={() => onTabChange('minimi')}
          className={`cursor-pointer py-2 border-b-[3px] -mb-px transition-all duration-300 ease-in-out ${minimiTabStyle}`}
        >
          <p
            className={`transition-colors duration-300 ease-in-out ${minimiTextStyle}`}
          >
            미니미
          </p>
        </div>
        <div
          onClick={() => onTabChange('miniroom')}
          className={`cursor-pointer py-2 border-b-[3px] -mb-px transition-all duration-300 ease-in-out ${miniroomTabStyle}`}
        >
          <p
            className={`transition-colors duration-300 ease-in-out ${miniroomTextStyle}`}
          >
            미니룸
          </p>
        </div>
      </div>
    </div>
  );
};

export default MinimiShopHeader;
