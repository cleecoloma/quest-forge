  'use strict';

  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';

  export const UserContext = React.createContext();

  function UserProvider(props) {
    const [hero, setHero] = useState(null);

    const navigate = useNavigate();

    const handleHero = (heroObj) => {
      setHero(heroObj);
      console.log("Heres the hero obj",heroObj)
      navigate('/quest');
    };

    return (
      <UserContext.Provider
        value={{
          hero,
          handleHero,
        }}
      >
        {props.children}
      </UserContext.Provider>
    );
  }

  export default UserProvider;