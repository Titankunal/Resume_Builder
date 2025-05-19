import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Input = ({ value, onChange, label, placeholder, required, type }) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div>
      <label className="text-[13px] text-slate-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="input-box flex items-center border border-gray-300 px-2 py-1 rounded">
        <input
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none"
          value={value}
          onChange={onChange}
        />

        {type === 'password' && (
          <div onClick={toggleShowPassword} className="cursor-pointer ml-2">
            {showPassword ? (
              <FaRegEye size={22} className="text-primary" />
            ) : (
              <FaRegEyeSlash size={22} className="text-slate-400" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
