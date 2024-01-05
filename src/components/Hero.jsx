import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../styles/Hero.css';

function Hero() {
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate('/create');
  };
  return (
    <div id='hero-container'>
      <div id='hero-motto'>
        <h1>Embark on Legends, Craft Your Destiny</h1>
        <h2>Where Every Adventure is Handcrafted!</h2>
        <div id='button-container'>
          <Button
            variant='contained'
            color='error'
            id='create-button'
            onClick={handleCreateClick}
          >
            Create a Hero
          </Button>
        </div>
      </div>
      <img id='hero-image' src='public/images/hero.png' alt='hero' />
    </div>
  );
}

export default Hero;
