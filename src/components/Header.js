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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);

  const handleSearchIconClick = () => {
    setSearchOpen(!isSearchOpen);
  };

  const handleNotificationClick = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setNotificationAnchorEl(null);
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
        <IconButton color="inherit" aria-label="notifications" onClick={handleNotificationClick}>
          <NotificationsIcon />
        </IconButton>
        {/* Notification Dropdown */}
        <Menu
          anchorEl={notificationAnchorEl}
          open={Boolean(notificationAnchorEl)}
          onClose={handleNotificationClose}
        >
          <MenuItem onClick={handleNotificationClose}>Notification 1</MenuItem>
          <MenuItem onClick={handleNotificationClose}>Notification 2</MenuItem>
          <MenuItem onClick={handleNotificationClose}>Notification 3</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
