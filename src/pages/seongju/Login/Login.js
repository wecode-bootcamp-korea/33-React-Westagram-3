import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.scss';

function Login() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-seongju');
  };

  return (
    <main className="login_main">
      <div className="login_wrapper">
        <p className="login_title">Westagram</p>
        <input
          type="text"
          className="id"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input type="password" className="password" placeholder="비밀번호" />
        <button type="submit" className="login_button" onClick={goToMain}>
          로그인
        </button>
        <span id="password_forget">
          <Link to="/main-seongju">비밀번호를 잊으셨나요?</Link>
        </span>
      </div>
    </main>
  );
}

export default Login;
