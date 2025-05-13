import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/home/Dashboard';
import EditResume from './pages/ResumeUpdate/EditResume';

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/resume/:resumeId' element={<EditResume />} />
        </Routes>
      </div>

      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          },
        }}
      />
    </>
  );
};

export default App;
