import React from 'react';
import './App.css';

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
