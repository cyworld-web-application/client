import React, { useState } from 'react';
import Modal from '@/app/components/common/modal/Modal';
import ItemCard from '../ItemCard';
import { UserMinimiItem } from '@/app/api/user';

interface MinimiSelectModalProps {
  userMinimiList: (UserMinimiItem & { createdAt?: string })[];
  currentMinimiId: number;
  onClose: () => void;
  onApply: (targetMinimiId: number) => void;
}

const PAGE_SIZE = 12;

const MinimiSelectModal = ({
  userMinimiList,
  currentMinimiId,
  onClose,
  onApply,
}: MinimiSelectModalProps) => {
  const [selectedId, setSelectedId] = useState<number>(currentMinimiId);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPage = Math.ceil(userMinimiList.length / PAGE_SIZE);
  const pagedList = userMinimiList.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPage) setCurrentPage((prev) => prev + 1);
  };

  // 3일 이내인지 판별 함수 (purchasedAt 기준)
  const isWithin3Days = (purchasedAt?: string) => {
    if (!purchasedAt) return false;
    const purchased = new Date(purchasedAt);
    const now = new Date();
    const diff = now.getTime() - purchased.getTime();
    return diff <= 3 * 24 * 60 * 60 * 1000;
  };

  return (
    <Modal onClose={onClose}>
      <div className="flex flex-col items-center w-full">
        <h2 className="text-lg font-bold mb-4 text-textColors-tertiary">
          미니미 선택
        </h2>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {pagedList.map((item) => (
            <div
              key={item.minimiId}
              className={`relative p-2 rounded-xl transition-all duration-150 cursor-pointer border-2 ${
                selectedId === item.minimiId
                  ? 'border-bgColors-primary bg-bgColors-secondary'
                  : 'border-transparent bg-white'
              }`}
              onClick={() => setSelectedId(item.minimiId)}
            >
              <ItemCard
                minimiUrl={`https://storage.googleapis.com/${item.minimiUrl}`}
                minimiName={item.minimiName}
                createdAt={
                  isWithin3Days(item.purchasedAt) ? item.purchasedAt : undefined
                }
              />
              {item.isUsing && (
                <span className="absolute top-2 left-2 text-xs bg-bgColors-primary text-white px-2 py-1 rounded">
                  현재 적용중
                </span>
              )}
            </div>
          ))}
        </div>
        {totalPage > 1 && (
          <div className="flex justify-center items-center gap-2 mt-6">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              이전
            </button>
            {Array.from({ length: totalPage }, (_, idx) => (
              <button
                key={idx + 1}
                onClick={() => setCurrentPage(idx + 1)}
                className={`px-3 py-1 border rounded ${
                  currentPage === idx + 1
                    ? 'bg-bgColors-tertiary text-white'
                    : ''
                }`}
              >
                {idx + 1}
              </button>
            ))}
            <button
              onClick={handleNext}
              disabled={currentPage === totalPage}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              다음
            </button>
          </div>
        )}
        <div className="flex flex-row gap-4 w-full justify-center mt-4">
          <button
            className="px-6 py-2 rounded bg-bgColors-primary text-white font-semibold hover:bg-bgColors-tertiary transition"
            onClick={() => onApply(selectedId)}
            disabled={selectedId === currentMinimiId}
          >
            적용
          </button>
          <button
            className="px-6 py-2 rounded bg-bgColors-quinary text-gray-700 font-semibold hover:bg-bgColors-quaternary transition"
            onClick={onClose}
          >
            취소
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default MinimiSelectModal;
