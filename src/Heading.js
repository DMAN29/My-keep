import React from 'react'

const Heading = () => {
  return <>
    <header className='bg-yellow-400 flex p-5 shadow-lg shadow-gray-700'>
      <span className="icon my-2 mx-2"><img src="./icon.jpg" alt="M-K" className='h-12'/></span>
      <h1 className='text-6xl text-slate-100'>My Keep</h1>
    </header>
  </>
}

export default Heading