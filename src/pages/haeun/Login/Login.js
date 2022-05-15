import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const [idInput, setIdInput] = useState();
  const [pwInput, setPwInput] = useState();
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-haeun');
  };

  const handleIdInput = e => {
    setIdInput(e.target.value);
  };

  const handlePwInput = e => {
    setPwInput(e.target.value);
  };

  return (
    <main className="loginContainer">
      <h1>westagram</h1>
      <form>
        <input
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleIdInput}
        />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={handlePwInput}
        />
        <button onClick={goToMain}>로그인</button>
      </form>
      <p>
        <img src="" alt="" />
        <span>Facebook으로 로그인</span>
      </p>
      <p>비밀번호를 잊으셨나요?</p>
    </main>
  );
}

export default Login;
