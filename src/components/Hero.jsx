import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import {
  createTheme,
  ThemeProvider,
  alpha,
  getContrastRatio,
} from '@mui/material/styles';
import '../styles/Hero.css';

const violetBase = '#6e6e76';
const violetMain = alpha(violetBase, 0.5);

const theme = createTheme({
  palette: {
    violet: {
      main: violetMain,
      light: alpha(violetBase, 0.5),
      dark: alpha(violetBase, 0.9),
      contrastText:
        getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
    },
  },
});

function Hero() {
  return (
    <ThemeProvider theme={theme}>
      <div id='hero-container'>
        <div id='hero-motto'>
          <h1>Embark on Legends, Craft Your Destiny</h1>
          <h2>Where Every Adventure is Handcrafted!</h2>
          <div id='button-container'>
            <Button variant='contained' color='violet'>
              Create a Hero
            </Button>
          </div>
        </div>
        <img id='hero-image' src='public/images/hero.png' alt='hero' />
      </div>
    </ThemeProvider>
  );
}

export default Hero;
