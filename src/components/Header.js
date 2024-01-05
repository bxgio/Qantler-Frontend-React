import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Slide from '@mui/material/Slide';
import InputBase from '@mui/material/InputBase';

const Header = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const handleSearchIconClick = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ marginRight: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Qantler Technologies
        </Typography>
        {/* Search Bar */}
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
          <IconButton color="inherit" aria-label="search" onClick={handleSearchIconClick}>
            <SearchIcon />
          </IconButton>
          <Slide direction="left" in={isSearchOpen} mountOnEnter unmountOnExit>
            <div
              style={{
                background: 'white',
                padding: '5px',
                borderRadius: '15px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
              }}
            >
              <InputBase placeholder="Search..." />
            </div>
          </Slide>
        </div>
        {/* Notification Bell Icon */}
        <IconButton color="inherit" aria-label="notifications">
          <NotificationsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
