import React,{useState} from 'react'


const input = ({value, onChange, label, placeholder, required, type}) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  };

  return (
    <div>input</div>
  )
}

export default input