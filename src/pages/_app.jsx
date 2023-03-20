import React from 'react';

import Head from 'next/head';

import '@/styles/global.css';

const MyApp = ({ Component, pageProps, router }) => {
  const getLayout = Component.getLayout || (page => page);
  return (
    <>
      <Head>
        <title>99 FE Test - Reggie Gunawan</title>
        <meta name="description" content="99 Group FE Test Assignment" />
        <link rel="icon" href="/favicon.ico" key="favicon" />
      </Head>
      {getLayout(<Component {...pageProps} key={router.route} />)}
    </>
  );
};

export default MyApp;
