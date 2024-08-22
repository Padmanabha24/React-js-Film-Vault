import React from 'react'
import Logo from '../movie.jpg'

import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex space-x-8 item-center pl-3 py-4 border-black' >
        <img className='w-[50px]'src={Logo} alt="" />
        <Link to="/" className='text-blue-400 py-4 text-3xl font-bold'>Movies</Link>
        <Link to="/Watchlist" className='text-blue-400 py-4 text-3xl font-bold'>Wishlist</Link>
        
    </div>
  )
}

export default Navbar