import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home  from './pages/Home'
import Portfolio  from './pages/Portfolio'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='/Portfolio' element={<Portfolio /> } />
      <Route path='/Contact' element={<Contact /> } />
    </Routes>
  )
}
export default App;
