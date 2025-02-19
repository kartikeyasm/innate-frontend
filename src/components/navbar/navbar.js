import React, { useState } from "react";
import { AppBar, Toolbar, InputBase, Box, IconButton, Button, Typography, Menu, MenuItem } from "@mui/material";
import { ShoppingCart, AccountCircle } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import Logo from "../../assets/Logo.jpg"
import LoginIcon from '@mui/icons-material/Login';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  width: "100%",
  maxWidth: 400, // Controls search bar width
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  padding: theme.spacing(1, 1, 1, 0),
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null); // To control dropdown menu
  const isAuthenticated = useSelector((state)=> state.auth.isAuthenticated);
  const dispatch = useDispatch();
  
  // Handle opening the menu
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  // Handle closing the menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = ()=>{
    dispatch(logout());
    handleMenuClose();
  }

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

        {/* Left Side - Logo */}
        <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={Logo} 
            alt="Logo"
            style={{ width: 85, height: 40, marginRight: 10 }}
          />
        </Box>

        {/* Center - Search Bar */}
        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" />
          </Search>
        </Box>

        {/* Right Side - Cart & Login */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Cart Icon */}
          <IconButton color="inherit">
            <ShoppingCart />
          </IconButton>

          {/* Conditional Login / Logout Button */}
          {isAuthenticated ? (
            <Button
              color="inherit"
              startIcon={<AccountCircle />}
              sx={{ fontWeight: 'bold' }}
              onClick={handleMenuClick} // Open dropdown
            />
          ) : (
            <Button component={Link} to="/signin" color="inherit" startIcon={<LoginIcon sx={{ fontSize: 38 }} />} sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <Typography variant="caption" sx={{ fontSize: "0.75rem", marginLeft: 1 }}>
                Login
              </Typography>
            </Button>
            
          )}
          
          {/* Dropdown Menu for Profile */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{
              "aria-labelledby": "profile-button",
            }}
          >
            <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
            <MenuItem onClick={handleMenuClose}>My Orders</MenuItem>
            <MenuItem onClick={handleMenuClose}>Track Orders</MenuItem>
            <MenuItem onClick={handleMenuClose}>About</MenuItem>
            <MenuItem onClick={handleMenuClose}>Get In Touch</MenuItem>
            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleLogOut}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
