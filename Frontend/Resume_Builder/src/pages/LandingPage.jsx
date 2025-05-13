import React, { use, useState } from 'react'
// import image
import { useNavigate } from 'react-router-dom'
import Login from './Auth/login';



const LandingPage = () => {
  const navigate =useNavigate();
  
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {};
  return (
    <div className='w-full min-h-full bg-white'>
      <div className='container mx-auto px-4 py-6'>
        {/* Header */}
        <header className='flex justify-between items-center mb-16'>
          <div className='text-xl font-bold'> Create Yourself </div>
          <button className='bg-purple-100 text-sm font-semibold text-black px-7 py-2.5 rounded-lg hover:text-white transition-colors cursor-pointer'
            onClick={() => setOpenAuthModal(true)}
          >
            Login / Sign Up
          </button>
        </header>

        {/* Hero Content */}
        <div className=' flex flex-col md:flex-row items-center'>
          <div className='w-full md:w-1/2 pr-4 mb-8 md:mb-0'>
            <h1 className='text-5xl font-bold mb-6 leading-tight'>
              Built Your{""}
              <span className='text-transparent bg-clip-text bg-[radial-gradient(circle,_#7182ff_0%,_#3cff52_100%)] bg-[length:200%_200%] animate-text-shine'>
                One Click
              </span>
            </h1>
            <p className='text-lg text-gray-700 mb-8'>
              Create a resume without any efforts,
              we will do the job and you will find the command panel.
            </p>
            <button className='bg-black text-sm font-semibold text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer'
            onClick={handleCTA}
            >
              Go Ahead
            </button>
          </div>
        </div>
        
        <div className='w-full md:w-1/2'>


          {/!* no image *!/}
          <img src="{}" 
          alt="Hero image"
          className='w-full rounded-lg'
          />
        </div>
        
        <section className='mt-5'>
          <h2 className='text-2xl font-bold text-center mb-12'>
            Here are some Service
          </h2>
          <div className='grid grid-cols-1 md-grid-col-3 gap-8'>
            <div className='bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition'>
              <h3 className='text-lg font-semibold mb-3'>
                Easy-Peasy
              </h3>
              <p className='text-gray-600'>
                Update your resume with more new skills and formatting
              </p>
            </div>
            <div className='bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition'>
              <h3 className='text-lg font-semibold mb-3'>
                Honarable Templates
              </h3>
              <p className='text-gray-600'>
                Choose morden, professional templates to shine
              </p>
            </div>

            <div className='bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition'>
              <h3 className='text-lg font-semibold mb-3'>export in a click
              </h3>
              <p className='text-gray-600'>
                Download your high quality resume in .pdf with an ease
              </p>
            </div>
          </div>
        </section>

        <div className='text-sm bg-gray-50 text-secondary text-center p-5 mt-5'>
          made with cum happy coding
        </div>
      </div>

      {/* <Modal 
        isOpen = {openAuthModal}
        onClose = {() => {
          setOpenAuthModal(false)
          setCurrentPage("login")
        }}
        hideHeader
      >
        <div className=''>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "login"
          }
        </div>
      </Modal> */}
    </div>
  )
}

export default LandingPage