import React from 'react'
import Header from './components/Header';
import BannerSec from './components/BannerSec';
import ExpSec from './components/ExpSec'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <BannerSec />
      <ExpSec />
      <Footer />
    </div>
  );
}

export default App;
