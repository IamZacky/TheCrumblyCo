import React from 'react';

// css
import './App.css';

/* Components */
import { AboutUs, Footer, Gallery, Header, Intro, SpecialMenu } from './container';
import { Navbar } from './components';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Gallery />
      <Intro />
      <Footer />
    </div>
  )
}

export default App;
