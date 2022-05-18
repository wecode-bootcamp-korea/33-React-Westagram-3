import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [nameInput, setName] = useState();
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPassword] = useState();
  const [numberInput, setNumber] = useState();
  const navigate = useNavigate();

  const handleNameInput = e => {
    setName(e.target.value);
  };

  const handleEmailInput = e => {
    setEmailInput(e.target.value);
  };

  const handlePasswordInput = e => {
    setPassword(e.target.value);
  };

  const handleNumberInput = e => {
    setNumber(e.target.value);
  };

  const signup = () => {
    navigate('/login-haeun');
    fetch('http://10.58.3.39:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        name: nameInput,
        email: emailInput,
        password: passwordInput,
        phone_number: numberInput,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
  };

  return (
    <form>
      <input type="text" placeholder="name" onChange={handleNameInput} />
      <input type="email" placeholder="email" onChange={handleEmailInput} />
      <input
        type="password"
        placeholder="password"
        onChange={handlePasswordInput}
      />
      <input
        type="text"
        placeholder="phone_number"
        onChange={handleNumberInput}
      />
      <button onClick={signup}>Signup</button>
    </form>
  );
};

export default Signup;
