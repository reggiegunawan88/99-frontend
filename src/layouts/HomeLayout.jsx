import React from 'react';

import Div100vh from 'react-div-100vh';

const HomeLayout = ({ children }) => {
  return <Div100vh className="flex relative">{children}</Div100vh>;
};

export default HomeLayout;
