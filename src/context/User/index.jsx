'use strict';

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function UserProvider(props) {
  const [hero, setHero] = useState(null);

  const navigate = useNavigate();

  const handleHero = async (heroObj) => {
    setHero(heroObj);
    console.log('Heres the hero obj', heroObj);
    try {
      const response = await axios.put(`${SERVER_URL}/create`, heroObj);
      const responseData = response.data;
      console.log("HERE'S THE RESPONSE ", responseData);
      setTimeout(() => {
        navigate('/quest');
      }, 1000);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        hero,
        setHero,
        handleHero,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;
