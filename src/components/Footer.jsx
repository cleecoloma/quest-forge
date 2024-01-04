'use strict';

import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      {' '}
      <div id='link-container'>
        <a
          href='https://www.linkedin.com/in/chesterleecoloma/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LinkedInIcon id='linkedin-icon' />
        </a>
        <a
          href='https://github.com/cleecoloma'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GitHubIcon id='github-icon' />
        </a>
      </div>
      <div id='footer-container'>
        <p>
          Designed and built by
          <br />
          <strong>
            <span>Chester Lee</span> <span>Coloma</span>
          </strong>
          <br />
          2024
        </p>
      </div>
    </div>
  );
}

export default Footer;
