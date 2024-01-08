'use strict';

import React, { useState } from 'react';

export const LoadingContext = React.createContext();

function LoadingProvider(props) {
  const [loading, setLoading] = useState(false);

  const handleLoading = () => {
    setLoading(true);
  };

  return (
    <LoadingContext.Provider
      value={{
        loading,
        handleLoading,
      }}
    >
      {props.children}
    </LoadingContext.Provider>
  );
}

export default LoadingProvider;
