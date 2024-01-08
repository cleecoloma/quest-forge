import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { UserContext } from '../context/User';
import '../styles/Header.css';

function Header() {
  const pages = [
    { title: 'Home', url: '/' },
    { title: 'Create', url: '/create' },
    { title: 'Quest', url: '/quest' },
  ];

  const { hero } = useContext(UserContext);

  const filteredPages = pages.filter((page) => {
    if (hero) {
      return page.title !== 'Create';
    } else {
      return page.title !== 'Quest';
    }
  });

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  console.log("Is there a hero", hero)

  return (
    <AppBar position='fixed' color='error' id='header-bar-style'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <img
            className='brand-logo brand-logo-for-xs'
            src='/images/quest-forge-logo.png'
            alt='quest forge logo'
          />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Quest Forge
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {filteredPages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>
                    <NavLink
                      to={page.url}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      {page.title}
                    </NavLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <img
            className='brand-logo brand-logo-for-md'
            src='/images/quest-forge-logo.png'
            alt='quest forge logo'
          />
          <Typography
            variant='h5'
            noWrap
            component='a'
            href='#app-bar-with-responsive-menu'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 300,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Quest Forge
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {filteredPages.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                style={({ isActive }) =>
                  isActive
                    ? { color: 'orange', textDecoration: 'underline' }
                    : { color: 'white' }
                }
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={NavLink}
                to={page.url}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
