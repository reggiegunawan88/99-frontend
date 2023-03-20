import { useState, useEffect } from 'react';

import propertyData from '@/constants/property_data.json';

const useHome = () => {
  const [data, setData] = useState(null);

  // init card data from dummy json
  useEffect(() => {
    setData(propertyData?.data);
  }, []);

  return {
    data
  };
};

export default useHome;
