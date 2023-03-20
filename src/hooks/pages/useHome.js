import { useState, useEffect } from 'react';

import propertyData from '@/constants/property_data.json';

const useHome = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(propertyData?.data);
  }, []);

  return {
    data
  };
};

export default useHome;
