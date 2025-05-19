import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === "admin@example.com" && password === "password123") {
      setError(null);
      navigate('/dashboard');
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className='w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Welcome Back</h3>
        <p className='text-s text-slate-700 mt-[5px] mb-6'>Please fill your login credentials</p>

        <form onSubmit={handleLogin} className='sp'>
          {error && <p className='text-red-500 text-xs pb-2'>{error}</p>}

          <input
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder="johncena@gmail.com"
            required
            className='w-full border border-gray-300 rounded px-3 py-2 mb-4'
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="ag.sdj-h"
            required
            className='w-full border border-gray-300 rounded px-3 py-2 mb-4'
          />

          <button type='submit' className='btn-primary'>
            Login
          </button>

          <p className='text-[18px] text-slate-800 mt-3 flex justify-center'>
            Don't have an account?{" "}
            <span
              className='font-medium text-primary underline cursor-pointer ml-1'
              onClick={() => navigate('/signup')}
            >
              Signup
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
