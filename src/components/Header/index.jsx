import React from 'react';

import Image from 'next/image';

const Header = () => {
  return (
    <div className="flex sticky top-0 flex-row p-3 w-full bg-white shadow-md">
      <button
        className="cursor-pointer"
        onClick={() => {
          window.location.href = 'https://www.99.co/id';
        }}
      >
        <Image alt="99co-logo" src="/assets/images/99co-logo.svg" width={100} height={35} layout="fixed" />
      </button>
    </div>
  );
};

export default Header;
