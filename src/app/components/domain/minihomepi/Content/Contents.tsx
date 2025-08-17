import React from 'react';
import RecentPosts from './RecentPosts';
import Miniroom from './Miniroom';
import IlchonMessages from './IlchonMessages';

const Contents = () => {
  return (
    <div className="flex flex-col gap-2">
      <RecentPosts />
      <Miniroom />
      <IlchonMessages />
    </div>
  );
};

export default Contents;
