import React from 'react';

import '@/styles/global.css';

const MyApp = ({ Component, pageProps, router }) => {
  const getLayout = Component.getLayout || (page => page);
  return getLayout(<Component {...pageProps} key={router.route} />);
};

export default MyApp;
