import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Default Route*/}
          <Route path='/' element={<LandingPage />}/>
            
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Signup-' element={<Signup/>}/>
          <Route path='/Dashbord' element={<Dashbord />}/>


        </Routes>
      </Router>
    </div>
    
  )
}

export default App