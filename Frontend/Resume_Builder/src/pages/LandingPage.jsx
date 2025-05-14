import React, { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import myimage from '../assets/001.png'
import Login from './Auth/login';

const LandingPage = () => {
  const navigate = useNavigate();
  
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    // Navigate or open modal
    console.log("CTA clicked");
  };

  return (
    <div className='w-full min-h-full bg-white'>
      <div className='container mx-auto px-4 py-6'>
        {/* Header */}
        <header className='flex justify-between items-center mb-16'>
          <div className='text-xl font-bold'>Create CV</div>
          <button
            className='bg-purple-100 text-sm font-semibold text-black px-7 py-2.5 rounded-lg hover:text-white transition-colors cursor-pointer'
            onClick={() => setOpenAuthModal(true)}
          >
            Login / Sign Up
          </button>
        </header>

        {/* Hero Content */}
        <div className='flex flex-col md:flex-row items-center'>
          <div className='w-full md:w-1/2 pr-4 mb-8 md:mb-0'>
            <h1 className='text-5xl font-bold mb-6 leading-tight'>
              Build Your{" "}
              <span className='text-transparent bg-clip-text bg-[radial-gradient(circle,_#7182ff_0%,_#3cff52_100%)] bg-[length:200%_200%] animate-text-shine'>
                One Click
              </span>
            </h1>
            <p className='text-lg text-gray-700 mb-8'>
              Create a resume without any effort — we do the job, and you take the command.
            </p>
            <button
              className='bg-black text-sm font-semibold text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer'
              onClick={handleCTA}
            >
              Go Ahead
            </button>
          </div>

          <div className='w-full md:w-1/2'>
            {/* Use a placeholder or actual image path */}
            <img
              src={myimage}
              alt="myimage"
              className='w-full rounded-lg'
            />
          </div>
        </div>

        {/* Services Section */}
        <section className='mt-5'>
          <h2 className='text-2xl font-bold text-center mb-12'>
            Here are some Services
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition'>
              <h3 className='text-lg font-semibold mb-3'>Easy-Peasy</h3>
              <p className='text-gray-600'>
                Update your resume with new skills and formatting
              </p>
            </div>
            <div className='bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition'>
              <h3 className='text-lg font-semibold mb-3'>Honorable Templates</h3>
              <p className='text-gray-600'>
                Choose modern, professional templates to shine
              </p>
            </div>
            <div className='bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition'>
              <h3 className='text-lg font-semibold mb-3'>Export in a Click</h3>
              <p className='text-gray-600'>
                Download your high-quality resume in PDF with ease
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className='text-sm bg-gray-50 text-secondary text-center p-5 mt-5'>
          made with ❤️ — happy coding
        </div>
      </div>

      {/* Modal (optional: activate when modal component is ready) */}
      {/* 
      <Modal 
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
        </div>
      </Modal> 
      */}
    </div>
  );
};

export default LandingPage;
