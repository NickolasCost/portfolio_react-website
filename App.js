import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Navbar />
      <div className='wrapper_content'>
        <Profile />
        <Dialogs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
