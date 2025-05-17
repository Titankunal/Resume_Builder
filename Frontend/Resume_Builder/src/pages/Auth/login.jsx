import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("null");

  const navigate = useNavigate();

  // Handle login for submit
  const handlelogin = async (e) => {};
  return (
    <div>login</div>
  )
}

export default login