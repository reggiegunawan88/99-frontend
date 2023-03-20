import React from 'react';

import Div100vh from 'react-div-100vh';

import Header from '@/components/Header';

const HomeLayout = ({ children }) => {
  return (
    <Div100vh className="flex relative">
      <div className="flex-1">
        <Header />
        {children}
      </div>
    </Div100vh>
  );
};

export default HomeLayout;
