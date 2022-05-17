import React from 'react';
import './Login.scss';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [inputId, setInputId] = useState(''); //사용자 ID 입력(초기값/변경값)
  const [inputPw, setInputPw] = useState(''); //사용자 PW 입력(초기값/변경값)

  //ID와 PW를 입력하면 value값을 가르키는 이벤트 함수를 생성
  const handleIdInput = e => {
    setInputId(e.target.value);
  };
  const handlePwInput = e => {
    setInputPw(e.target.value);
  };

  //삼항연산자를 이용해서 로그인버튼 활성화 조건을 생성
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
