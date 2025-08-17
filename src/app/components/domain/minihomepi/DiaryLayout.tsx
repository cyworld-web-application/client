import React from 'react';
import Hompi from './Headers/Hompi';
import UserInfoSideBox from './UserInfoSideBox';
import Contents from './Content/Contents';
import SideNavTab from './SideNavTab';

const DiaryLayout = () => {
  return (
    <div className="flex justify-center translate-y-12">
      <Hompi />
      <div>
        <UserInfoSideBox />
        <Contents />
        <SideNavTab />
      </div>
    </div>
  );
};

export default DiaryLayout;
