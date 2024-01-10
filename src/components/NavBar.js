import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SignIn from './SignIn';
import SignUp from './SignUp';
import About from './About';
import Contact from './Contact';
import  Home  from './Home';



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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
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
      >  <Tab label="Home" {...a11yProps(0)} />
        <Tab label="SignIn" {...a11yProps(1)} />
        <Tab label="About" {...a11yProps(2)} />
        <Tab label="Contact" {...a11yProps(3)} />
        <Tab label="Register" {...a11yProps(4)} />
      </Tabs>
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          padding: 3,
        }}
      ><TabPanel value={value} index={0}>
      <Home />
    </TabPanel>
        <TabPanel value={value} index={1}>
          <SignIn />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <About/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Contact/>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <SignUp/>
        </TabPanel>
      </Box>
    </Box>
  );
}