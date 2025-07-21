'use client';

import React, { ReactNode } from 'react';
import Portal from './Portal';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <Portal>
      <div>
        <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0, 0, 0, 0.5)] z-[3] overflow-hidden bg-gray-600 bg-opacity-10">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-4 shadow-md z-[4] overflow-hidden">
            <div className="relative flex flex-col p-2 w-[520px] justify-center items-center">
              {children}
              <button
                className="absolute top-0 right-2 cursor-pointer text-[28px] text-gray-400"
                type="button"
                onClick={onClose}
              >
                x
              </button>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
