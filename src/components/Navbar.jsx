import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/">Home</Link><br/>
        <Link to="/faculdade">Faculdade</Link><br/>
        <Link to="/noticias">Noticias</Link>
    </div>
  )
}

export default Navbar