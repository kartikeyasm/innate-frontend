import * as React from 'react';
import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Link, Typography } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import Logo from '../../assets/Logo.jpg';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar({isLoggedIn}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [open, setOpen] = useState(false)

  const handleOpen = ()=>setOpen(true);
  const handleClose = ()=>setOpen(false);
    
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

  const renderProfileOrLogin = isLoggedIn ? (
    <IconButton
    size="large"
    edge="end"
    aria-label="account of current user"
    aria-controls={menuId}
    aria-haspopup="true"
    onClick={handleProfileMenuOpen} // Open menu when clicked
    color="inherit"
    >
      <AccountCircle />
    </IconButton>
  ):(
    <IconButton
    size="large"
    aria-label="login"
    color="inherit"
    onClick={handleOpen}
    sx={{
      display: "flex",
      flexDirection: "column", // Stack icon and text vertically
      alignItems: "center",
      gap: 0, // Add space between icon and text
    }}
    >
      <LoginIcon sx={{ fontSize: 28 }} /> {/* Increase icon size */}
      <Typography variant="caption" sx={{ fontSize: "0.75rem" }}>
        Login
      </Typography>
    </IconButton>
  );

  const renderMenu =(
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My Orders</MenuItem>
      <MenuItem onClick={handleMenuClose}>Track Orders</MenuItem>
      <MenuItem onClick={handleMenuClose}>About</MenuItem>
      <MenuItem onClick={handleMenuClose}>Get In Touch</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
    
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      {isLoggedIn ? (
        <>
          {/* Cart */}
          <MenuItem>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <p>Cart</p>
          </MenuItem>

          {/* Profile */}
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
        </>  
      ):(
        <MenuItem onClick={handleOpen}>
          <IconButton
          size="large"
          aria-label="login"
          color="inherit"
          sx={{
            display: "flex",
            flexDirection: "column", // Stack icon and text vertically
            alignItems: "center",
            gap: 0, // Add space between icon and text
          }}
          >
            <LoginIcon sx={{ fontSize: 28 }} /> {/* Increase icon size */}
            <Typography variant="caption" sx={{ fontSize: "0.75rem" }}>
              Login
            </Typography>
          </IconButton>
        </MenuItem>
      )}
    </Menu>
  );

  return (
    <>
    
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>

            {/* Logo */}
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <img
                src={Logo} 
                alt="Logo"
                style={{ width: 85, height: 40, marginRight: 10 }}
                />
              
            </Box>
            
            {/* Search Bar */}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>

            {/* Right */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              
              {/* Cart */}
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                >
                <Badge badgeContent={17} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              
              
              {/* Profile */}
              {renderProfileOrLogin}


            </Box>


            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}

      </Box>
    </>
  );
}
