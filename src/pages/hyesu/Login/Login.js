import React from 'react';
import './Login.scss';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const handleIdInput = e => {
    setInputId(e.target.value);
  };
  const handlePwInput = e => {
    setInputPw(e.target.value);
  };

  const disable = inputId.includes('@') && inputPw.length >= 5 ? true : false;

  return (
    <div>
      <div className="loginForm">
        <div className="logo">
          <h1>Westagram</h1>
        </div>
        <form className="userForm">
          <input
            onChange={handleIdInput}
            className="userName"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={handlePwInput}
            className="passWord"
            type="password"
            placeholder="비밀번호"
          />
        </form>

        <Link to="/main-hyesu">
          <button type="button" className="loginBtn" disabled={!disable}>
            로그인
          </button>
        </Link>

        <div className="links">비밀번호를 잊어버리셨나요?</div>
      </div>
    </div>
  );
};

export default Login;
