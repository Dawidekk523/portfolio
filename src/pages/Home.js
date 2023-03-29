import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Technologies from '../components/technologies'
import Aboutme from '../components/aboutme'
import Footer from '../components/footer'
import Experience from '../components/experience'

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <Technologies />
      <Aboutme />
      <Footer />
      <Experience />
    </div>
  );
}

export default Home;
