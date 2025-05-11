import React, { use, useState } from 'react'
// import image
import { userNavigate } from 'react-router-dom'


const LandingPage = () => {
  const navigate =userNavigate();
  
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {};
  return (
    <div>
      <div className='container mx-auto px-4 py-6'>
        {/* Header */}
        <header className='flex justify-between items-center mb-16'>
          <div className='text-xl font-bold'> Resume Builder </div>
          <button className='bg-purple-100 text-sm font-semibold text-black px-7 py-2.5 rounded-lg hover:text-white transition-colors cursor-pointer'
            onclick={() => setOpenAuthModal(true)}
          >
            Login / Sign Up
          </button>
        </header>
      </div>
    </div>
  )
}

export default LandingPage