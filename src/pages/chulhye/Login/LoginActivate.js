import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginActivate = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-chulhye');
  };
  const [idInput, setIdInput] = useState('');
  const [pwdInput, setPwdInput] = useState('');

  function handleIdInput(event) {
    setIdInput(event.target.value);
  }

  function handlePwdInput(event) {
    setPwdInput(event.target.value);
  }

  return (
    <>
      <input
        type="text"
        className="inputId"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange={handleIdInput}
      />
      <input
        type="password"
        className="inputPassword"
        placeholder="비밀번호"
        onChange={handlePwdInput}
      />
      <button className="loginBtn" onClick={goToMain}>
        로그인
      </button>
    </>
  );
};

export default LoginActivate;
