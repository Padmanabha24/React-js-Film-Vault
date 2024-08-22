import React from 'react'

function Banner({moviesobj}) {
  return (
    <div className='h-[60vh] bg-cover bg-center flex items-end ' style={{backgroundImage:`url(https://images.hdqwalls.com/download/oppenheimer-movie-2023-ov-1366x768.jpg`}}>
        <div className='text-white text-2xl text-center  font-bold w-full mt-80 bg-white/60 pt-1'> Openhimer</div>
    </div>
  )
}

export default Banner