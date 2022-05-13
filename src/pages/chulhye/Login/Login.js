import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.scss';
import '/Users/sozzln/Desktop/33-React-Westagram-3/src/styles/reset.scss';
import LoginActivate from '../Login/LoginActivate';

function Login() {
  // const navigate = useNavigate();
  // const goToMain = () => {
  //   navigate('/main-chulhye');
  // };

  return (
    <div className="login-container">
      <div className="loginPage">
        <div className="mainLogo" style={{ fontFamily: 'Lobster, cursive' }}>
          Westagram
        </div>
        {/* <input
          type="text"
          className="inputId"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          type="password"
          className="inputPassword"
          placeholder="비밀번호"
        />
        <button className="loginBtn" onClick={goToMain}>
          로그인
        </button> */}

        <LoginActivate />
        <a
          className="passwordFind"
          href="https://www.instagram.com/accounts/password/reset/"
          target="_black"
        >
          비밀번호를 잊으셨나요?
        </a>
      </div>
      <Link className="loginToMain" to="/main-chulhye">
        메인으로 이동
      </Link>
    </div>
  );
}

export default Login;
