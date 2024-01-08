'use strict';

import React, { useState } from 'react';

export const LoadingContext = React.createContext();

function LoadingProvider(props) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {props.children}
    </LoadingContext.Provider>
  );
}

export default LoadingProvider;
