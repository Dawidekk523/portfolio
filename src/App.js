import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Technologies from './components/technologies'
import Aboutme from './components/aboutme'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* some content */}
      <Hero />
      <Technologies />
      <Aboutme />
      <Footer />
    </div>
  );
}

export default App;
