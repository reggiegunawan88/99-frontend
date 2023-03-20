import React from 'react';

const CardSkeleton = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        {/* property name */}
        <div className="flex flex-row gap-x-4 items-center">
          <div className="relative w-10 h-10">
            <div className="w-full h-full bg-dark-4 rounded-md animate-pulse"></div>
          </div>
          <div className="flex flex-col gap-y-2 w-full">
            <div className="w-full h-5 bg-dark-4 rounded-md animate-pulse"></div>
            <div className="w-full h-2 bg-dark-4 rounded-md animate-pulse"></div>
          </div>
        </div>
        {/* property price */}
        <div className="flex flex-col gap-y-2 items-end">
          <div className="w-1/2 h-3 bg-dark-4 rounded-md animate-pulse"></div>
          <div className="w-1/2 h-3 bg-dark-4 rounded-md animate-pulse"></div>
        </div>
      </div>

      {/* property room detail */}
      <div className="flex flex-col gap-y-2">
        <div className="w-1/2 h-3 bg-dark-4 rounded-md animate-pulse"></div>
        <div className="w-1/2 h-3 bg-dark-4 rounded-md animate-pulse"></div>
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="w-full h-5 bg-dark-4 rounded-md animate-pulse"></div>
        <div className="w-full h-5 bg-dark-4 rounded-md animate-pulse"></div>
      </div>
    </>
  );
};

export default CardSkeleton;
