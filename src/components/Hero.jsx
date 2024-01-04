import React from 'react';
import Button from '@mui/material/Button';
import '../styles/Hero.css';

function Hero() {
  return (
      <div id='hero-container'>
        <div id='hero-motto'>
          <h1>Embark on Legends, Craft Your Destiny</h1>
          <h2>Where Every Adventure is Handcrafted!</h2>
          <div id='button-container'>
            <Button variant='contained' color='error' id='create-button'>
              Create a Hero
            </Button>
          </div>
        </div>
        <img id='hero-image' src='public/images/hero.png' alt='hero' />
      </div>
  );
}

export default Hero;
