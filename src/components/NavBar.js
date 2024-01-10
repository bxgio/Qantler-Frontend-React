import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SignIn from './SignIn';
import SignUp from './SignUp';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import HomeIcon from '@mui/icons-material/Home';
import SignInIcon from '@mui/icons-material/Person';
import AboutIcon from '@mui/icons-material/Info';
import ContactIcon from '@mui/icons-material/ContactMail';
import RegisterIcon from '@mui/icons-material/HowToReg';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const [isNavBarHidden, setIsNavBarHidden] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleNavBar = () => {
    setIsNavBarHidden(!isNavBarHidden);
  };

  const tabItems = [
    { label: 'Home', icon: <HomeIcon /> },
    { label: 'SignIn', icon: <SignInIcon /> },
    { label: 'About', icon: <AboutIcon /> },
    { label: 'Contact', icon: <ContactIcon /> },
    { label: 'Register', icon: <RegisterIcon /> },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      {!isNavBarHidden && (
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: 'divider',
            backgroundColor: 'white',
            color: 'white',
          }}
        >
          {tabItems.map((tab, index) => (
            <Tab key={index} label={tab.label} icon={tab.icon} {...a11yProps(index)} />
          ))}
        </Tabs>
      )}
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          padding: 3,
        }}
      >
        {!isNavBarHidden && (
          <IconButton onClick={toggleNavBar} sx={{ position: 'absolute', top: 10, left: 10 }}>
           <MenuIcon/>
          </IconButton>
        )}
        {isNavBarHidden && (
          <IconButton onClick={toggleNavBar} sx={{ position: 'absolute', top: 10, left: 10 }}>
            <MenuIcon />
          </IconButton>
        )}
        {tabItems.map((tab, index) => (
          <TabPanel key={index} value={value} index={index}>
            {tab.label === 'Home' && <Home />}
            {tab.label === 'SignIn' && <SignIn />}
            {tab.label === 'About' && <About />}
            {tab.label === 'Contact' && <Contact />}
            {tab.label === 'Register' && <SignUp />}
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
}
