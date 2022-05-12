import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillFacebook } from 'react-icons/ai';
import './Login.scss';

function Login() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main');
  };

  return (
    <main className="loginContainer">
      <h1>westagram</h1>
      <form>
        <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
        <input type="password" placeholder="비밀번호" />
        <button onClick={goToMain}>로그인</button>
      </form>
      <a href="#">
        <AiFillFacebook className="icon" />
        <span>Facebook으로 로그인</span>
      </a>
      <a href="#">비밀번호를 잊으셨나요?</a>
    </main>
  );
}

export default Login;
