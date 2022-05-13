import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <div className="loginForm">
        <div className="logo">
          <h1>Westagram</h1>
        </div>
        <form className="userForm">
          <input
            className="userName"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            className="passWord"
            type="
        password"
            placeholder="비밀번호"
          />
        </form>

        <Link to="/main">
          <button className="loginBtn">로그인</button>
        </Link>

        <div className="links">비밀번호를 잊어버리셨나요?</div>
      </div>
    </div>
  );
};

export default Login;
