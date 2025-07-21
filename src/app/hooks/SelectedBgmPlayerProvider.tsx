'use client';

import React, { createContext, useContext } from 'react';
import { useSelectedBgmPlayer } from './useSelectedBgmPlayer';

const SelectedBgmPlayerContext = createContext<ReturnType<
  typeof useSelectedBgmPlayer
> | null>(null);

export const SelectedBgmPlayerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const value = useSelectedBgmPlayer();
  return (
    <SelectedBgmPlayerContext.Provider value={value}>
      {children}
    </SelectedBgmPlayerContext.Provider>
  );
};

export const useSelectedBgmPlayerContext = () => {
  const ctx = useContext(SelectedBgmPlayerContext);
  if (!ctx)
    throw new Error(
      'useSelectedBgmPlayerContext must be used within SelectedBgmPlayerProvider'
    );
  return ctx;
};
