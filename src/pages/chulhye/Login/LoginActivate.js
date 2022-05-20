import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginActivate = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    fetch('http://10.58.3.156:8000/user/login', {
      method: 'POST',
      body: JSON.stringify({
        user_email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.Token) {
          localStorage.setItem('token', result.Token);
        }
      });

    navigate('/main-chulhye');
  };
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputValue;
  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const [loginActive, setActive] = useState(false);

  const loginActivate = () => {
    return email.includes('@') && password.length >= 5
      ? setActive(true)
      : setActive(false);
  };
  return (
    <>
      <input
        type="text"
        className="inputId"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        name="email"
        onChange={handleInput}
        onKeyUp={loginActivate}
      />
      <input
        type="password"
        className="inputPassword"
        placeholder="비밀번호"
        name="password"
        onChange={handleInput}
        onKeyUp={loginActivate}
      />
      <button
        className={loginActive ? 'loginBtn activate' : 'loginBtn'}
        onClick={goToMain}
      >
        로그인
      </button>
    </>
  );
};

export default LoginActivate;
