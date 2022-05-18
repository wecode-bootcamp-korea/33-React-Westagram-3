import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleInput = event => setId(event.target.value);
  const handlePassword = event => setPw(event.target.value);

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-eunbyul');
    fetch('http://10.58.3.119:8000/users/signin', {
      method: 'post',
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(json => console.log(json));
  };

  return (
    <div className="Login">
      <section className="section">
        <div className="outerContainer">
          <div className="container">
            <h1 className="logo">Westagram</h1>
            <form id="inputBox">
              <input
                onChange={handleInput}
                value={id}
                className="inputId"
                type="email"
                id="userId"
                name="username"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                onChange={handlePassword}
                value={pw}
                className="inputId"
                type="password"
                id="userPassword"
                name="password"
                placeholder="비밀번호"
              />
              <button
                className="loginBtn"
                onClick={goToMain}
                disabled={id.includes('@') && pw.length >= 5 ? false : true}
              >
                로그인
              </button>
            </form>
            <p className="loginErrorMsg hidden">
              아이디와 비밀번호를 입력해주세요.
            </p>
            <p className="lostPw">비밀번호를 잊으셨나요?</p>
          </div>
          <div className="signupBox">
            <p className="signupPara">
              계정이 없으신가요? <span className="noLinkYet">가입하기</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
