import React, { use, useState } from 'react'
// import image
import {userNavigate} from 'react-router-dom'


const LandingPage = () => {
  const navigate =userNavigate();
  
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {};
  return (
    <div>LandingPage</div>
  )
}

export default LandingPage