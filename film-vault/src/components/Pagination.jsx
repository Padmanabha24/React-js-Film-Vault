import React from 'react'

function Pagination({pageNo,previouspage,nextpage}) {
  return (
    <div className='bg-gray-400 flex justify-center mt-8'>
        <div className='px-3 mx-4 bg-white border-2 rounded'><button onClick={previouspage}>previous</button></div>
        <div>{pageNo}</div>
        <div className='px-3 mx-4 bg-white border-2 rounded'><button onClick={nextpage}>next</button></div>
        
        
    </div>
  )
}

export default Pagination