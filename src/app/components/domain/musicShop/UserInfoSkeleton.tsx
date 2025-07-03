const UserInfoSkeleton = () => (
  <div className="flex flex-col gap-2 p-[10px] bg-white animate-pulse">
    <div className="flex flex-row justify-between border-b pb-1">
      <div className="h-4 w-24 bg-gray-200 rounded" />
      <div className="h-6 w-16 bg-gray-200 rounded" />
    </div>
    <div className="flex flex-row gap-2">
      <div className="w-[70px] h-[70px] bg-gray-200 rounded-[0.8rem]" />
      <div className="flex flex-col gap-2 flex-1">
        <div className="h-3 w-20 bg-gray-200 rounded" />
        <div className="h-3 w-16 bg-gray-200 rounded" />
        <div className="h-3 w-24 bg-gray-200 rounded" />
      </div>
    </div>
    <div className="h-8 w-full bg-gray-200 rounded mt-2" />
    <div className="h-8 w-full bg-gray-200 rounded mt-2" />
  </div>
);

export default UserInfoSkeleton;
