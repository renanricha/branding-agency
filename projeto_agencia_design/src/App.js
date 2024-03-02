import React, { useState } from 'react'
import Header from './components/Header';
import BannerSec from './components/BannerSec';
import ExpSec from './components/ExpSec'
import Footer from './components/Footer'
import './App.css'

function App() {

  const[corTheme, setCorTheme] = useState(true)

    return (
    <div className="App">
      <Header cor={corTheme} setCor={setCorTheme}/>
      <BannerSec cor={corTheme} setCor={setCorTheme}/>
      <ExpSec cor={corTheme} setCor={setCorTheme}/>
      <Footer cor={corTheme} setCor={setCorTheme}/>
    </div>
  );
}

export default App;
