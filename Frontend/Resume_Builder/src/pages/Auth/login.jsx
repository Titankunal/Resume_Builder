import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Should be null, not "null"

  const navigate = useNavigate();

  // Handle login on form submit
  const handleLogin = async (e) => {
    e.preventDefault();

    // Dummy login logic (replace with actual API call)
    if (email === "admin@example.com" && password === "password123") {
      setError(null);
      navigate('/dashboard');
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className='w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center'>
      <h3 className='text-xl font-semibold text-black '>Welcome Back</h3>
      <p className='text-s text-slate-700 ,t-[5px] mb-6'>Please fill your login cridentials</p>

      <form onSubmit={handleLogin} className='sp'>
        {error && <p className='text-red-500 text-xs pb-2'>{error}</p>}

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className='w-full border p-2 rounded'
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className='w-full border p-2 rounded'
        />

        <button type='submit' className='btn-primary'>
          Login
        </button>

        <p className='text-[18px] text-slate-800 mt-3 flex justify-center'>
          Don't have an account?{" "}
          <span
            className='font-medium text-primary underline cursor-pointer'
            onClick={() => navigate('/signup')}
          >
            Signup
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
