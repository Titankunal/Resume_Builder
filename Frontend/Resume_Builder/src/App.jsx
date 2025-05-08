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
            
          <Route path='/login' element={<login />}/>
          <Route path='/signup' element={<signup />}/>
p

        </Routes>
      </Router>
    </div>
  )
}

export default App