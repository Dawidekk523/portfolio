import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Technologies from './components/technologies'
import Aboutme from './components/aboutme'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* some content */}
      <Hero />
      <Technologies />
      <Aboutme />
    </div>
  );
}

export default App;
