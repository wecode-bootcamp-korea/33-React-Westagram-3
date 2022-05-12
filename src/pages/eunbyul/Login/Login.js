import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-eunbyul');
  };

  return (
    <div className="Login">
      <section className="section">
        <div className="outer-container">
          <div className="container">
            <h1 className="logo">Westagram</h1>
            <form id="input-box">
              <input
                className="input-id"
                type="text"
                id="user-id"
                name="username"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                className="input-id"
                type="password"
                id="user-password"
                name="password"
                placeholder="비밀번호"
              />
              <button className="loginBtn" onClick={goToMain}>
                로그인
              </button>
            </form>
            <p className="login-error-msg hidden">
              아이디와 비밀번호를 입력해주세요.
            </p>
            <p className="lost-pw">비밀번호를 잊으셨나요?</p>
          </div>
          <div className="signup-box">
            <p className="signup-para">
              계정이 없으신가요?{' '}
              <span className="not-a-link-yet">가입하기</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
