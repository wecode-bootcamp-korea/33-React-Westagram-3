import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.scss';

function Login() {
  const [Id, setId] = useState('');
  const [Pw, setPw] = useState('');
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-seongju');
  };

  const handleIdInput = event => {
    setId(event.target.value);
  };

  const handlePwInput = event => {
    setPw(event.target.value);
  };

  return (
    <main className="loginMain">
      <div className="loginWrapper">
        <p className="loginTitle">Westagram</p>
        <input
          type="text"
          className="id"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleIdInput}
        />
        <input
          type="password"
          className="password"
          placeholder="비밀번호"
          onChange={handlePwInput}
        />
        <button
          type="submit"
          className="loginButton"
          disabled={Id.includes('@') && Pw.length >= 5 ? false : true}
          onClick={goToMain}
        >
          로그인
        </button>
        <span id="passwordForget">
          <Link to="/main-seongju">비밀번호를 잊으셨나요?</Link>
        </span>
      </div>
    </main>
  );
}

export default Login;
