import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import { Copyright } from '@mui/icons-material';

const App = () => {
  return (
    <Router>
      <div>
      <Header/>
       <NavBar/>
       <Footer/>
       <Copyright/>
      </div>
      
    </Router>
  );
};

export default App;