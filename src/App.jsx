import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Inicial from './pages/Inicial'
import Noticias from './pages/Noticias'
import Faculdade from './pages/Faculdade'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Inicial/>} /> 
          <Route path='/noticias' element={<Noticias/>} />
          <Route path='/faculdade' element={<Faculdade/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App