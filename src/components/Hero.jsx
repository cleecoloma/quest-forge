'use strict';

import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { UserContext } from '../context/User';

import '../styles/Hero.css';

function Hero() {
    const { setHero } = useContext(UserContext);

  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate('/create');
  };

  useEffect(() => {
    setHero(null);
  }, []);

  return (
    <div id='hero-container'>
      <div id='hero-motto'>
        <h1>Embark on Quests, Forge Your Destiny</h1>
        <h2>Where every adventure is handcrafted!</h2>
        <div id='button-container'>
          <Button
            variant='contained'
            id='create-button'
            onClick={handleCreateClick}
          >
            Create a Hero
          </Button>
        </div>
      </div>
      <img id='hero-image' src='/images/hero.png' alt='hero' />
    </div>
  );
}

export default Hero;
